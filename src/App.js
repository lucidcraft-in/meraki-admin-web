import React from 'react';
 
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  Outlet,
  
} from 'react-router-dom';

import Sidebar from './components/Layout/SideBar';

import Home from './components/Home';

import Customers from './components/Customer/Customers';
import Customer from './components/Customer/Customer';
import CreateCustomer from './components/Customer/Create';
import UpdateCustomer from './components/Customer/Update';

import Slider from './components/Slider/Slider';


import GoldRate from './components/Goldrate/Gold';

import Login from './components/Auth/Login';
 


import './App.css';

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

function App() {

 

  return (
    <BrowserRouter>
      

      <Routes>
        <Route element={<SidebarLayout />}>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/slide" element={<Slider />} />

          <Route exact path="/gold" element={<GoldRate />} />
          <Route exact path="/customers" element={<Customers />} />
          <Route exact path="/customer/:id" element={<Customer />} />
          <Route exact path="/customer/create" element={<CreateCustomer />} />
          <Route
            exact
            path="/customer/update/:id"
            element={<UpdateCustomer />}
          />
        </Route>

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
