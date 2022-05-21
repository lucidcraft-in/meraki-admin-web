import React from 'react';
 
import {
  BrowserRouter ,
  Switch,
  Route,
  Routes,
  Link,
 
} from 'react-router-dom';

import Home from './components/Home';
import CreateCustomer from './components/Customer/Create';
import UpdateCustomer from './components/Customer/Update';


import './App.css';

function App() {

  const onchange = () => {
    
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customer/create" element={<CreateCustomer />} />
        <Route exact path="/customer/update/" element={<UpdateCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
