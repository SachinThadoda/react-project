import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { setCookiesAndData } from '../Common/Functions';
import NavBar from '../HomeNavbar/HomeNavbar'
import ForgotPassword from './ForgotPassword'
import VerifyOtp from './VerifyOtp';
import ChangePassword from './ChangePassword';
import ChangePassSuccess from './ChangePassSuccess';
import './Login.css';

function Login() {
  const auth = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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

  const handleShowOtp = (email) => {
    setEmail(email);
    setState('otp');
  };

  const handleChangePassword = () => {
    setState('changePassword');
  }

  const handleChangePassSuccess = () => {
    setState('changePassSuccess');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await auth.login(password, email);
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
                <img className='googleIcon' src='google.svg' alt='google' />Continue With Google
              </button>
              <p className="registerLink">Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
          </>
        );

      case 'forgotPassword':
        return <ForgotPassword onSuccess={handleShowOtp} />;

      case 'otp':
        return <VerifyOtp onSuccess={handleChangePassword} email={email} />;

      case 'changePassword':
        return <ChangePassword onSuccess={handleChangePassSuccess} email={email} />;

      case 'changePassSuccess':
        return <ChangePassSuccess />;

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
