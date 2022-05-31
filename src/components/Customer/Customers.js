import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import customerServices from '../../services/customer.services';
const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [searchQuery, handleSearch] = useState('');
  
  useEffect(() => {
    getCustomers();
  }, [])
  const getCustomers = async ()=>{
    const data = await customerServices.getAllCustomer()
    console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  }
  const deleteHandler = async (id) => {
    await customerServices.deletCustome(id)
    getCustomers()
  }
   let allCustomers;

  if (searchQuery != '') {

   let updatedList = customers.filter(function (customer) {
     return (
       customer.cust_id.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
     );
   });
    
    
    
    if (updatedList.length > 0) {
      allCustomers = updatedList.map((doc, index) => (
        <tr key={index}>
          <td>
            <Link to={`/customer/${doc.id}`}>
              <div className="d-flex px-2 py-1">
                <div>
                  <img
                    src="../assets/img/team-2.jpg"
                    className="avatar avatar-sm me-3 border-radius-lg"
                    alt="user1"
                  />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{doc.name}</h6>
                  <p class="text-xs text-secondary mb-0">{doc.place}</p>
                </div>
              </div>
            </Link>
          </td>

          <td>
            <p class="text-xs font-weight-bold mb-0">{doc.cust_id}</p>
            <p class="text-xs text-secondary mb-0">{doc.phone_no}</p>
          </td>
          <td class="align-middle text-center text-sm">
            <span
              class={
                doc.balance < 0
                  ? 'badge badge-sm bg-gradient-danger'
                  : 'badge badge-sm bg-gradient-success'
              }
            >
              {doc.balance}
            </span>
          </td>
          {/* <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                             {doc.timestamp}
                            </span>
                          </td> */}
          <td class="align-middle">
            <Link
              to={`/customer/update/${doc.id}`}
              className="text-secondary font-weight-bold text-xs"
              data-toggle="tooltip"
              data-original-title="Edit user"
              on
            >
              Edit
            </Link>
            &nbsp;
            <a
              onClick={() => {
                if (window.confirm('Delete the item?')) {
                  deleteHandler(doc.id);
                }
              }}
              className="text-danger font-weight-bold text-xs pointer"
              data-toggle="tooltip"
              data-original-title="Edit user"
            >
              Delete
            </a>
          </td>
        </tr>
      ));
    }

  } else {
    
    allCustomers = customers.map((doc, index) => (
      <tr key={index}>
        <td>
          <Link to={`/customer/${doc.id}`}>
            <div className="d-flex px-2 py-1">
              <div>
                <img
                  src="../assets/img/team-2.jpg"
                  className="avatar avatar-sm me-3 border-radius-lg"
                  alt="user1"
                />
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{doc.name}</h6>
                <p class="text-xs text-secondary mb-0">{doc.place}</p>
              </div>
            </div>
          </Link>
        </td>

        <td>
          <p class="text-xs font-weight-bold mb-0">{doc.cust_id}</p>
          <p class="text-xs text-secondary mb-0">{doc.phone_no}</p>
        </td>
        <td class="align-middle text-center text-sm">
          <span
            class={
              doc.balance < 0
                ? 'badge badge-sm bg-gradient-danger'
                : 'badge badge-sm bg-gradient-success'
            }
          >
            {doc.balance}
          </span>
        </td>
        {/* <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                             {doc.timestamp}
                            </span>
                          </td> */}
        <td class="align-middle">
          <Link
            to={`/customer/update/${doc.id}`}
            className="text-secondary font-weight-bold text-xs"
            data-toggle="tooltip"
            data-original-title="Edit user"
            on
          >
            Edit
          </Link>
          &nbsp;
          <a
            onClick={() => {
              if (window.confirm('Delete the item?')) {
                deleteHandler(doc.id);
              }
            }}
            className="text-danger font-weight-bold text-xs pointer"
            data-toggle="tooltip"
            data-original-title="Edit user"
          >
            Delete
          </a>
        </td>
      </tr>
    ));
  }

  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">
                      {' '}
                      <h6 className="text-white text-capitalize ps-3">
                        Customers
                      </h6>
                    </div>
                    <div className="p-2 bd-highlight">
                      <div class="input-group input-group-outline">
                        {/* <label class="form-label">Type here...</label> */}
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => handleSearch(e.target.value)}
                          value={searchQuery}
                          name="searchQuery"
                        />
                      </div>
                    </div>
                    <div className="p-2 bd-highlight">
                      {' '}
                      <Link
                        to="/customer/create"
                        className="text-white text-capitalize ps-3"
                      >
                        {' '}
                        <i className="material-icons opacity-10">add_outline</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Customer
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Customer Id
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Balance
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Joined
                        </th>
                        <th className="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>{allCustomers}</tbody>
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