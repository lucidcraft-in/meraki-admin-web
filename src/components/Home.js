import React, { useEffect, useState } from 'react';

import customerServices from '../services/customer.services';
import goldRateServices from '../services/goldRate.services';

function Home() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCustomerCount, setCustomerCount] = useState(0);
   const [goldRate, setGoldRate] = useState(0);
  
 useEffect(() => {
   getCustomers();
   getGoldRate();
 }, []);

    const getCustomers = async () => {
      const data = await customerServices.getAllCustomer();
      let bal = 0;
      data.docs.map((doc) => {
           bal =doc.data().balance 
      })
      setTotalAmount(bal)
    
      setCustomerCount(data.docs.length);
    
  };
  

    const getGoldRate = async () => {
      const data = await goldRateServices.getAllGoldRate();

      const array = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      

      setGoldRate(array[0].gram);
     
    };
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
        <div className="container-fluid py-4 ">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">weekend</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Total Amount</p>
                    <h4 className="mb-0">₹ {totalAmount}</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0">Total Deposit amount in Scheme</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">
                      Total Customers
                    </p>
                    <h4 className="mb-0">{totalCustomerCount}</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0">Your Customers</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Gold Rate</p>
                    <h4 className="mb-0">₹ {goldRate} /gram</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0">
                    <span className="text-danger text-sm font-weight-bolder">
                      -2%
                    </span>{' '}
                    than yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer py-4  fixed-bottom">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6"></div>
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    © <script>document.write(new Date().getFullYear())</script>,
                    made with <i className="fa fa-heart"></i> by
                    <a
                      href="https://www.lucidcraft.in/"
                      className="font-weight-bold"
                      target="_blank"
                    >
                      lucidcraft.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Home;
