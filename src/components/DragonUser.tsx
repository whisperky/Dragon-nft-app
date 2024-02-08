import React from "react";
import userOne from '../../public/test-img/user-1.png';
import oneImg from '../../public/icon/rank/top/one.svg';
import twoImg from '../../public/icon/rank/top/two.svg';
import threeImg from '../../public/icon/rank/top/three.svg';

const DragonUser = ({name, rank, coin, subtitle}: {name: string, rank: number, coin?: string, subtitle?: React.ReactElement}) => {
    const rankImg = rank === 1 ? oneImg : rank === 2 ? twoImg : threeImg;
    return (
        <div className='du-container'>
            <div className='flex items-center'>
                <img className='du-user-image' src={userOne} alt='user one'/>
                <div className='du-user-info'>
                    <p className='du-user-name'>{name}</p>
                    {coin ? <p className='du-user-coin'>{coin}</p> : subtitle}
                </div>
            </div>
            <div className='du-trailer-container'>
                {
                    rank >= 1 && rank <= 3 ? <img className='du-trailer-img' src={rankImg} alt='bronze'/> : <span className='du-trailer'>{rank}</span>
                }
            </div>
        </div>
    );
};

export default DragonUser;
