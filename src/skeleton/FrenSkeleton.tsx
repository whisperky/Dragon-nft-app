import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const FrenSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className='fren-zone-container'>
                <p className='fren-title'><Skeleton width={100} height={15} /></p>
                <div className='fren-info'>
                    <div className='flex items-center'>
                        <div className='fren-earned'>
                            <div><Skeleton width={60} height={10} /> </div>
                            <Skeleton className='ml-3' circle={true} width={15} height={15} />
                        </div>
                        <div className='fren-divider'></div>
                        <div className='fren-earn-info'>
                            <p><Skeleton width={150} height={10} /> </p>
                        </div>
                    </div>
                </div>
                <p className='fren-list-title'><Skeleton width={60} height={15} /></p>
                <div id='fren-list' className='fren-list'>
                    <div className='friend-container'>
                        <div className='flex items-center'>
                            <div className=''><Skeleton circle={true} width={50} height={50}/></div>
                            <div className='friend-info'>
                                <div className='friend-name'><Skeleton width={200} height={10}/></div>
                                <div className='friend-subtitle'>
                                    <div className='friend-league'><Skeleton width={100} height={10}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='friend-trailer-container'>
                        </div>
                    </div>
                    <div className='friend-container'>
                        <div className='flex items-center'>
                            <div className=''><Skeleton circle={true} width={50} height={50}/></div>
                            <div className='friend-info'>
                                <div className='friend-name'><Skeleton width={200} height={10}/></div>
                                <div className='friend-subtitle'>
                                    <div className='friend-league'><Skeleton width={100} height={10}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='friend-trailer-container'>
                        </div>
                    </div>
                    <div className='friend-container'>
                        <div className='flex items-center'>
                            <div className=''><Skeleton circle={true} width={50} height={50}/></div>
                            <div className='friend-info'>
                                <div className='friend-name'><Skeleton width={200} height={10}/></div>
                                <div className='friend-subtitle'>
                                    <div className='friend-league'><Skeleton width={100} height={10}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='friend-trailer-container'>
                        </div>
                    </div>
                    <div className='friend-container'>
                        <div className='flex items-center'>
                            <div className=''><Skeleton circle={true} width={50} height={50}/></div>
                            <div className='friend-info'>
                                <div className='friend-name'><Skeleton width={200} height={10}/></div>
                                <div className='friend-subtitle'>
                                    <div className='friend-league'><Skeleton width={100} height={10}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='friend-trailer-container'>
                        </div>
                    </div>
                </div>
                <div className='invite-fren-btn-con'>
                    <Skeleton className='invite-fren-btn-skeleton'/>
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default FrenSkeleton;
