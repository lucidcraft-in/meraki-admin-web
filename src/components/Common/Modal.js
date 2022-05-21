import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
 import Form from 'react-bootstrap/Form';
 

const Popup = ({ show, handleClose, transactionType }) => {
    
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    
  return (
    <div>
      {' '}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {transactionType === 0 ? 'Receipt Payment' : 'Purchase'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Form className="m-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Amount Given"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>

           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default Popup;