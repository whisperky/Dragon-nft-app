import {Outlet, useParams} from "react-router-dom";
import {useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {requestUserData, setUser} from "../store/user.ts";
import {loadUser} from "../store/loading.ts";
import Service from "../service/Service.ts";
import {setScore} from "../store/score.ts";
import {userData} from "../types/user.ts";

const RootLayout = () => {
    WebApp.expand();
    WebApp.setBackgroundColor('#000000');
    WebApp.setHeaderColor('#000000');
    let { token } = useParams();
    const user = useSelector((state: any) => state.user);
    const load = useSelector((state: any) => state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user.dataRequested) {
            localStorage.setItem('token', token ?? '');
            localStorage.setItem('tg_id', (WebApp?.initDataUnsafe?.user?.id ?? '').toString());
            user.websocket.on('receive-user', (udata: userData) => {
                console.log('Got user: ', udata);
                if (udata.success) {
                    dispatch(setUser(udata));
                    dispatch(setScore({
                        tap_lvl: udata.tap_lvl,
                        energy_lvl: udata.energy_lvl,
                        recharge_lvl: udata.recharge_lvl,
                        value: udata.balance,
                        last_tap_time: udata.balance_updated_at,
                        last_energy_left: udata.last_energy_left,
                    }))
                    dispatch(loadUser());
                }
            });
            dispatch(requestUserData());
        }
    }, []);
    return !load.allLoaded ? (<div><div className='preloader flex items-center justify-around'><div className="loader"></div></div><div className="w-full"><Outlet/></div></div>) : (<div className="w-full"><Outlet/></div>)
}

export default RootLayout;