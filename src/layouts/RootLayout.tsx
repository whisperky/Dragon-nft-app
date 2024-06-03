import {Outlet, useLocation, useNavigate, useNavigation, useParams} from "react-router-dom";
import {useEffect} from "react";
import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {changeUserSquad, requestUserData, setUser, setUserPurchaseReturn} from "../store/user.ts";
import {loadUser} from "../store/loading.ts";
import {setScore} from "../store/score.ts";
import BottomSheet from "../components/BottomSheet.tsx";
import {
    boostWebHookData,
    frenWebHookData,
    purchaseReturnData,
    squadData,
    squadDataLeague, topFrenData,
    UserWebhookData
} from "../types/data.ts";
import {setSkins, setUserSkins} from "../store/skin.ts";
import {setBoost, setLeftDailyBoosts} from "../store/boost.ts";
import {completeItemPurchase} from "../store/purchase.ts";
import {setFrens, setTopFrens, topFrenLoad} from "../store/fren.ts";
import {setAutoTapEarn, setTotals} from "../store/game.ts";
import {
    loadBoostImages,
    loadCoinersImages,
    loadCoinSkinImages,
    loadCoreImages,
    loadLeagueImages, loadOptionalImages
} from "../helpers/image.helper.ts";
import {
    ImageSliceType,
    LeagueSliceType,
    SkinSliceType,
    TurboSliceType,
    UserSliceType
} from "../types/store.ts";
import {alterActiveSkinsImages} from "../store/image.ts";
import BotBottomSheet from "../components/BotBottomSheet.tsx";
import {setAvailableTurbos} from "../store/turbo.ts";
import {setLeague, setSquadTop, setUserLeague, setUserTop} from "../store/league.ts";
import {selectSquad, setTopSquad, setTopSquadUsers, setUserSquad, topSquadLoaded} from "../store/squad.ts";
import {showToast} from "../helpers/helper.ts";

