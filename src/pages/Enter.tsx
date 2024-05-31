import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import '../enter.css';

const Enter = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    useEffect(() => {
    }, [0]);
    return (
        <div className='enter-con page-bg'>
            <div className='header-gradient'></div>
            <p className='enter-header-img'></p>
            <p className='enter-text-title text-center'>Welcome to Dragon Bot</p>
            <button className='enter-btn' onClick={() => navigate('/apps')}>Enter</button>
            <div className='footer-gradient'></div>
        </div>
    );
};

export default Enter;