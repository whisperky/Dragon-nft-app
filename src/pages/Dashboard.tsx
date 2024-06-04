import CoinImage from "../components/dashboard/CoinImage.tsx";
import Score from "../components/dashboard/Score.tsx";
import League from "../components/dashboard/League.tsx";
import Energy from "../components/dashboard/Energy.tsx";
import DSTools from "../components/dashboard/DSTools.tsx";
import '../App.css'
import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import DragonHead from "../components/dashboard/DragonHead.tsx";
import {useLocation} from "react-router-dom";
import {hideBottomSheet} from "../store/game.ts";
import {useDispatch} from "react-redux";
import {disablePageLoop} from "../store/squad.ts";
const Dashboard = () => {
    WebApp.BackButton.hide()
    useEffect(()  => {
        document.body.classList.add('noMovement');
        return () => {
            document.body.classList.remove('noMovement');
        };
    }, []);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(disablePageLoop())
        dispatch(hideBottomSheet());
    }, [location]);
    return (
        <div className='page-bg !overflow-hidden'>
            <div className='add-pad flex-1 tap z-[10]'>
                <Score />
                <CoinImage />
                <Energy />
                <League />
                <DragonHead />
            </div>
            <DSTools />
        </div>
    );
};


export default Dashboard;
