import React from 'react';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './components/Home';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import CustomerDataService from "./services/customer.services"
import './App.css';

function App() {
  this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCustId = this.onChangeCustId.bind(this);
    this.onChangephoneNo= this.onChangeCustId.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
  this.state = {
    name: "",
    cust_id: "",
    phone_no: "",
    address: "",
    place:"",
    submitted: false,
  };
  return (
    // <Router>
    //   <Route exact path="/" element={<Home />}></Route>
    // </Router>
    <Form className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Customer Id</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Place</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default App;
