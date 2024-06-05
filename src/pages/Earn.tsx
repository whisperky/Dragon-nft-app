import '../App.css'
import Web3world from "../components/earn/Web3world.tsx";
import InviteBonus from "../components/earn/InviteBonus.tsx";
import EarnImage from '../components/earn/EarnImage.tsx';
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {hideBottomSheet} from "../store/game.ts";
import JoinBottom from '../components/join/JoinBottom.tsx';
import { setBottom } from '../store/earn.ts';

const Earn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => {
        dispatch(setBottom(false))
        navigate(-1)
    })
    WebApp.BackButton.show();
    const user = useSelector((state: any) => state.user);
    const boost = useSelector((state: any) => state.boost);
    if (boost.haveData === false) user.websocket.emit('getBoostData');
    return boost.haveData ? (
        <div className='boosts relative' onClick={() => dispatch(setBottom(false))}>
            <div className='header-gradient'></div>
            <div className="relative z-[10]">
                <EarnImage />
                <InviteBonus />
                <Web3world />
            </div>
            <JoinBottom />
        </div>
        
    ) : (null)
};


export default Earn;