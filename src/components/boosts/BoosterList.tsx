// import {useDispatch, useSelector} from "react-redux";
import BoostItem from "./BoostItem.tsx";
import {useSelector} from "react-redux";
import {boosterData, UserData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";
import {BoostSliceType, ScoreSliceType} from "../../types/store.ts";
import {calculateBoostPrice, getLevels} from "../../helpers/helper.ts";

const BoosterList = () => {
    // const score  = useSelector((state: any) => state.score);
    // const dispatch = useDispatch();
    // const user: UserData = useSelector((state: any) => state.user.data);
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    const boost: BoostSliceType = useSelector((state: any) => state.boost);
    console.log(boost.boosts)
    return (
        <div className=''>
            <p className='boost-title'>Boosters</p>
            <div className='boosters-list glass'>
                {

                    boost.boosts
                        .map((item: boosterData) => {
                            const item_lvl = getLevels({
                                tap_lvl: score.tap_lvl,
                                recharge_lvl: score.recharge_lvl,
                                bot_lvl: score.bot_lvl,
                                energy_lvl: score.energy_lvl,
                            }, item);
                            const itemPrice = calculateBoostPrice({
                                price: item.price,
                                level: item_lvl,
                                diff: item.lvl_diff,
                            });
                            const isMax = item.max_lvl !== 0 && item_lvl >= item.max_lvl;
                            const isBot = item.image == 'AUTO_TAP_BOT';
                            const trailing: "opener" | "enabled" | "disabled" | "completed" | "none" = isMax ? isBot ? 'none' : 'completed' : 'opener';
                            return {
                                isMax,
                                item,
                                key: item.id,
                                title: item.name,
                                subtitle: numify(itemPrice),
                                maxLevel: item.max_lvl,
                                level: item_lvl,
                                image: item.image,
                                coin: true,
                                trailing: trailing, //  "opener" | "enabled" | "disabled" | "completed"
                                haveEnough: score.value >= itemPrice,
                            };
                        })
                        .sort((a, b) => (a.isMax && !b.isMax ? 1 : b.isMax && !a.isMax ? -1 : 0))
                        .map(({isMax, item, key, title, subtitle, maxLevel, level, image, coin, trailing, haveEnough}) => (
                            <BoostItem
                                isMax={isMax}
                                item={item}
                                key={key}
                                title={title}
                                subtitle={subtitle}
                                maxLevel={maxLevel}
                                level={level}
                                image={image}
                                coin={coin}
                                haveEnough={haveEnough}
                                trailing={trailing as "opener" | "enabled" | "disabled" | "completed" | "none"}
                            />
                        ))


                    // boost.boosts.map((item: boosterData) => {
                    //     const item_lvl = getLevels(user, item);
                    //     const itemPrice = calculateBoostPrice({
                    //         price: item.price,
                    //         level: item_lvl,
                    //         diff: item.lvl_diff,
                    //     });
                    //     const isMax = item.max_lvl != 0 && item_lvl >= item.max_lvl;
                    //     return <BoostItem isMax={isMax} item={item} key={item.id} title={item.name} subtitle={numify(itemPrice)} maxLevel={item.max_lvl} level={item_lvl} image={item.image} coin={true} trailing='opener'/>
                    // })
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
