import '../App.css'
import Community from '../components/join/Community.tsx';
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React from "react";
import { setBottom } from '../store/earn.ts';

const JoinCommunity = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => {
        dispatch(setBottom(false))
        navigate(-1)
    })
    WebApp.BackButton.show();
    
    const img = React.useRef<HTMLImageElement>(null)
    
    const handlerFinish = () => {
        navigate(-1)

        dispatch(setBottom(true))
    }
    
    return (
        <div className='joins'>
            <div className='header-gradient'></div>
            <img ref={img} id='coinIcon' className='join-image' src="http://localhost:5173/background/join_background.png" alt='DragonCoin'/>
            <div className='relative p_joins'>
                <div className="relative z-[10]">
                   <p className='join-title animate__animated animate__fadeIn animate__slow clear-both '>Join Our Community</p>
                    <Community />
                </div>
                <div className="bs-container items-stretch mt-5">
                    <button className='bs-button' onClick={handlerFinish}>Finish task</button>
                </div>
            </div>
        </div>
    )
};


export default JoinCommunity;