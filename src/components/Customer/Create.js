import React,{useState} from 'react'

 


import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const CreateCustomer = () => {
    

    const [name, setName] = useState('');
    const [custId, seCustId] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [place, setPlace] = useState('');
    
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
      <Form className="m-5">
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
}

export default CreateCustomer
