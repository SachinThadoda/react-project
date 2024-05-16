import React from 'react';
import './WelcomePage.css';
import Navbar from '../HomeNavbar/HomeNavbar';

function WelcomePage() {
  return (
    <><Navbar />
      <div className="container">
        <h2>Welcome to our website!</h2>
        <p>Thank you for signing up. You are now part of our community.</p>
      </div>
    </>
  );
}

export default WelcomePage;
