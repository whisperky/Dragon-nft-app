import {Outlet, useParams} from "react-router-dom";
import {useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {requestUserData, setUser, setUserPurchaseReturn} from "../store/user.ts";
import {loadUser} from "../store/loading.ts";
import {setScore} from "../store/score.ts";
import {userData} from "../types/user.ts";
import BottomSheet from "../components/BottomSheet.tsx";
import {boostWebHookData, frenWebHookData, purchaseReturnData} from "../types/data.ts";
import {setSkins, setUserSkins} from "../store/skin.ts";
import {setBoost, setLeftDailyBoosts} from "../store/boost.ts";
import {completeItemPurchase} from "../store/purchase.ts";
import toast from "react-hot-toast";
import {setFrens} from "../store/fren.ts";

const RootLayout = () => {
    let { token } = useParams();
    const user = useSelector((state: any) => state.user);
    const load = useSelector((state: any) => state.loading);
    const purchase = useSelector((state: any) => state.purchase);
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
            user.websocket.on('boostData', (bdata: boostWebHookData) => {
                if (bdata.success) {
                    dispatch(setSkins({
                        list: bdata.data.skins,
                        userSkins: bdata.data.userSkins
                    }));
                    dispatch(setBoost({
                        dailyBoosts: bdata.data.dailyBoosts,
                        boosts: bdata.data.boosts,
                        leftDailyBoosts: bdata.data.leftDailyBoosts,
                    }))
                }
            })
            user.websocket.on('frenData', (fdata: frenWebHookData) => {
                if (fdata.success) {
                    dispatch(setFrens(fdata.data.frens));
                }
            });
            dispatch(requestUserData());
        }
        WebApp.expand();
        WebApp.setBackgroundColor('#000000');
        WebApp.setHeaderColor('#000000');
    }, [1]);
    useEffect(() => {
        console.log('Purchase updated');
        user.websocket.on('purchaseSuccess', (data: purchaseReturnData) => {
            console.log("Inside purchase")
            if (purchase.isPurchasing) {
                if (data.success) {
                    toast.success(data.message, {
                        id: purchase.toast,
                    });
                    dispatch(setScore({
                        tap_lvl: data.user.tap_lvl,
                        energy_lvl: data.user.energy_lvl,
                        recharge_lvl: data.user.recharge_lvl,
                        value: data.user.balance,
                        last_tap_time: data.user.balance_updated_at,
                        last_energy_left: data.user.last_energy_left,
                    }))
                    dispatch(setUserPurchaseReturn(data.user));
                    dispatch(completeItemPurchase('success'));
                    dispatch(setUserSkins(data.user.skins))
                    dispatch(setLeftDailyBoosts(data.user.boosts))
                } else {
                    toast.error(data.message, {
                        id: purchase.toast,
                    })
                    dispatch(completeItemPurchase('error'));
                }
            }
        });
    }, [purchase.toast]);
    return !load.allLoaded ? (<div><div className='preloader flex items-center justify-around'><div className="loader"></div></div><div className="w-full hidden"><Outlet/></div></div>) : (<div className="w-full"><Outlet/><BottomSheet /></div>)
}

export default RootLayout;