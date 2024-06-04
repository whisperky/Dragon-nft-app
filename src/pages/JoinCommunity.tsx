import '../App.css'
import Community from '../components/join/Community.tsx';
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {hideBottomSheet} from "../store/game.ts";

const JoinCommunity = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => {
        dispatch(hideBottomSheet())
        navigate(-1)
    })
    WebApp.BackButton.show();
    const user = useSelector((state: any) => state.user);
    const boost = useSelector((state: any) => state.boost);
    const imgH = React.useRef<HTMLDivElement>(null)
    const img = React.useRef<HTMLImageElement>(null)
    if (boost.haveData === false) user.websocket.emit('getBoostData');
    return boost.haveData ? (
        <div className='joins'>
            <div className='header-gradient'></div>
            <img ref={img} id='coinIcon' className='join-image' src="http://localhost:5173/background/join_background.png" alt='DragonCoin'/>
            <div className='relative p_joins'>
                <div className="relative z-[10]">
                   <p className='join-title animate__animated animate__fadeIn animate__slow clear-both '>Join Our Community</p>
                    <Community />
                </div>
                <div className="bs-container items-stretch mt-5">
                    <button className='bs-button'>Finish task</button>
                </div>
                {/* <div className='footer-square-gradient'></div> */}
            </div>
        </div>
    ) : (null)
};


export default JoinCommunity;