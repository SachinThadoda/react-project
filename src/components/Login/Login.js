import React, { useEffect, useState } from 'react';
import './Login.css';
import { login } from '../Api/Api';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState(''); // [1
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(password, email);

      if (response) {
        setResponse("Login successful")
      } else {
        setResponse("Login failed")
      }

      navigate('/welcome');
    } catch (error) {
      setError('Login failed');
    }

  };

  const fetchGet = () => {

  }


  useEffect(() => {

    fetchGet()
  }, [password]);



  return (
    // <div class="container">
    //   <h2>Login</h2>
    //   {error && <p className="error">{error}</p>}
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Email"
    //       value={email}
    //       onChange={handleEmailChange}
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //       required
    //     />
    //     <button id="loginButton" type="submit">Login</button>
    //   </form>
    //   <span>{response}</span>
    // </div>
    <section class="vh-100 mt-5">
      {/* <div class="container-fluid h-custom"> */}
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample" />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3" style={{ fontFamily: 'Roboto, sans-serif' ,marginRight: '20px'}}> Sign in with</p>

              <button type="button" className="btn btn-facebook rounded-circle mx-1" style={{ width: '40px', height: '40px', backgroundColor: '#3b71ca', borderColor: '#3b5998', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FaGoogle color="white" size={20} />
              </button>

              <button type="button" className="btn btn-facebook rounded-circle mx-1" style={{ width: '40px', height: '40px', backgroundColor: '#3b71ca', borderColor: '#3b5998', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FaFacebookF color="white" size={20} />
              </button>

              <button type="button" className="btn btn-facebook rounded-circle mx-1" style={{ width: '40px', height: '40px', backgroundColor: '#3b71ca', borderColor: '#3b5998', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FaTwitter color="white" size={20} />
              </button>

            </div>
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control form-control-lg"
                placeholder="Email address" value={email} />
              {/* <label class="form-label" for="form3Example3">Email address</label> */}
            </div>
            <div data-mdb-input-init class="form-outline mb-3">
              <input type="password" id="form3Example4" class="form-control form-control-lg"
                placeholder="Password" value={password} />
              {/* <label class="form-label" for="form3Example4">Password</label> */}
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-body">Forgot password?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
              <p class="medium fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                class="link-danger">Register</a></p>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
      {/* <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div class="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div> */}
    </section>
  );
}

export default Login;
