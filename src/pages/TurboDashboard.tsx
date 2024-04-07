import CoinImage from "../components/dashboard/CoinImage.tsx";
import Score from "../components/dashboard/Score.tsx";
import League from "../components/dashboard/League.tsx";
import Energy from "../components/dashboard/Energy.tsx";
import DSTools from "../components/dashboard/DSTools.tsx";
import '../App.css'
import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import DragonHead from "../components/dashboard/DragonHead.tsx";
import {useDispatch, useSelector} from "react-redux";
import {ScoreSliceType, TurboSliceType, UserSliceType} from "../types/store.ts";
import {activateMineTurbo, deactivateMineTurbo, resetTurboTaps, setTurboTimeout, turboModeOff} from "../store/turbo.ts";
import {tapValue} from "../helpers/score.helper.ts";
import {resetCoolDown, resetTempValue} from "../store/score.ts";

const TurboDashboard = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    const turbo: TurboSliceType = useSelector((state: any) => state.turbo);
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    const dispatch = useDispatch();
    WebApp.BackButton.hide()
    const mineTurbo = () => {
        user.websocket.emit('mineTurbo', {
            token: turbo.turbo.token,
            taps: turbo.taps,
        })
        dispatch(resetTurboTaps());
        dispatch(turboModeOff());
        dispatch(deactivateMineTurbo())
    }
    useEffect(() => {
        dispatch(resetCoolDown());
        dispatch(setTurboTimeout(setTimeout(() => {
            dispatch(activateMineTurbo())
        }, turbo.turbo.duration * 1000)));
        document.body.classList.add('noMovement');
        return () => {
            document.body.classList.remove('noMovement');
        };
    }, []);
    useEffect(() => {
        if (turbo.mineTurbo) {
            mineTurbo();
        }
    }, [turbo.mineTurbo]);
    return (
        <div className='turbo-dashboard'>
            <div className='turbo-background'></div>
            <div className='add-pad'>
                <Score/>
                <CoinImage/>
                <League/>
                <Energy/>
                <DragonHead/>
            </div>
            <DSTools/>
        </div>
    );
};


export default TurboDashboard;
