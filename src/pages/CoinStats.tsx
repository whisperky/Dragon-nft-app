import React from 'react';
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {GameSliceType, ImageSliceType} from "../types/store.ts";

const CoinStats = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();

    const game: GameSliceType = useSelector((state: any) => state.game);
    const image: ImageSliceType = useSelector((state: any) => state.image);

    const coinImage = image.core.find((img: any) => img.name === 'COIN_ICON')?.img.src;
    const day = (new Date()).getDay();
    let sun = [8,1,12,9,2,10,0,7,8]
    let mon = [0,1,2,3,4,5,6,7,8]
    let tue = [1,11,2,13,4,14,7,2,1]
    let wed = [5,2,12,9,0,11,4,3,1]
    let thu = [10,1,0,3,8,5,6,12,2]
    let fri = [7,11,12,13,4,2,6,1,14]
    let sat = [9,5,12,13,2,4,14,0,8]

    const coinerImages = image.coiners;
    const use = day == 0 ? sun : day == 1 ? mon : day == 2 ? tue : day == 3 ? wed : day == 4 ? thu : day == 5 ? fri : day == 6 ? sat : sun;
    const coinOne = coinerImages[use[0]]?.img.src;
    const coinTwo = coinerImages[use[1]]?.img.src;
    const coinThree = coinerImages[use[2]]?.img.src;
    const coinFour = coinerImages[use[3]]?.img.src;
    const coinFive = coinerImages[use[4]]?.img.src;
    const coinSix = coinerImages[use[5]]?.img.src;
    const coinSeven = coinerImages[use[6]]?.img.src;
    const coinEight = coinerImages[use[7]]?.img.src;
    const coinNine = coinerImages[use[8]]?.img.src;
    return (
        <div className='dsc-main animate__animated animate__fadeIn'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='dcs-con'>
                <div className='dcs-header'>
                    <p className='animate__animated animate__fadeInDown animate__slow'>Total Dragoncoin Balance</p>
                    <div className='animate__animated animate__fadeInUp animate__slower'>
                        <img src={coinImage} alt="coin"/>
                        <span>{BigInt(game.totalEarned).toLocaleString()}</span>
                    </div>
                </div>
                <div className='dcs-body'>
                    <div className='animate__animated animate__fadeInLeft animate__slower'>
                        <div className='dsc-img-container'>
                            <img className='dsc-img' src={coinOne} alt='sc-image'/>
                            <img className='dsc-img' src={coinTwo} alt='sc-image'/>
                            <img className='dsc-img' src={coinThree} alt='sc-image'/>
                        </div>
                        <div className='dsc-stats '>
                            <span>{BigInt(game.totalPlayers).toLocaleString()}</span>
                            <span>Total Players</span>
                        </div>
                    </div>
                    <div className='animate__animated animate__fadeInRight animate__slower'>
                        <div className='dsc-img-container'>
                            <img className='dsc-img' src={coinFour} alt='sc-image'/>
                            <img className='dsc-img' src={coinFive} alt='sc-image'/>
                            <img className='dsc-img' src={coinSix} alt='sc-image'/>
                        </div>
                        <div className='dsc-stats dsc-stats-bottom'>
                            <span>{BigInt(game.dailyUser).toLocaleString()}</span>
                            <span>Daily User</span>
                        </div>
                    </div>
                    <div className='animate__animated animate__fadeInLeft animate__slower'>
                        <div className='dsc-img-container'>
                            <img className='dsc-img' src={coinSeven} alt='sc-image'/>
                            <img className='dsc-img' src={coinEight} alt='sc-image'/>
                            <img className='dsc-img' src={coinNine} alt='sc-image'/>
                        </div>
                        <div className='dsc-stats'>
                            <span>{BigInt(game.onlineUsers).toLocaleString()}</span>
                            <div>
                                <div className='pulse-con'>
                                    <span className='pulse-button'></span>
                                </div>
                                <span>Online</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dsc-invite-fren-btn-con animate__animated animate__fadeIn'>
                    <button className='dsc-invite-fren-btn' onClick={() => {
                        WebApp.openTelegramLink(`https://t.me/${import.meta.env.VITE_REACT_APP_BOT_USERNAME}?start=fren`);
                        WebApp.close();
                    }}>Invite a Fren
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoinStats;