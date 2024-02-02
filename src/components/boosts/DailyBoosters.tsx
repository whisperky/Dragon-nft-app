// import {useDispatch, useSelector} from "react-redux";
import dragon from '../../../public/icon/dragon.svg';
import {addSplashEffect, removeSplashEffect} from "../../helpers/style.helper.ts";

const DailyBoosters = () => {
    // const score  = useSelector((state: any) => state.score);
    // const dispatch = useDispatch();
    return (
        <div className=''>
            <p className='boost-title'>Free daily boosters</p>
            <div className='daily-boosters'>
                <div onTouchStart={(e) => addSplashEffect(e)} onTouchEnd={(e) =>removeSplashEffect(e)} className='single-booster glass'>
                    <div>
                        <p>Turbo</p>
                        <p>3/3 available</p>
                    </div>
                    <div>
                        <img src={dragon}/>
                    </div>
                </div>
                <div onTouchStart={(e) => addSplashEffect(e)} onTouchEnd={(e) =>removeSplashEffect(e)} className='single-booster glass'>
                    <div>
                        <p>Turbo</p>
                        <p>3/3 available</p>
                    </div>
                    <div>
                        <img src={dragon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyBoosters;
