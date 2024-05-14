import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import NavBar from '../HomeNavbar/HomeNavbar'
import { setCookiesAndData } from '../Common/Functions';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const auth = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await auth.login(password, email);
      console.log(response);
      if (response.success) {
        setCookiesAndData(response);
        navigate('/welcome');
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  };

  return (
    <><NavBar />
      <div className="outer-container">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="logo" className="logo" />
        <div className="container">
          <h2 className="text-center">Login</h2>
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
            {loading && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {error && !loading && <p className="error">{error}</p>}
            <div className="divider mt-2 mb-2">Or</div>
            <button className="googleButton" type="submit"><img className='googleIcon' src='google.svg' alt='' />Continue With Google</button>
            <p className="registerLink">Don't have an account? <Link to="/signup">Sign Up</Link> </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
