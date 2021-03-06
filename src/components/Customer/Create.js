import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import {
  Timestamp,
 timestamp
} from 'firebase/firestore';

import customerServices from '../../services/customer.services';
import { Alert } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateCustomer = ( ) => {
  
 const navigate = useNavigate();

  const [name, setName] = useState('');
  const [custId, seCustId] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [place, setPlace] = useState('');
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: '' });
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

      timestamp: Timestamp.now(),
      token:""
      
    }
    
    try {
      const res = await customerServices.addCustomer(newCustomer);
       

      setMessage({ error: false, msg: "New Customer added successfully" });
      navigate('/customers');
    }
    catch (err) {
      setMessage({error:true,msg:err.message})
    }
    setName("")
    setAddress("")
    seCustId("")
    setPhone("")
    setPlace("")

  };

 

  return (
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
      {/* {message?.msg && (<Alert variant={message?.error ? "danger" : "success"}>
        {" "}
        {message?.msg}
      </Alert>)} */}

      <Form className="m-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Customer Id</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => seCustId(e.target.value)}
            value={custId}
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required={true}
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

export default CreateCustomer;
