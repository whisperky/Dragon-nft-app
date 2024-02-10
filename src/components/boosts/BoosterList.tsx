// import {useDispatch, useSelector} from "react-redux";
import BoostItem from "./BoostItem.tsx";
import {useSelector} from "react-redux";
import {boosterData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";

const BoosterList = () => {
    // const score  = useSelector((state: any) => state.score);
    // const dispatch = useDispatch();
    const user = useSelector((state:any) => state.user.data);
    const boost = useSelector((state:any) => state.boost);
    console.log(boost.boosts)
    return (
        <div className=''>
            <p className='boost-title'>Boosters</p>
            <div className='boosters-list glass'>
                {
                    boost.boosts.map((item: boosterData) => {
                        const level = item.image == 'MULTI_TAP' ? user.tap_lvl : (item.image == 'ENERGY_LIMIT' ? user.energy_lvl : (item.image == 'RECHARGING_SPEED' ? user.recharge_lvl : 0));
                        return <BoostItem item={item} key={item.id} title={item.name} subtitle={numify(item.price)} maxLevel={item.max_lvl} level={level} image={item.image} coin={true} trailing='opener'/>
                    })
                }
                {/*<BoostItem title='Tap Bot' subtitle='521,000' level={9} image={tapBot} coin={true} trailing='opener'/>*/}
                {/*<BoostItem title='Multitap' subtitle='521,000' level={9} image={multiTap} coin={true} trailing='opener'/>*/}
                {/*<BoostItem title='Recharging Speed' subtitle='521,000' level={9} image={recharge} coin={true} trailing='completed' disabled={true}/>*/}
                {/*<BoostItem title='Energy Limit' subtitle='521,000' level={9} image={battery} coin={true} trailing='opener'/>*/}
            </div>
        </div>
    );
};

export default BoosterList;
