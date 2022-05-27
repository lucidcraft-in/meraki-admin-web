import React, { useState, useEffect } from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { db, storage } from '../../firebase';
import { ref, uploadBytes,getDownloadURL,uploadBytesResumable  } from 'firebase/storage';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

 import {
  Timestamp,
} from 'firebase/firestore';

const CreateSlide = (
    {
        show,
    handleClose,
    navigate,
   }
    
) => { 
  const [imageUpload, setImageUpload] = useState(null);
  const slideCollectionRef = collection(db, 'slide');
  const [progress,setProgress]=useState(0)
  const upload = () => {
    if (imageUpload == null) return;
    
    const imageRef = ref(storage, `images/${imageUpload.name}`)
    const uploadTask = uploadBytesResumable(imageRef, imageUpload)

    uploadTask.on("statE_changed", (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(prog)
    }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          console.log("check image url")
          console.log(url);
          const newSlide = {
                photo: url,
                name: imageUpload.name,
              }
              addDoc(slideCollectionRef, newSlide)
          alert("Slide Addedd success");
          handleClose();
      })
    }
    )
  
    // console.log(imageRef);
    // console.log(imageRef.fullPath);
    // console.log(imageUpload);
    // uploadBytes(imageRef, imageUpload).then(() => {
    //   console.log("chechhhhckk");
    //   // console.log(newSlide);
    //   console.log( storage.ref(`/images/${imageUpload.name}`).child(imageUpload.name).getDownloadURL().then(url=>{}));
    //   const newSlide = {
    //     photo: imageRef.fullPath,
    //     name: imageUpload.name,
    //   }
    
    //   addDoc(slideCollectionRef, newSlide)
    // })


        // if(image == null)
        //     return;
        //     storage.ref(`/images/${image.name}`).child(image.name).getDownloadURL().then(url => {
        //        db
        //         .collection('slide')
        //         .add({
        //             photo: url,
        //             name:image.name,
        //         })
        //         .then(() => {
        //             setImage('')
        //         })
        //     });
        //     storage.ref(`/images/${image.name}`).put(image)
        // .on("state_changed" , alert("success") , alert);
      }
    
    
    return (
        <div>
          {' '}
          <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>
                 Add Slide
              </Modal.Title>
            </Modal.Header>
            <Form className="m-5" >
              <Modal.Body>
                        {' '}
              <input type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
              
                        {/* <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/> */}
                
                        
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={upload}>
                Upload
                </Button>
                      {/* <Button variant="primary" type="submit"
                            onClick={this.handleUpload}>
                            Save Changes,
                </Button> */}
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      );
}

export default CreateSlide;