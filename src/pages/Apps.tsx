import React, {useEffect} from 'react';
import AppSlider from "../components/apps/AppSlider.tsx";
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";

import '../apps.css';
import {ImageSliceType} from "../types/store.ts";
import {useSelector} from "react-redux";

const Apps = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const twitterIMG = image.core.find((img) => img.name === 'TWITTER')?.img;
    const mediumImg = image.core.find((img) => img.name === 'MEDIUM')?.img;
    const telegramImg = image.core.find((img) => img.name === 'TELEGRAM')?.img;


    return (
        <div className='page-bg'>
            {/*<div className='header-gradient'></div>*/}
            <div className='apps-container h-screen flex flex-col items-center justify-center'>
                <AppSlider />
                <div className='apps-buttons-container w-full px-[9%]'>
                    <p className='apps-text-title text-left my-5 text-3xl font-bold'>Join our social</p>
                    <div className='block flex items-center justify-between'>
                        <div className='blur-round-border-bg p-2' style={{
                            '--radius': '13px',
                            '--angle': '135deg',
                        } as React.CSSProperties} onClick={() => {
                            WebApp.openLink(`https://x.com/DragonDotBot`);
                        }}>
                            <img className='icon-x-img w-[70px] h-[70px]' src={twitterIMG?.src}/>
                        </div>
                        <div className='blur-round-border-bg p-2' style={{
                            '--radius': '13px',
                            '--angle': '135deg',
                        } as React.CSSProperties} onClick={() => {
                            WebApp.openLink(`https://medium.com/@dragonbot`);
                        }}>
                            <img className='icon-m-img w-[70px] h-[70px]' src={mediumImg?.src}/>
                        </div>
                        <div className='blur-round-border-bg p-2' style={{
                            '--radius': '13px',
                            '--angle': '135deg',
                        } as React.CSSProperties} onClick={() => {
                            WebApp.openTelegramLink(`https://t.me/DragonBotCommunity`);
                        }}>
                            <img className='icon-t-img w-[70px] h-[70px]' src={telegramImg?.src}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className='enter-btn' onClick={() => navigate('/dashboard')}></button> */}
            {/*<div className='footer-gradient'></div>*/}
        </div>
    );
};

export default Apps;