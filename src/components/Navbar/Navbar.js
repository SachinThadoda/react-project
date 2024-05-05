import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '80px' }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000' }}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000' }}>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
