import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '80px' }}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/home" style={{ fontSize: '18px', fontWeight: 'bold' }}>Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login" style={{ fontSize: '18px', fontWeight: 'bold' }}>Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup" style={{ fontSize: '18px', fontWeight: 'bold' }}>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
