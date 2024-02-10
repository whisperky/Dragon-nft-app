import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

const BoostSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className='boosts'>
                <div className='add-pad flex flex-col items-center justify-center'>
                    <div className="flex justify-around items-center">
                        <div className='flex justify-around items-center score-holder'>
                            <Skeleton className='mr-2' circle={true} width='37px' height='37px'/>
                            <div className='font-extrabold'><p><Skeleton width={150} height={30}/></p></div>
                        </div>
                    </div>
                    <p className='text-muted py-2'><Skeleton width={120} height={10}/></p>
                </div>
                <div className=''>
                    <p className='boost-title'><Skeleton width={100}/></p>
                    <div className='daily-boosters glass'>
                        <div className='single-booster glass-hover'>
                            <div>
                                <Skeleton width={40} height={40}/>
                            </div>
                            <div style={{alignItems: 'start'}}>
                                <p><Skeleton width={40} height={10}/></p>
                                <p><Skeleton width={70} height={10}/></p>
                            </div>
                        </div>
                        <div className='single-booster glass-hover'>
                            <div>
                                <Skeleton width={40} height={40}/>
                            </div>
                            <div style={{alignItems: 'start'}}>
                                <p><Skeleton width={40} height={10}/></p>
                                <p><Skeleton width={70} height={10}/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p className='boost-title'><Skeleton width={60} height={10}/></p>
                    <div className='boosters-list glass'>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p className='boost-title'><Skeleton width={60} height={10}/></p>
                    <div className='boosters-list glass'>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='b-item glass-hover my-3'>
                            <div className='flex items-center'>
                                <div className='b-item-image flex items-center justify-center'><Skeleton width={55}
                                                                                                         height={55}/>
                                </div>
                                <div className='b-item-desc'>
                                    <p className='b-item-title'><Skeleton width={160} height={10}/></p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <p><Skeleton width={100} height={10}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default BoostSkeleton;
