import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Timestamp } from 'firebase/firestore';
import transactionServices from '../../services/transaction.services';
import customerService from '../../services/customer.services';
import { async } from '@firebase/util';

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
  const [custBalanceDb, setCustBalanceDb] = useState(0);
  const [custbalance, setCustBalance] = useState(0);
  const [oldAmount, setOldAmount] = useState(0);
  const [note, setDescription] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState({ error: false, msg: '' });
  // const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    if (isEdit === true && editTransactionId !== '') {
      editHandler();
    }
    getCustomer();
  }, [editTransactionId]);

  const getCustomer = async () => {
    try {
      const docSnap = await customerService.getCustomer(customerId);
      console.log('check dataa');
      console.log(docSnap);
      setCustBalanceDb(docSnap.data().balance);
      setToken(docSnap.data().token)
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (amount == '') {
      setMessage({ error: true, msg: 'Fields Value  Required' });
      return;
    }
    const newTransaction = {
      amount: parseFloat(amount),
      customerId: customerId,
      customerName: '',
      date: Timestamp.now(),
      note: note,
      transactionType: transactionType,
      timestamp: Timestamp.now(),
      // here remoove after tsr
      // category:"",
      // discount: 0,
      // invoiceNo:"",
      // staffId:"",
    };

    const editedTransaction = {
      amount:parseFloat(amount),

      customerId: customerId,

      date: Timestamp.now(),

      note: note,

      timestamp: Timestamp.now(),
    };

    try {
      if (isEdit === true) {
        let decreaseBalance = 0;
        let newTempBalnce = 0;
        // recive amount
        if (transactionType == 0) {
          decreaseBalance = custBalanceDb - oldAmount;
          newTempBalnce = decreaseBalance + parseFloat(amount);
        }
        //  purchase amount
        else if (transactionType == 1) {
          console.log('custBalanceDb', custBalanceDb);
          console.log('oldAmount', oldAmount);

          console.log(' parseFloat(amount)', parseFloat(amount));

          decreaseBalance = custBalanceDb + parseFloat(oldAmount);
          newTempBalnce = decreaseBalance - parseFloat(amount);

          console.log('decreaseBalance', decreaseBalance);
          console.log('newTempBalnce', newTempBalnce);
        }
        setCustBalance(newTempBalnce);

        const editedUserBalance = {
          balance: parseFloat(newTempBalnce),
        };

        await transactionServices.updateTransaction(
          editTransactionId,
          editedTransaction,
          editedUserBalance,
          customerId
        );

        setMessage({
          error: false,
          msg: ' Transaction Updated successfully',
        });
        handleClose();
        navigate(`/customers`);
      } else {
        let newTempBalnce = 0;

        if (transactionType == 0) {
          newTempBalnce = custBalanceDb + parseFloat(amount);
        } else if (transactionType == 1) {
          newTempBalnce = custBalanceDb - parseFloat(amount);
        }

        setCustBalance(newTempBalnce);
       
        const newUserBalance = {
          balance: parseFloat(newTempBalnce),
        };

        await transactionServices.addTransaction(
          newTransaction,
          newUserBalance,
          customerId
        );
        if (transactionType == 0) {
          const payloadRecive = {
            token: token,
            notification: {
              title: "Transaction Completed",
              body: `Add RS ${amount} to your account`,
            },
            data: {
              body: `Add RS ${amount} to your account`,
            },
          };
          // admin.messaging().send(payloadRecive).
          // then((response) => {
          //   console.log("Successfully sent message:",
          //       response);
          //   // return {success: true};
          // }).catch((error) => {
          //   return {error: error.code};
          // });
        } else {
          const payloadPurchase = {
            token: token,
            notification: {
              title: "Transaction Completed",
              body: `Reduce RS ${amount} to your account`,
            },
            data: {
              body: `Reduce RS ${amount} to your account`,
            },
          };
          // admin.messaging().send(payloadPurchase).
          // then((response) => {
          //   console.log("Successfully sent message:",
          //       response);
          //   // return {success: true};
          // }).catch((error) => {
          //   return {error: error.code};
          // });
        }
        
        setMessage({ error: false, msg: 'New Transaction added successfully' });
        handleClose();
        navigate(`/customers`);
      }
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
      setOldAmount(docSnap.data().amount);
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
                type="number"
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
