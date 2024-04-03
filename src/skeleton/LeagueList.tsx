import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {getColorWithId} from "../helpers/helper.ts";
import React from "react";

const LeagueList = () => {
    const n = 8;
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            {[...Array(n)].map((e, i) => <div className={'du-container'}>
                <div className='flex items-center'>
                    {/*<img className='du-user-image' src={userOne} alt='user one'/>*/}
                    <Skeleton circle={true} width={50} height={50}/>
                    <div className='du-user-info'>
                        <Skeleton width={160} height={10}/>
                        <Skeleton width={60} height={10}/>
                    </div>
                </div>
                <div className='du-trailer-container'>
                    <Skeleton width={20} height={20}/>
                </div>
            </div>)}
        </SkeletonTheme>
);
};

export default LeagueList
