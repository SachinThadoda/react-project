import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { loginApi } from '../Api/Api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cookies = new Cookies();
        const userData = localStorage.getItem('userData');
        const jwtToken = cookies.get('_1fj2Ew'); 
        if (jwtToken && userData) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setIsLoading(false); 
    }, [navigate]);

    const login = async (password, email) => {
        const response = await loginApi(password, email);
        setIsAuthenticated(true);
        return response;
    };

    const logout = () => {
        const cookies = new Cookies();
        cookies.remove('_1fj2Ew');
        cookies.remove('_JdgE54');
        cookies.remove('_3mhb65');
        localStorage.removeItem('userData');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading  }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
