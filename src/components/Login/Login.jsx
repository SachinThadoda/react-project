import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import NavBar from '../HomeNavbar/HomeNavbar'
import { setCookiesAndData } from '../Common/Functions';
import ForgotPassword from './ForgotPassword'
import { verifyOtp } from './VerifyOtp';
import './Login.css';

function Login() {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [state, setState] = useState('login');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setState('forgotPassword');
  };

  const handleShowOtp = (success) => {
    if (success) {
      setShowOtp(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await auth.login(password, email);
      console.log(response);
      if (response.success) {
        setCookiesAndData(response);
        navigate('/home');
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

  const renderComponent = () => {

    switch (state) {
      case 'login':
        return (
          <>
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
              <div className="d-flex justify-content-between">
                <div>
                  {loading && (
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                  {error && !loading && <p className="text-danger">{error}</p>}
                </div>
                <a href="/" className="forgotPassword" onClick={handleForgotPasswordClick}>Forgot Password?</a>
              </div>
              <div className="divider mt-2 mb-2">Or</div>
              <button className="googleButton" type="button">
                <img className='googleIcon' src='google.svg' alt='' />Continue With Google
              </button>
              <p className="registerLink">Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
          </>
        );

      case 'forgotPassword':
        return <ForgotPassword onSuccess={() => setState('otp')} />;

      case 'otp':
        return <verifyOtp  />;

      case 'changePassword':
        // return <ChangePassword onSuccess={() => setState('login')} />;

      default:
        return null;
    }
  }

  return (
    <>
      <NavBar />
      <div className="outer-container">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="logo" className="logo" />
        <div className="container">
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default Login;
