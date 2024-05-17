import React, { useState, useEffect } from 'react';
import { verifyOtp } from '../Api/Api'
import './VerifyOtp.css'

const VerifyOtp = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval);
                if (lastTimerCount <= 1) setDisable(false);
                if (lastTimerCount <= 0) return lastTimerCount;
                return lastTimerCount - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [disable]);

    const handleOtpChange = (index, value) => {
        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < 5) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleResendOtp = () => {
        if (disable) return;

    };

    const handleVerifyOtp = () => {
        // Implement verify OTP functionality here
        console.log("Verify OTP");
    };

    return (
        <div className="container text-center mt-5">
            <h2>Email Verification</h2>
            <p>We have sent a code to your email</p>
            <div className="row justify-content-center">
                {otp.map((digit, index) => (
                    <div className="col-md-2 mb-3" key={index}>
                        <input
                            type="text"
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            className="form-control text-center border-dark"
                            maxLength={1}
                            id={`otp-input-${index}`}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p>{" "}
                <a
                    className="flex flex-row items-center"
                    style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                    }}
                    onClick={() => handleResendOtp()}
                >
                    {disable ? `Resend OTP in ${timer}s` : "Resend OTP"}
                </a>
            </div>
            <div className="row justify-content-center">
                <button className="verifyButton mt-4 fs-5" type="submit">Verify Otp</button>
            </div>
        </div>
    );
};

export default VerifyOtp;


