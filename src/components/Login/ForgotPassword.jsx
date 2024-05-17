import React, { useState } from 'react';
import { forgotPassword } from '../Api/Api'
import './ForgotPassword.css'

const ForgotPassword = ({onSuccess}) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await forgotPassword(email);
            if (response.success) {
                onSuccess(email);
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
    }
    return (
        <>
            <h2 className="text-center">Reset your password</h2>
            <p className='text-center'>Enter email address and we will sent you a code to verify</p>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <input className="emailInput" type="text" placeholder="Enter Email Address" value={email} onChange={handleEmailChange} required />
                </div>
                <button className="otpButton mt-4 fs-5" type="submit">Send OTP</button>
                <div className="d-flex justify-content-between">
                    <div>
                        {loading && (
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                        {error && !loading && <p className="text-danger">{error}</p>}
                    </div>
                </div>
            </form>
        </>
    )
}

export default ForgotPassword
