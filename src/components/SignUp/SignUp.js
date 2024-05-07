import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { signUp } from '../Api/Api';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
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

    try {
      const response = await signUp(email, username, department, password);

      // Handle response as needed
      console.log('Sign up successful', response);

      navigate('/login');
      // Redirect or show success message
    } catch (error) {
      setError('Sign up failed');
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input className='signUpInput'
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input className='signUpInput'
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input className='signUpInput'
          type="text"
          placeholder="Department"
          value={department}
          onChange={handleDepartmentChange}
          required
        />
        <input className='signUpInput'
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input className='signUpInput'
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <button className='signUpButton' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
