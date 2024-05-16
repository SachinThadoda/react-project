import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../HomeNavbar/HomeNavbar'
import { signUp } from '../Api/Api'
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await signUp(email, username, department, password);
      if (response.success) {
        navigate('/login');
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <><NavBar />
    <div className="outer-container">
      <div className="container">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input className="signUpInput" type="text" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
          <input className="signUpInput" type="text" placeholder="Enter Email Address" value={email} onChange={handleEmailChange} required />
          <input className="signUpInput" type="text" placeholder="Enter Department" value={department} onChange={handleDepartmentChange} required />
          <input className="signUpInput" type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required />
          <input className="signUpInput" type="password" placeholder="Enter Password Again to Confirm" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
          <button className="signUpButton mt-4 fs-5" type="submit">Sign Up</button>
          {loading && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && !loading && <p className="error">{error}</p>}
          <div className="divider mt-2 mb-2">Or</div>
          <button className="googleButton" type="submit"><img className='googleIcon' src='google.svg' alt='' />Continue With Google</button>
          <p className="registerLink">Already have an account? <Link to="/login">Sign In</Link> </p>
        </form>
      </div>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="logo" className="logo" />
    </div>
    </>
  );
}

export default SignUp;
