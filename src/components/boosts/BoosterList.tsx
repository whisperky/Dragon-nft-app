// import {useDispatch, useSelector} from "react-redux";
import dragon from '../../../public/icon/dragon.svg';
import coin from '../../../public/icon/small-coin.svg';
import arrow from '../../../public/icon/right-arrow.svg';
import {addSplashEffect, removeSplashEffect} from "../../helpers/style.helper.ts";
const BoosterList = () => {
    // const score  = useSelector((state: any) => state.score);
    // const dispatch = useDispatch();

    return (
        <div className=''>
            <p className='boost-title'>Boosters</p>
            <div className='boosters-list glass'>
                <div onTouchStart={(e) => addSplashEffect(e)} onTouchEnd={(e) => removeSplashEffect(e)}
                     className='b-item noglass'>
                    <div className='flex items-center'>
                        <img className='b-item-image' src={dragon}/>
                        <div className='b-item-desc'>
                            <p className='text-glass'>Multitap</p>
                            <div className='b-item-pricing'>
                                <div className='b-item-price'>
                                    <img src={coin}/> <span>512,000</span>
                                </div>
                                <span className='text-muted'>•</span>
                                <div className='b-item-level text-muted'>9 lvl</div>
                            </div>
                        </div>
                    </div>
                    <img className='b-item-arrow' src={arrow}/>
                </div>
                <div onTouchStart={(e) => addSplashEffect(e)} onTouchEnd={(e) => removeSplashEffect(e)}
                     className='b-item noglass mt-3'>
                    <div className='flex items-center'>
                        <img className='b-item-image' src={dragon}/>
                        <div className='b-item-desc'>
                            <p className='text-glass'>Multitap</p>
                            <div className='b-item-pricing'>
                                <div className='b-item-price'>
                                    <img src={coin}/> <span>512,000</span>
                                </div>
                                <span className='text-muted'>•</span>
                                <div className='b-item-level text-muted'>9 lvl</div>
                            </div>
                        </div>
                    </div>
                    <img className='b-item-arrow' src={arrow}/>
                </div>
                <div onTouchStart={(e) => addSplashEffect(e)} onTouchEnd={(e) => removeSplashEffect(e)}
                     className='b-item noglass mt-3'>
                    <div className='flex items-center'>
                        <img className='b-item-image' src={dragon}/>
                        <div className='b-item-desc'>
                            <p className='text-glass'>Multitap</p>
                            <div className='b-item-pricing'>
                                <div className='b-item-price'>
                                    <img src={coin}/> <span>512,000</span>
                                </div>
                                <span className='text-muted'>•</span>
                                <div className='b-item-level text-muted'>9 lvl</div>
                            </div>
                        </div>
                    </div>
                    <img className='b-item-arrow' src={arrow}/>
                </div>
                <div onTouchStart={(e) => addSplashEffect(e)} onTouchEnd={(e) => removeSplashEffect(e)}
                     className='b-item noglass mt-3'>
                    <div className='flex items-center'>
                        <img className='b-item-image' src={dragon}/>
                        <div className='b-item-desc'>
                            <p className='text-glass'>Multitap</p>
                            <div className='b-item-pricing'>
                                <div className='b-item-price'>
                                    <img src={coin}/> <span>512,000</span>
                                </div>
                                <span className='text-muted'>•</span>
                                <div className='b-item-level text-muted'>9 lvl</div>
                            </div>
                        </div>
                    </div>
                    <img className='b-item-arrow' src={arrow}/>
                </div>
            </div>
        </div>
    );
};

export default BoosterList;
