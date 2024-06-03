import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import '../enter.css';
import {useSelector} from "react-redux";
import {ImageSliceType, UserSliceType} from "../types/store.ts";

const Enter = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    const user: UserSliceType = useSelector((state: any) => state.user);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const enterBGIMG = image.core.find((img) => img.name === 'ENTER_BG')?.img;
    const headerImg = image.core.find((img) => img.name === 'WELCOME_HEADER')?.img;
    useEffect(() => {
        if (user?.data?.balance_updated_at !== null) {
            navigate('/dashboard');
        }
    }, [0]);
    return (
        <div className='enter-con page-bg'>
            {/*<div className='header-gradient'></div>*/}
            <img className='enter-header-img' src={headerImg?.src} />
            <p className='enter-text-title text-center'>Welcome to Dragon Bot</p>
            <button className='enter-btn' onClick={() => navigate('/apps')}><img src={enterBGIMG?.src} /></button>
            {/*<div className='footer-gradient'></div>*/}
        </div>
    );
};

export default Enter;