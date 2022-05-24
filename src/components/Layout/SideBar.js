import React from 'react'
import { Link } from 'react-router-dom';
 

import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  
   const navigate = useNavigate();

  if (!localStorage.staff) {
    console.log("not");
    navigate('/login');
  }

  const logout = () => {
    localStorage.removeItem('staff');
     navigate('/login');
  }

  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          className="navbar-brand m-0"
          href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
          target="_blank"
        >
          <img
            src="./assets/img/logo-ct.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold text-white">MERAKI GOLD</span>
        </a>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto  max-height-vh-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/"
              className="nav-link text-white active bg-gradient-primary"
             
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">dashboard</i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/customers' className="nav-link text-white " href="./pages/tables.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">table_view</i>
              </div>
              <span className="nav-link-text ms-1">CUSTOMERS</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/slide"
              className="nav-link text-white "
              href="./pages/billing.html"
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">receipt_long</i>
              </div>
              <span className="nav-link-text ms-1">SLIDE</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gold"
              className="nav-link text-white "
              href="./pages/virtual-reality.html"
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
              </div>
              <span className="nav-link-text ms-1">GOLD RATE</span>
            </Link>
          </li>
        
          
         
         
         
          <li className="nav-item">
            <Link className="nav-link text-white " to='/login'>
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">assignment</i>
              </div>
              <span className="nav-link-text ms-1" onClick={logout}>Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}


export default SideBar