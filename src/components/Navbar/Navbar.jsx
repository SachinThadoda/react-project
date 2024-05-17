import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { FiUser } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";
import './Navbar.css';

function Navbar() {

    const userData = localStorage.getItem('userData')
    const username = JSON.parse(userData).userData.username;
    const auth = useAuth();
    const handleLogout = () => {
        auth.logout();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home" className="navbar-brand">
                <img src="favicon.ico" alt="React App" className="navbar-brand" style={{ width: "55px", height: "55px" }} /></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <span className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="d-flex align-items-center">
                                <p className="m-0 mr-2 username">{username}</p>
                                <FaUserCircle className="user-icon" />
                            </div>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right text-left" aria-labelledby="navbarDropdown">
                            <Link to="/profile" className="dropdown-item"><FiUser className='mr-2' />Profile</Link>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={handleLogout}><SlLogout className='mr-2' />Logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar