import '../App.css'
import Web3world from "../components/earn/Web3world.tsx";
import InviteBonus from "../components/earn/InviteBonus.tsx";
import EarnImage from '../components/earn/EarnImage.tsx';
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {hideBottomSheet} from "../store/game.ts";

const Earn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => {
        dispatch(hideBottomSheet())
        navigate(-1)
    })
    WebApp.BackButton.show();
    const user = useSelector((state: any) => state.user);
    const earn = useSelector((state: any) => state.earn);
    if (earn.haveData === false) user.websocket.emit('getEarnData');
    
    return earn.haveData ? (
        <div className='boosts relative'>
            <div className='header-gradient'></div>
            <div className="relative z-[10]">
                <EarnImage />
                <InviteBonus />
                <Web3world />
            </div>
            {/* <div className='footer-square-gradient'></div> */}
        </div>
    ) : (null)
};


export default Earn;