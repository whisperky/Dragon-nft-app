import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {requestUserData, setUser, setUserPurchaseReturn} from "../store/user.ts";
import {loadCoin, loadUser} from "../store/loading.ts";
import {setScore} from "../store/score.ts";
import BottomSheet from "../components/BottomSheet.tsx";
import {boostWebHookData, frenWebHookData, purchaseReturnData, UserWebhookData} from "../types/data.ts";
import {setSkins, setUserSkins} from "../store/skin.ts";
import {setBoost, setLeftDailyBoosts} from "../store/boost.ts";
import {completeItemPurchase} from "../store/purchase.ts";
import toast from "react-hot-toast";
import {setFrens} from "../store/fren.ts";
import {setAutoTapEarn} from "../store/game.ts";
import {loadBoostImages, loadCoinSkinImages, loadCoreImages} from "../helpers/image.helper.ts";
import {ImageSliceType, MyImageTypes, SkinSliceType, UserSliceType} from "../types/store.ts";
import {alterActiveSkinsImages, setActiveSkinsDone, setCoreDone} from "../store/image.ts";

const RootLayout = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    let skin: SkinSliceType = useSelector((state: any) => state.skin);
    const load = useSelector((state: any) => state.loading);
    const purchase = useSelector((state: any) => state.purchase);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.dataRequested) {
            user.websocket.on('AUTH', (adata: {
                success: boolean,
                msg: string,
                code: 'INVALID_USER' | 'INVALID_SIGNATURE' | 'INVALID_AUTH_DATA'
            }) => {
                if (!adata.success) {
                    WebApp.showAlert(adata.msg);
                    WebApp.close();
                }
            });
            user.websocket.on('receive-user', (udata: UserWebhookData) => {
                if (udata.success) {
                    dispatch(setUser({
                        id: udata.id,
                        tg_id: udata.tg_id,
                        username: udata.username,
                        fName: udata.fName,
                        lName: udata.lName,
                        balance: udata.balance,
                        bot_lvl: udata.bot_lvl,
                        energy_lvl: udata.energy_lvl,
                        recharge_lvl: udata.recharge_lvl,
                        tap_lvl: udata.tap_lvl,
                        last_energy_left: udata.last_energy_left,
                        balance_updated_at: udata.balance_updated_at,
                        league_id: udata.league_id,
                        squad_id: udata.squad_id,
                        fren_token: udata.fren_token,
                        invited_by: udata.invited_by,
                        invited_users: udata.invited_users,
                        botEarn: udata.botEarn,
                        skin: udata.skin,
                        status: udata.status,
                        createdAt: udata.createdAt,
                        updatedAt: udata.updatedAt,
                    }));
                    dispatch(setScore({
                        tap_lvl: udata.tap_lvl,
                        energy_lvl: udata.energy_lvl,
                        recharge_lvl: udata.recharge_lvl,
                        bot_lvl: udata.bot_lvl,
                        value: udata.balance,
                        last_tap_time: udata.balance_updated_at,
                        last_energy_left: udata.last_energy_left,
                    }))
                    dispatch(loadUser());
                    dispatch(setAutoTapEarn(udata.botEarn));
                    if (!image.isActiveSkinsDone) {
                        loadCoinSkinImages();
                        loadCoreImages();
                    }
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
            user.websocket.on('claimBotEarnSuccess', (data: { success: boolean, message: string }) => {
                toast.success(data.message, {
                    id: 'claiming',
                });
            })
            user.websocket.on('claimBotEarnError', (data: { success: boolean, message: string }) => {
                toast.error(data.message, {
                    id: 'claiming',
                });
            })
            dispatch(requestUserData());
        }
        WebApp.expand();
        WebApp.setBackgroundColor('#000000');
        WebApp.setHeaderColor('#000000');
    }, [1]);
    useEffect(() => {
        console.log("Skin too", skin)
        console.log('Purchase updated');
        user.websocket.on('purchaseSuccess', (data: purchaseReturnData) => {
            if (purchase.isPurchasing) {
                if (data.success) {
                    toast.success(data.message, {
                        id: purchase.toast,
                    });
                    dispatch(setScore({
                        tap_lvl: data.user.tap_lvl,
                        energy_lvl: data.user.energy_lvl,
                        recharge_lvl: data.user.recharge_lvl,
                        bot_lvl: data.user.bot_lvl,
                        value: data.user.balance,
                        last_tap_time: data.user.balance_updated_at,
                        last_energy_left: data.user.last_energy_left,
                    }))
                    dispatch(completeItemPurchase('success'));
                    dispatch(setUserSkins(data.user.skins))
                    dispatch(setLeftDailyBoosts(data.user.boosts))
                    dispatch(setUserPurchaseReturn(data.user));
                    if (data.user.skin != null) {
                        dispatch(alterActiveSkinsImages(data.user.skin));
                        navigate('/')
                    }
                } else {
                    toast.error(data.message, {
                        id: purchase.toast,
                    })
                    dispatch(completeItemPurchase('error'));
                }
            } else {
                toast.success(data.message, {
                    id: purchase.toast,
                });
                dispatch(setScore({
                    tap_lvl: data.user.tap_lvl,
                    energy_lvl: data.user.energy_lvl,
                    recharge_lvl: data.user.recharge_lvl,
                    bot_lvl: data.user.bot_lvl,
                    value: data.user.balance,
                    last_tap_time: data.user.balance_updated_at,
                    last_energy_left: data.user.last_energy_left,
                }))
                dispatch(completeItemPurchase('success'));
                dispatch(setUserSkins(data.user.skins))
                dispatch(setLeftDailyBoosts(data.user.boosts))
                if (data.user.skin != null) {
                    dispatch(alterActiveSkinsImages(data.user.skin));
                    navigate('/')
                }
                dispatch(setUserPurchaseReturn(data.user));
            }
        });
        user.websocket.on('purchaseError', (data: purchaseReturnData) => {
            if (purchase.isPurchasing) {
                toast.error(data.message, {
                    id: purchase.toast,
                })
                dispatch(completeItemPurchase('error'));
            } else {
                toast.error(data.message, {
                    id: purchase.toast,
                })
            }
        });
    }, [purchase.isPurchasing, skin]);
    useEffect(() => {
        if (image.isActiveSkinsDone && image.isCoreDone) {
            loadBoostImages();
        }
    }, [image.isActiveSkinsDone, image.isCoreDone]);

    return image.isActiveSkinsDone && image.isCoreDone ? (
        <div className="w-full"><Outlet/><BottomSheet/></div>) : (<div>
        <div className='preloader flex items-center justify-around'>
            <div className="loader">
                <div className="loader-inner ball-grid-pulse">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div className="w-full hidden"><Outlet/></div>
    </div>)
}

export default RootLayout;