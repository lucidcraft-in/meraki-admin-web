import React,{ useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import goldRateServices from '../../services/goldRate.services';

import { useNavigate } from 'react-router-dom';
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();

const GoldRate = () => {

  const navigate = useNavigate();
  
  const [goldRate, setGoldRate] = useState([]);
  
  const [down, setDown] = useState(0);
  const [up, setUp] = useState(0);
  const [gram, setGram] = useState(0);
  const [pavan, setPavan] = useState(0);
  const [message, setMessage] = useState({ error: false, msg: '' });
  useEffect(() => {
    getGoldRate()
  }, [])
  const getGoldRate = async () => {
    const data = await goldRateServices.getAllGoldRate()

    const array = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
   
    setGoldRate(array);
    
    
    setGram(parseFloat(array[0].gram));
    setPavan(parseFloat(array[0].pavan));
    setUp(parseFloat(array[0].up));
    setDown(parseFloat(array[0].down));
 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    if (gram == "" || pavan == "" ) {
      setMessage({ error: true, msg: "Fields Value  Required" })
      return;
    }
    const newGoldRate = {
      down: down,
      up: up,
      gram: gram,
      pavan: pavan,
     
      
    }
    try {
      if (goldRate !== undefined && goldRate !== '') {
        await goldRateServices.updateGoldRate(goldRate[0].id, newGoldRate);

        const addMessage = httpsCallable(functions, 'sendNotificationGoldRate', );
        addMessage({ pavan: pavan }).then(result => {
          console.log(result.data);
        });

        navigate('/');
      }
    }
    catch (err) {
      setMessage({ error: true, msg: err.msg })
    }
    
  }
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
        <Form className="m-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>rate in Gram</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter gram"
              onChange={(e) => setGram(parseFloat(e.target.value))}
              value={gram}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>rate in 8 Gram</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setPavan(parseFloat(e.target.value))}
              value={pavan}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Up</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setUp(parseFloat(e.target.value))}
              value={up}
            />
            <Form.Label>Down</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setDown(parseFloat(e.target.value))}
              value={down}
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
