import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import React from "react";

const LeagueSkeleton = () => {
    const n = 8;
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className='league-header'>
                <Skeleton borderRadius={30} width={'100%'} height={30}/>
                <div className='flex justify-between items-center'>
                    <Skeleton width={20} height={20}/>
                    <Skeleton circle={true} className='lh-rank-img my-5' width={150} height={150}/>
                    <Skeleton width={20} height={20}/>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <div className='lh-text text-center' style={{width: '100%'}}>
                        <Skeleton width={'90%'} height={20}/>
                        <Skeleton className='my-4' width={'60%'} height={20}/>
                    </div>
                </div>
                <Skeleton className='mt-5' width={'100%'} height={10}/>
                <div className='mt-2 mb-5'>
                    <Skeleton borderRadius={50} height={50}>
                    </Skeleton>
                </div>
                {[...Array(n)].map((e, i) => <div key={i} className={'du-container'}>
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
            </div>
        </SkeletonTheme>
    );
};

export default LeagueSkeleton;
