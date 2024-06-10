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
        <div className='boosts relative'>
            {/*<div className='header-gradient'></div>*/}
            <div className="relative z-[10]">
                <button className='help-btn float-right' onClick={() => navigate(-1)}></button>
                <div className='add-pad flex flex-col items-center  clear-both'>
                    <Score/>
                    <p className='text-muted py-2 animate__animated animate__fadeIn animate__slow'>Your Balance</p>
                </div>
                <DailyBoosters/>
                <BoosterList/>
                <SkinList/>
                <p className='boost-builder mt-5'>Build with ❤ by <span>Dragon Team</span></p>
            </div>
            {/*<div className='footer-square-gradient'></div>*/}
        </div>
    ) : (<BoostSkeleton/>)
};


export default Boosts;
