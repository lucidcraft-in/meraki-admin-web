import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
 import Form from 'react-bootstrap/Form';
 import {
  Timestamp,
} from 'firebase/firestore';
import transactionServices from '../../services/transaction.services';
 


const Popup = ({
  show,
  handleClose,
  transactionType,
  customerId,
  navigate,
  isEdit,
  editTransactionId,
}) => {
  const [amount, setAmount] = useState(0);
  const [note, setDescription] = useState('');
  const [message, setMessage] = useState({ error: false, msg: '' });
  // const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    if (isEdit === true && editTransactionId !== '') {
      editHandler();
    }
  }, [editTransactionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (amount == '') {
      setMessage({ error: true, msg: 'Fields Value  Required' });
      return;
    }
    const newTransaction = {
      amount: amount,
      category: '',
      customerId: customerId,
      customerName: '',
      date: Timestamp.now(),
      discount: 0.0,
      invoiceNo: '',
      note: note,
      staffId: '',
      transactionType: transactionType,
      timestamp: Timestamp.now(),
    };

    try {
      await transactionServices.addTransaction(newTransaction);
      setMessage({ error: false, msg: 'New Transaction added successfully' });
      handleClose();
      navigate(`/customers`);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setAmount(0);
    setDescription('');
  };


    const editHandler = async () => {
      setMessage('');
      try {
        const docSnap = await transactionServices.getTransaction(
          editTransactionId
        );
        console.log('check dataa');
        console.log(docSnap);
        setAmount(docSnap.data().amount);
        setDescription(docSnap.data().note);
        
       
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }
    };
  return (
    <div>
      {' '}
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            {transactionType === 0 ? 'Receipt Payment' : 'Purchase'}
          </Modal.Title>
        </Modal.Header>
        <Form className="m-5" onSubmit={handleSubmit}>
          <Modal.Body>
            {' '}
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
                value={note}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};


export default Popup;