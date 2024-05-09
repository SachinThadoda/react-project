import React, { useState } from 'react';
import './Login.css';
import { login } from '../Api/Api';
import { useNavigate } from 'react-router-dom';

import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');
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

  return (
    <div className="outer-container">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="logo" className="logo" />
      <div className="container">
        <h2 className="text-center">Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <span className="input-group-addon"><AiOutlineUser /></span>
            <input className="loginInput" type="text" placeholder="Enter Email Address" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><AiOutlineLock /></span>
            <input className="loginInput" type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button className="loginButton mt-4 fs-5" type="submit">Login</button>
          <div className="divider mt-2 mb-2">Or</div>
          <button className="googleButton" type="submit"><img className='googleIcon' src='google.svg' alt='' />Continue With Google</button>
        </form>
        <span>{response}</span>
      </div>
    </div>
  );
}

export default Login;
