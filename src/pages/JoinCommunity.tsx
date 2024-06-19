import '../App.css'
import Community from '../components/join/Community.tsx';
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, { useEffect } from "react";
import earn, { setBottom } from '../store/earn.ts';
import { setAmount } from '../store/score.ts';

const JoinCommunity = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const task = useSelector((state: any) => state.task);

    WebApp.BackButton.onClick(() => {
        navigate(-1)
    })
    WebApp.BackButton.show();
    const img = React.useRef<HTMLImageElement>(null)
    
    const handlerFinish = () => {
        navigate(-1)
        user.websocket.emit('earnTaskRewards', {user_id: user.data.id, earn_id: task.selectedTask[0].earn_id})
        return;
    }
    return (
        <div className='joins'>
            <div className='header-gradient'></div>
            <img ref={img} id='coinIcon' className='join-image' src="/background/join_background.jpg" alt='DragonCoin'/>
            <div className='relative p_joins'>
                <div className="relative z-[10]">
                   {/* <p className='join-title animate__animated animate__fadeIn animate__slow clear-both '>Join Our Community</p> */}
                    <Community />
                </div>
                <div className="bs-container items-stretch mt-5">
                    <button className='bs-button' onClick={handlerFinish}>Finish Task</button>
                </div>
            </div>
        </div>
    )
};


export default JoinCommunity;