// import {useDispatch, useSelector} from "react-redux";

import tapBot from '../../../public/icon/boosts/tap-bot.svg';
import multiTap from '../../../public/icon/boosts/multi-tap.svg';
import recharge from '../../../public/icon/boosts/recharge-speed.svg';
import battery from '../../../public/icon/boosts/battery.svg';
import BoostItem from "./BoostItem.tsx";

const BoosterList = () => {
    // const score  = useSelector((state: any) => state.score);
    // const dispatch = useDispatch();

    return (
        <div className=''>
            <p className='boost-title'>Boosters</p>
            <div className='boosters-list glass'>
                <BoostItem title='Tap Bot' subtitle='521,000' level={9} image={tapBot} coin={true} trailing='opener'/>
                <BoostItem title='Multitap' subtitle='521,000' level={9} image={multiTap} coin={true} trailing='opener'/>
                <BoostItem title='Recharging Speed' subtitle='521,000' level={9} image={recharge} coin={true} trailing='completed' disabled={true}/>
                <BoostItem title='Energy Limit' subtitle='521,000' level={9} image={battery} coin={true} trailing='opener'/>
            </div>
        </div>
    );
};

export default BoosterList;
