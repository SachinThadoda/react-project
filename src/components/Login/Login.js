import React, { useEffect, useState } from 'react';
import './Login.css';
import { login } from '../Api/Api';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div class="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
        className="loginInput"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
        className="loginInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button className="loginButton" type="submit">Login</button>
      </form>
      <span>{response}</span>
    </div>
  );
}

export default Login;
