import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import '../fren.css';
import {useSelector} from "react-redux";
import {numShort} from "../helpers/score.helper.ts";
import Friend from "../components/fren/Friend.tsx";
import {frenData} from "../types/data.ts";
import FrenSkeleton from "../skeleton/FrenSkeleton.tsx";
import React, {useEffect} from "react";
import {ImageSliceType} from "../types/store.ts";


const Fren = () => {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const PREMIUM_IMG = image.optional.find((img) => img.name === 'TG_PREMIUM');
    const MAIN_COIN_IMAGE = image.skin.find((img) => img.name === 'BASIC');
    const COIN_IMAGE = image.core.find((img) => img.name === 'COIN_TOOL');
    const TOY_IMAGE = image.core.find((img) => img.name === 'TOY_TOOL');
    const OPEN_IMG = image.optional.find((img) => img.name === 'OPEN_ARROW');
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    const fren = useSelector((state: any) => state.fren);
    const earned = fren.list.reduce((acc: number, fren: any) => acc + fren.earned, 0);
    if (fren.haveData === false) user.websocket.emit('getFrenData');
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('fren-list').scrollTop = 100;
        }, 500);
        setTimeout(() => {
            document.getElementById('fren-list').scrollTop = 0;
        }, 1000);
    }, []);
    return TOY_IMAGE && fren.haveData ? (
        <div className='fren-zone-container  relative'>
            <div className='header-gradient'></div>
            <div className="relative z-[10]">
                <button className='help-btn float-right' onClick={() => navigate(-1)}></button>
                <p className='fren-title animate__animated animate__fadeIn animate__slow mt-20 clear-both'>Fren Zone</p>
                <a href='https://t.me/DragonFrenZone' className="fren-link" target='_blank' rel='noreferrer'>How to make 1M?</a>
                <div className='fren-info animate__animated animate__fadeIn blur-round-border-bg' onClick={() => navigate('/top-fren')}>
                    <div className='flex items-center'>
                        <div className='fren-earned'>
                            <div>+{numShort(earned)}</div>
                            {COIN_IMAGE ? <img src={COIN_IMAGE?.img.src} alt='coin'/> : null}
                        </div>
                        <div className='fren-divider'></div>
                        <div className='fren-earn-info'>
                            <span className='fren-emoji'>📣</span>
                            <span className='fren-top-30'>Top 30</span>
                            <span className='fren-top-leaders text-glass'>leaders</span>
                        </div>
                    </div>
                    {OPEN_IMG ?
                        <img className='fren-opener-arrow opacity-less mr-1' src={OPEN_IMG?.img.src} alt='opener'/> : null}
                </div>
                <p className='fren-bonues-title animate__animated animate__fadeIn animate__slow'>Invite frens to get
                    bonuses</p>
                <div className='fren-bonues animate__animated animate__fadeIn animate__slow blur-round-border-bg' style={{
                    '--angle': '160deg',
                } as React.CSSProperties}>
                    <div className='fren-box'>
                        {/*<img src={MAIN_COIN_IMAGE?.img.normal.src} alt='coin'/>*/}
                        <img src={COIN_IMAGE?.img.src} alt='coin'/>
                        <div>
                            <p className='fren-bonus-title'>Invite Fren</p>
                            <div className='fren-bonus-amount'>
                                <img src={COIN_IMAGE?.img.src} alt='coin'/>
                                <span>2,500</span>
                                <span>for you and fren</span>
                            </div>
                        </div>
                    </div>
                    <div className='fren-box'>
                        {PREMIUM_IMG ? <img src={PREMIUM_IMG?.img.src} alt='premium'/> : null}
                        <div>
                            <p className='fren-bonus-title'>Fren with <span onClick={() => {
                                WebApp.openTelegramLink(`https://t.me/PremiumBot`);
                            }}>Telegram Premium</span></p>
                            <div className='fren-bonus-amount'>
                                <img src={COIN_IMAGE?.img.src} alt='coin'/>
                                <span>50,000</span>
                                <span>for you and fren</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='fren-list-title animate__animated animate__fadeIn animate__slower'>Frens List</p>
                <div id='fren-list' className='fren-list animate__animated animate__fadeIn animate__slower blur-round-border-bg'
                style={{
                    '--angle': '125deg',
                } as React.CSSProperties}>
                    {
                        fren.list.length > 0 ?
                            fren.list.map((fren: frenData) => {
                                return (
                                    <Friend key={fren.iuser.id} id={fren.iuser.tg_id} fName={fren.iuser?.fName}
                                            lName={fren.iuser?.lName}
                                            league={fren.iuser?.league?.preset}
                                            username={fren.iuser?.username ?? null} balance={fren.iuser?.balance ?? '0'}
                                            earned={fren.earned} is_premium={fren.is_premium}/>
                                )
                            }) : (<div className='no-fren-con'>
                                <img src={TOY_IMAGE?.img.src} alt='toy'/>
                                <p className='fren-text-muted'>No Frens yet</p>
                            </div>)
                    }
                </div>
                <div className='invite-fren-btn-con animate__animated animate__fadeIn animate__slower'>
                    <button className='invite-fren-btn' onClick={() => {
                        WebApp.openTelegramLink(`https://t.me/${import.meta.env.VITE_REACT_APP_BOT_USERNAME}?start=fren`);
                        WebApp.close();
                    }}>Invite a Fren
                    </button>
                </div>
            </div>
            <div className='footer-square-gradient'></div>
        </div>
    ) : (<FrenSkeleton/>);
};

export default Fren;
