import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import customerServices from '../../services/customer.services';
const Customers = () => {
  const [customers,setCustomers]=useState([])
  useEffect(() => {
    getCustomers();
  }, [])
  const getCustomers = async ()=>{
    const data = await customerServices.getAllCustomer()
    console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    setCustomers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }
  return (
    <>
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
        <div class="row">
          <div class="col-12">
            <div class="card my-4">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight">
                      {' '}
                      <h6 class="text-white text-capitalize ps-3">Customers</h6>
                    </div>
                    <div class="p-2 bd-highlight">&nbsp;</div>
                    <div class="p-2 bd-highlight">
                      {' '}
                      <Link
                        to="/customer/create"
                        class="text-white text-capitalize ps-3"
                      >
                        {' '}
                        <i class="material-icons opacity-10">add_outline</i>
                      </Link>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="card-body px-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Customer
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Customer Id
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Balance
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Joined
                        </th>
                        <th class="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((doc, index) => {
                       
                        return (
                          
                          <tr key={index}>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-2.jpg"
                                  class="avatar avatar-sm me-3 border-radius-lg"
                                  alt="user1"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{ doc.name}</h6>
                                <p class="text-xs text-secondary mb-0">
                                 {doc.place}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                              <p class="text-xs font-weight-bold mb-0">{ doc.cust_id}</p>
                            <p class="text-xs text-secondary mb-0">
                              {doc.phone_no}
                            </p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              0.22
                            </span>
                          </td>
                          {/* <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                             {doc.timestamp}
                            </span>
                          </td> */}
                            <td class="align-middle">
                            <a
                              href="javascript:;"
                              class="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                                data-original-title="Edit user"
                                on
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        )
                      })}
                     

                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


export default Customers;