const RootLayout = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    let skin: SkinSliceType = useSelector((state: any) => state.skin);
    const purchase = useSelector((state: any) => state.purchase);
    const turbo: TurboSliceType = useSelector((state: any) => state.turbo);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        user.websocket.on('connect', () => {
            console.log('Connected');
        });
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
                    dispatch(setUserLeague(udata.league));
                    dispatch(setTotals(udata.game));
                    if (udata.turbo != undefined && udata.turbo.length > 0)
                        dispatch(setAvailableTurbos(udata.turbo))
                    if (!image.isActiveSkinsDone) {
                        loadCoinSkinImages();
                        loadCoreImages();
                    }
                    if (udata.squad) {
                        dispatch(setUserSquad(udata.squad));
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
            user.websocket.on('topFrenData', (topFData: { success: boolean; frens: topFrenData }) => {
                if (topFData.success) {
                    dispatch(topFrenLoad());
                    dispatch(setTopFrens(topFData.frens));
                }
            })
            user.websocket.on('claimBotEarnSuccess', (data: { success: boolean, message: string }) => {
                showToast('claiming', data.message, 'success');
            })
            user.websocket.on('claimBotEarnError', (data: { success: boolean, message: string }) => {
                showToast('claiming', data.message, 'error');
            })
            user.websocket.on('topSquads', (data: { success: boolean, squads: any }) => {
                if (data.success)
                    dispatch(setTopSquad(data.squads));
            })
            user.websocket.on('squadData', (data: { success: boolean, squad: squadDataLeague }) => {
                if (data.success)
                    dispatch(selectSquad(data.squad));
            })
            user.websocket.on('squadTopUsers', (data: { success: boolean, users: any }) => {
                if (data.success) {
                    dispatch(setTopSquadUsers(data.users));
                    dispatch(topSquadLoaded())
                }
            })
            user.websocket.on('squadSuccess', (data: {
                success: boolean,
                message: string,
                type: 'joined' | 'left',
                squad: squadDataLeague
            }) => {
                if (data.success) {
                    if (data.type == 'joined') {
                        navigate(-1)
                        dispatch(setUserSquad(data.squad));
                        dispatch(changeUserSquad(data.squad.id));
                    }
                    if (data.type == 'left') {
                        dispatch(setUserSquad(null));
                        dispatch(changeUserSquad(null));
                    }
                    dispatch(selectSquad(data.squad));
                    showToast('squad', data.message, 'success');
                } else {
                    showToast('squad', data.message, 'error');
                }
            });
            user.websocket.on('squadError', (data: { success: boolean, message: string, type: 'joined' | 'left' }) => {
                showToast('squad', data.message, 'error');
            });
            dispatch(requestUserData());
        }
        WebApp.expand();
        WebApp.setBackgroundColor('#000000');
        WebApp.setHeaderColor('#000000');
    }, [1]);
    useEffect(() => {
        user.websocket.on('leagueData', (ldata: any) => {
            dispatch(setLeague(ldata.data));
        })
    }, [0]);
    useEffect(() => {
        console.log("Skin too", skin)
        console.log('Purchase updated');
        user.websocket.on('purchaseSuccess', (data: purchaseReturnData) => {
            if (purchase.isPurchasing) {
                if (data.success) {
                    showToast(purchase.toast, data.message, 'success')
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
                    if (data.itemType == 'skin' || data.itemType == 'change_skin') {
                        dispatch(alterActiveSkinsImages(data.user.skin));
                        navigate('/dashboard');
                    }
                    if (data.user.turbo != undefined && data.user.turbo.length > 0) {
                        dispatch(setAvailableTurbos(data.user.turbo))
                    }
                    if (data.itemType == 'daily_booster') {
                        navigate('/dashboard')
                    }
                } else {
                    showToast(purchase.toast, data.message, 'error')
                    dispatch(completeItemPurchase('error'));
                }
            } else {
                showToast(purchase.toast, data.message, 'success');
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
                if (data.itemType == 'skin' || data.itemType == 'change_skin') {
                    dispatch(alterActiveSkinsImages(data.user.skin));
                    navigate('/dashboard')
                }
                dispatch(setUserPurchaseReturn(data.user));
            }
        });
        user.websocket.on('purchaseError', (data: purchaseReturnData) => {
            if (purchase.isPurchasing) {
                showToast(purchase.toast, data.message, 'error')
                dispatch(completeItemPurchase('error'));
            } else {
                showToast(purchase.toast, data.message, 'error');
            }
        });
    }, [purchase.isPurchasing, skin]);
    useEffect(() => {
        if (image.isActiveSkinsDone && image.isCoreDone && !image.isBoosterDone && !image.isSkinDone && !image.isLeagueDone) {
            loadBoostImages();
        }
        if (image.isActiveSkinsDone && image.isCoreDone && image.isBoosterDone && image.isSkinDone && !image.isLeagueDone) {
            loadLeagueImages();
        }
        if (image.isActiveSkinsDone && image.isCoreDone && image.isBoosterDone && image.isSkinDone && image.isLeagueDone && !image.isCoinersDone) {
            loadCoinersImages();
        }
        if (image.isActiveSkinsDone && image.isCoreDone && image.isBoosterDone && image.isSkinDone && image.isLeagueDone && image.isCoinersDone && !image.isOptionalDone) {
            loadOptionalImages();
        }
    }, [image.isActiveSkinsDone, image.isCoreDone, image.isBoosterDone, image.isSkinDone, image.isLeagueDone, !image.isCoinersDone]);
    useEffect(() => {

    }, [turbo.turboMode]);
    useEffect(() => {
        if (user.data != null && user.data?.status == 'suspended')
            navigate('/banned')
    }, [user.data?.status]);
    const location = useLocation();
    return image.isActiveSkinsDone && image.isCoreDone ? (
        <div className="w-full">
            <Outlet/>
            <BottomSheet/>
            {location.pathname == '/dashboard' && <BotBottomSheet/>}
        </div>) : (<div>
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