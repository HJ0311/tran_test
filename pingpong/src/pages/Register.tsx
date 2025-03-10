import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    // const [isEmailValid, setIsEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickName, setNickName] = useState('');

// Page Handler
    const handleRegisterClick = () => {
        navigate('/');
    };

// Email Handler
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
    };

    const handleVerifyCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVerifyCode = e.target.value;
        setVerifyCode(inputVerifyCode);
    };

// Password Handler
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
    };

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputConfirmPassword = e.target.value;
        setConfirmPassword(inputConfirmPassword);
    };

// Nickname Handler
    const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputNickName = e.target.value;
        setNickName(inputNickName);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[800px] h-[600px] bg-black">
                <h1 className="text-MainTitleColor font-['SuperPixel'] sm:text-6xl mt-20 text-center">PING PONG</h1>
                <h1 className="text-MainTitleColor font-['SuperPixel'] sm:text-6xl mt-3 text-center">GANG</h1>
                <div className="text-white font-['QuinqueFive'] flex justify-center mt-9 text-sm">
                    <div className="flex items-center">
                        <p>EMAIL:</p>
                        <input
                        className="bg-black w-[250px]"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </div>
                    <div className="flex items-center group">
                        <button className="ml-3">
                            <img
                                src="/assets/image/Button_verify_Off.svg"
                                className="group-hover:hidden"
                                alt="Default Icon"
                            />
                            <img
                                src="/assets/image/Button_verify_On.svg"
                                className="hidden group-hover:block"
                                alt="Hover Icon"
                            />
                        </button>
                    </div>
                </div>
                <div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm translate-x-[-115px]">
                    <p>VERIFY-CODE:</p>
                    <input
                    className="bg-black w-[250px]"
                    value={verifyCode}
                    onChange={handleVerifyCode}
                    />
                </div>
                <div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm translate-x-[-38px]">
                    <div className="flex items-center">
                    <p>PW:</p>
                    <input
                    className="bg-black w-[250px]"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                    </div>
                </div>
                <div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm translate-x-[-64px]">
                    <p>RE-PW:</p>
                    <input
                    className="bg-black w-[250px]"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    />
                </div>
                <div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm translate-x-[-90px]">
                    <p>NICKNAME:</p>
                    <input
                    className="bg-black w-[250px]"
                    value={nickName}
                    onChange={handleNickName}
                    />
                </div>
                <div className="flex flex-col items-center mt-8 text-sm space-y-4">
                    <button
                    className="w-[150px] text-white font-['QuinqueFive'] relative group translate-x-[-20px]"
                    onClick={handleRegisterClick}>
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ➡️
                    </span>
                    REGISTER
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;