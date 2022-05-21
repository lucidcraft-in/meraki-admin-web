import React from 'react'
import { Link } from 'react-router-dom';

const Customers =()=> {
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
                      <h6 className="text-white text-capitalize ps-3">Customers</h6>
                    </div>
                    <div className="p-2 bd-highlight">&nbsp;</div>
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
                    <tbody>
                     
                        <tr>
                        <td>
                           <Link to='/customer'>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="avatar avatar-sm me-3 border-radius-lg"
                                  alt="user1"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">John Michael</h6>
                                <p className="text-xs text-secondary mb-0">
                                  john@creative-tim.com
                                </p>
                              </div>
                            </div></Link>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                            <p className="text-xs text-secondary mb-0">
                              Organization
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              23/04/18
                            </span>
                          </td>
                          <td className="align-middle">
                            <Link
                              to="/customer/update"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </Link>
                            &nbsp;
                            <a
                              onClick={() => {
                                if (window.confirm('Delete the item?')) {
                                  // this.removeToCollection(key, e);
                                }
                              }}
                              className="text-danger font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                className="avatar avatar-sm me-3 border-radius-lg"
                                alt="user6"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Miriam Eric</h6>
                              <p className="text-xs text-secondary mb-0">
                                miriam@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p className="text-xs text-secondary mb-0">Developer</p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            14/09/20
                          </span>
                        </td>
                        <td className="align-middle">
                          <a
                            href="javascript:;"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                          &nbsp;
                          <a
                            href="javascript:;"
                            className="text-danger font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
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