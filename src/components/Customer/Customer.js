 
import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Popup from '../Common/Modal';
import './Customer.css'
import transactionServices from '../../services/transaction.services';
import customerServices from '../../services/customer.services';
const Customer = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([])
  const [message, setMessage] = useState({ error: false, msg: '' });
  const [name, setName] = useState('');
  const [custId, seCustId] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [place, setPlace] = useState('');
  useEffect(() => {
    getTransactions();
    editHandler();
  }, [])

  const editHandler = async () => { 
    try { 

      const docSnap = await customerServices.getCustomer(id)
      setName(docSnap.data().name)
      seCustId(docSnap.data().cust_id)
      setPhone(docSnap.data().phone_no)
      setAddress(docSnap.data().address)
      setPlace(docSnap.data().place)

    }
    catch (err) {
      setMessage({error:true,msg:err.message})
    }
  }
  const getTransactions = async ()=>{
    const data = await transactionServices.getAllTransactions()
    console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  }
  const [show, setShow] = useState(false);
   const [transactionType, setType] = useState(0);

   const handleClose = () => setShow(false);
  const handleShow = (type) => {
    setShow(true);

    setType(type);
  }
  
  
  
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5 customer-body">
        <Popup
          show={show}
          handleClose={handleClose}
          transactionType={transactionType}
          customerId={id}
        />
        <div className="row">
          <div className="col-md-7 mt-4">
            <div className="card">
              <div className="card-header pb-0 px-3">
                <h6 className="mb-0">Customer Information</h6>
              </div>
              <div className="card-body pt-4 p-3">
                <div className="row gx-4 mb-2">
                  <div className="col-auto">
                    <div className="avatar avatar-xl position-relative">
                      <img
                        src="../assets/img/team-2.jpg"
                        alt="profile_image"
                        className="w-100 border-radius-lg shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="col-auto my-auto">
                    <div className="h-100">
                      <h5 className="mb-1">{ name}</h5>
                      <p className="mb-0 font-weight-normal text-sm">
                        Scheme Customer
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="success"
                  type="submit"
                  onClick={() => handleShow(0)}
                >
                  Receipt
                </Button>
                &nbsp; &nbsp;
                <Button
                  variant="danger"
                  type="submit"
                  onClick={() => handleShow(1)}
                >
                  Purchase
                </Button>
                <div className="col-12 col-xl-12">
                  <div>
                    <div className="card-header pb-0 p-3">
                      <div className="row">
                        <div className="col-md-8 d-flex align-items-center">
                          <h6 className="mb-0">Personal Information</h6>
                        </div>
                        <div className="col-md-4 text-end">
                          <a href="javascript:;">
                            <i
                              className="fas fa-user-edit text-secondary text-sm"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit Profile"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <hr className="horizontal gray-light my-4" />
                      <ul className="list-group">
                        <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                          <strong className="text-dark">Full Name:</strong>{' '}
                          &nbsp; {name}
                        </li>
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Mobile:</strong> &nbsp;
                          {phone}
                        </li>
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Customer Id:</strong>{' '}
                          &nbsp; {custId}
                        </li>
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Location:</strong>{' '}
                          &nbsp; {place}
                        </li>
                        <li className="list-group-item border-0 ps-0 pb-0">
                          <strong className="text-dark text-sm">
                            Address:
                          </strong>{' '}
                          &nbsp; &nbsp; {address}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card h-100 mb-4">
              <div className="card-header pb-0 px-3">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="mb-0">Your Transaction's</h6>
                  </div>
                  <div className="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                    <i className="material-icons me-2 text-lg">date_range</i>
                    <small>23 - 30 March 2020</small>
                  </div>
                </div>
              </div>
              <div className="card-body pt-4 p-3">
                <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">
                  Newest
                </h6>
                {
                  transactions.map((doc, index) => { 
                    
                    if (doc.customerId == id) {
                      
                      return (
                        <ul className="list-group">
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                          <i className="material-icons text-lg">expand_more</i>
                        </button>
                        <div className="d-flex flex-column">
                                <h6 className="mb-1 text-dark text-sm">{ doc.note}</h6>
                          <span className="text-xs">
                                  27 March 2020, at 12:30 PM
                                  {/* {doc.date} */}
                          </span>
                        </div>
                      </div>
                            
                      <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                        {doc.amount}
                      </div>
                    </li>
                    {/* <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                          <i className="material-icons text-lg">expand_less</i>
                        </button>
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Apple</h6>
                          <span className="text-xs">
                            27 March 2020, at 04:30 AM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,000
                      </div>
                    </li> */}
                  </ul>
                      )
                    }
               

                  })
                }
                
                <h6 className="text-uppercase text-body text-xs font-weight-bolder my-3">
                  Yesterday
                </h6>
                {/* <ul className="list-group">
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="material-icons text-lg">expand_less</i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Stripe</h6>
                        <span className="text-xs">
                          26 March 2020, at 13:45 PM
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      + $ 750
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="material-icons text-lg">expand_less</i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">HubSpot</h6>
                        <span className="text-xs">
                          26 March 2020, at 12:30 PM
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      + $ 1,000
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="material-icons text-lg">expand_less</i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Creative Tim</h6>
                        <span className="text-xs">
                          26 March 2020, at 08:30 AM
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                      + $ 2,500
                    </div>
                  </li>
                  <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
                        <i className="material-icons text-lg">priority_high</i>
                      </button>
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">Webflow</h6>
                        <span className="text-xs">
                          26 March 2020, at 05:00 AM
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-dark text-sm font-weight-bold">
                      Pending
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


export default Customer