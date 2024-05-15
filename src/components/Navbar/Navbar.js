import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import './Navbar.css';

function Navbar() {

    const userData = sessionStorage.getItem('userData')
    const username = JSON.parse(userData).userData.username;
    const auth = useAuth();
    const handleLogout = () => {
        auth.logout();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home" className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <span className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="d-flex align-items-center">
                                <p className="m-0 mr-2 username">{username}</p>
                                <FaUserCircle className="user-icon" />
                            </div>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link to="/profile" className="dropdown-item">Profile</Link>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar