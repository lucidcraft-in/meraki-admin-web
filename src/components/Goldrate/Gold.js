import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const GoldRate =()=> {
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
        <Form className="m-5" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>rate in Gram</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter gram"
              //   onChange={(e) => setName(e.target.value)}
              //   value={name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>rate in 8 Gram</Form.Label>
            <Form.Control
              type="number"
              //   onChange={(e) => seCustId(e.target.value)}
              //   value={custId}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Up</Form.Label>
            <Form.Control
              type="number"
            //   onChange={(e) => setPhone(e.target.value)}
            //   value={phone}
            />
            <Form.Label>Down</Form.Label>
            <Form.Control
              type="number"
            //   onChange={(e) => setPhone(e.target.value)}
            //   value={phone}
            />
          </Form.Group>

          

          

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </main>
    </>
  );
}

export default GoldRate
