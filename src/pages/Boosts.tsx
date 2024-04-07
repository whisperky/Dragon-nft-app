import Score from "../components/dashboard/Score.tsx";
import '../App.css'
import DailyBoosters from "../components/boosts/DailyBoosters.tsx";
import BoosterList from "../components/boosts/BoosterList.tsx";
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import SkinList from "../components/boosts/SkinList.tsx";
import {useDispatch, useSelector} from "react-redux";
import BoostSkeleton from "../skeleton/BoostSkeleton.tsx";
import React from "react";
import {hideBottomSheet} from "../store/game.ts";

const Boosts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => {
        dispatch(hideBottomSheet())
        navigate(-1)
    })
    WebApp.BackButton.show();

    const user = useSelector((state: any) => state.user);
    const boost = useSelector((state: any) => state.boost);
    if (boost.haveData === false) user.websocket.emit('getBoostData');
    return boost.haveData ? (
        <div className='boosts'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='add-pad flex flex-col items-center'>
                <Score/>
                <p className='text-muted py-2 animate__animated animate__fadeIn animate__slow'>Your balance</p>
            </div>
            <DailyBoosters/>
            <BoosterList/>
            <SkinList/>
        </div>
    ) : (<BoostSkeleton/>)
};


export default Boosts;
