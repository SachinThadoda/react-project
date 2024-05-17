import React, { useState } from 'react'
import { changePassword } from '../Api/Api';
import './ChangePassword.css'

function ChangePassword({ email, onSuccess }) {

    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const confirmPasswordChange = (e) => {
        setConfirmPass(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPass) {
            setError('Passwords does not match');
            return;
        }
        setLoading(true);
        try {
            const response = await changePassword(email, password);
            if (response.success) {
                onSuccess();
            } else {
                setError(response.message);
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    return (
        <>
            <h2 className="text-center">Change Password</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label>New Password</label>
                <div className="input-group">
                    <input className="resetInput" type="password" value={password} onChange={passwordChange} required />
                </div>
                <label>Confirm Password</label>
                <div className="input-group">
                    <input className="resetInput" type="password" value={confirmPass} onChange={confirmPasswordChange} required />
                </div>
                <button className="resetButton mt-4 fs-5" type='submit'>Reset passwod</button>
                <div>
                    {loading && (
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                    {error && !loading && <p className="text-danger">{error}</p>}
                </div>
            </form>
        </>)
}

export default ChangePassword