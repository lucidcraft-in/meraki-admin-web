import React,{ useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import goldRateServices from '../../services/goldRate.services';

const GoldRate = () => {
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
    console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    setGoldRate(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

 
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setMessage("")
  //   if (gram == "" || pavan == "" ) {
  //     setMessage({ error: true, msg: "Fields Value  Required" })
  //     return;
  //   }
  //   const newGoldRate = {
  //     down: down,
  //     up: up,
  //     gram: gram,
  //     pavan: pavan,
     
      
  //   }
  //   try {
  //     if (id !== undefined && id !== "") {
  //       await goldRateServices.updateGoldRate(id,newGoldRate)
  //     }
  //   }
  //   catch (err) {
  //     setMessage({ error: true, msg: err.msg })
  //   }
    
  // }
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
        <Form className="m-5" >
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>rate in Gram</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter gram"
                onChange={(e) => setGram(e.target.value)}
              //   value={name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>rate in 8 Gram</Form.Label>
            <Form.Control
              type="number"
                onChange={(e) => setPavan(e.target.value)}
              //   value={custId}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Up</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setUp(e.target.value)}
            //   value={phone}
            />
            <Form.Label>Down</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setDown(e.target.value)}
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
