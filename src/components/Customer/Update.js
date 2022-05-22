import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import customerServices from '../../services/customer.services';
import { async } from '@firebase/util';

const UpdateCustomer = ({match}) => {
  const [name, setName] = useState('');
  const [custId, seCustId] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [place, setPlace] = useState('');
  const [message, setMessage] = useState({ error: false, msg: '' });
  // const userId =match.params.id;
  const { id } = useParams();
  console.log("check user id first");
  console.log(id);
  const editHandler = async () => {
    setMessage("")
    try {
      const docSnap = await customerServices.getCustomer(id)
      console.log("check dataa");
      console.log(docSnap);
      setName(docSnap.data().name)
      seCustId(docSnap.data().cust_id)
      setPhone(docSnap.data().phone_no)
      setAddress(docSnap.data().address)
      setPlace(docSnap.data().place)
      console.log("check user name");
      console.log(name);
    }
    catch (err) {
      setMessage({error:true,msg:err.message})
    }
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    if (name == "" || custId == "" || phone == "") {
      setMessage({ error: true, msg: "Fields Value  Required" })
      return;
    }
    const newCustomer = {
      name: name,
      cust_id: custId,
      phone_no: phone,
      address: address,
      place: place,
      balance: 0.00,
      schemeType: "Monthly",
      staffId: "",
      // timestamp: Timestamp.now(),
      token:""
      
    }
    try {
      if (id !== undefined && id !== "") {
        await customerServices.updateCustomer(id,newCustomer)
      }
    }
    catch (err) {
      setMessage({ error: true, msg: err.msg })
    }
    
  }
  useEffect(() => {

    if (id !== undefined && id !== "") {
      editHandler()
    }
    
  },[id])
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
      <Form className="m-5"  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Customer Id</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => seCustId(e.target.value)}
            value={custId}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Place</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPlace(e.target.value)}
            value={place}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default UpdateCustomer;
