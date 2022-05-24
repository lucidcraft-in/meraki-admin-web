import React, { useEffect, useState } from 'react';
import './Login.css';

import LoginDataService from '../../services/login.services';

import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [staffs, setStaffs] = useState([]);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] =useState('')
  
    useEffect(() => {
      getAuth();
    }, []);

  const getAuth = async () => {
    const data = await LoginDataService.getAllStaff();
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setStaffs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  const authLogin = () => {
    console.log(phone);

    if (phone != '' && password != '') {
      
      staffs.map((staff) => {
        if (staff.phoneNo != phone) {
          setError('Phone number is invalid');
          return;
        }

          if (staff.password != password) {
            setError('Password is invalid');
            return;
        }
        
          localStorage.setItem('staff', staff);
         navigate('/');

      })
    } else {
       console.log('error');
      setError('Please fill data')
    }

  }


  return (
    <main className="main-content  mt-0">
      <div className="page-header align-items-start min-vh-100 bg-image">
        <span className="mask bg-gradient-dark opacity-6"></span>
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                      Sign in
                    </h4>
                    <div className="row mt-3">
                      <div className="col-2 text-center ms-auto">
                        <a className="btn btn-link px-3" href="javascript:;">
                          <i className="fa fa-facebook text-white text-lg"></i>
                        </a>
                      </div>
                      <div className="col-2 text-center px-1">
                        <a className="btn btn-link px-3" href="javascript:;">
                          <i className="fa fa-github text-white text-lg"></i>
                        </a>
                      </div>
                      <div className="col-2 text-center me-auto">
                        <a className="btn btn-link px-3" href="javascript:;">
                          <i className="fa fa-google text-white text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form role="form" className="text-start">
                    <div className="input-group input-group-outline my-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required={true}
                      />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required={true}
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label mb-0 ms-2"
                        for="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <div class="col-lg-12 col-sm-6 col-12 mt-lg-0 mt-2">
                      <button
                        class="btn bg-gradient-danger w-100 mb-0 toast-btn"
                        type="button"
                        data-target="dangerToast"
                      >
                        {error}
                      </button>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                        onClick={authLogin}
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-center">
                      Don't have an account?
                      <a className="text-primary text-gradient font-weight-bold">
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
