import React, { useState, useEffect } from 'react';
import CreateSlid from './CreateSlide'
import { useParams, useNavigate } from 'react-router-dom';
import { db, storage } from '../../firebase';
import { ref, getDownloadURL, listAll,deleteObject  } from 'firebase/storage';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import sliderServices from '../../services/slide.services';
import { async } from '@firebase/util';


const Slider = () => {
  const slideCollectionRef = collection(db, 'slide');
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage,"images/")
  const handleShow = () => {
    setShow(true);

  }
  const handleClose = () => setShow(false);
  useEffect(() => {
    getSlides();
   
  }, [])

  const getSlides = async() => {
    const data = await sliderServices.getAllSlides()
    console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    setImageList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  const deleteSlide = async (id,url,name) => {
    const desertRef = ref(storage, `images/${name}`);
    console.log("check in delete ");
    console.log(id);
    console.log(url);
    const slideDoc = doc(db, 'slide', id);
    deleteDoc(slideDoc).then(() => {
      deleteObject(desertRef).then(() => {
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
     })
    
  }
  console.log(imageList);
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
      <CreateSlid
          show={show}
          handleClose={handleClose}
         
          navigate={navigate}
        
        />
        <div class="d-flex flex-row-reverse bd-highlight">
          <div class="p-2 bd-highlight"> </div>
          <div class="p-2 bd-highlight"> </div>
          <div class="p-2 bd-highlight">
            {' '}
            <button
              type="button"
              class="btn btn-outline-primary btn-sm mb-0"
              onClick={() => handleShow(0)}
            >
              Create
            </button>
          </div>
        </div>
        <div class="row mt-5">
          {
            imageList.map((url) => {
              return (
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
            <div class="card card-blog card-plain">
                    <div class="card-header p-0 mt-n4 mx-3">
                    
                <a class="d-block shadow-xl border-radius-xl">
                  <img
                    src={url.photo}
                    alt="img-blur-shadow"
                    class="img-fluid shadow border-radius-xl"
                  />
                </a>
              </div>
              <div class="card-body p-3">
                {/* <p class="mb-0 text-sm">Project #2</p>
                      <a href="javascript:;">
                        <h5>
                          Modern
                        </h5>
                      </a> */}

                <div class="d-flex align-items-center justify-content-between">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm mb-0"
                    onClick={() => {
                      if (window.confirm('Delete the item?')) {
                        deleteSlide(url.id,url.photo,url.name);
                      }
                    }}
                  >
                    Delete Slide
                  </button>
                  <div class="avatar-group mt-2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Elena Morison"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-1.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Ryan Milly"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-2.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Nick Daniel"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-3.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Peterson"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-4.jpg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
              )
            })
          }
          

    

        </div>
      </main>
    </>
  );
}


export default Slider