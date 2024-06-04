import Web3worldItem from "./Web3worldItem.tsx";
import {useSelector} from "react-redux";
import {boosterData, UserData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";
import {BoostSliceType, ScoreSliceType} from "../../types/store.ts";
import {calculateBoostPrice, getLevels} from "../../helpers/helper.ts";

const web3 = [
    {
        createdAt : new Date("2024-02-21T06:02:35.989Z"),
        description : "increase the energy recharging speed.",
        id : "10b96607-8248-4c6e-aa1b-5165d48f969f",
        image : "EARN_COMMUNITY",
        lvl_diff : 20,
        max_lvl : 3,
        name : "Join our communities", 
        price : 10000000,
        short_description : "+1/ sec for each level. 3 levels max limit",
        updatedAt : new Date("2024-02-21T06:02:35.989Z"),
    },
    {
        createdAt : new Date("2024-02-21T06:02:35.989Z"),
        description : "increase the energy recharging speed.",
        id : "10b96607-8248-4c6e-aa1b-5165d748f969f",
        image : "EARN_WALLET",
        lvl_diff : 20,
        max_lvl : 3,
        name : "Connect Wallet", 
        price : 100000,
        short_description : "+1/ sec for each level. 3 levels max limit",
        updatedAt : new Date("2024-02-21T06:02:35.989Z"),
    },
    {
        createdAt : new Date("2024-02-21T06:02:35.989Z"),
        description : "increase the energy recharging speed.",
        id : "10b96607-8248-4c6e-aa1b-5165d485f969f",
        image : "EARN_TWITTER",
        lvl_diff : 2,
        max_lvl : 3,
        name : "Retweet Post", 
        price : 1000,
        short_description : "+1/ sec for each level. 3 levels max limit",
        updatedAt : new Date("2024-02-21T06:02:35.989Z"),
    }
]

const Web3world = () => {
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    // const boost: BoostSliceType = useSelector((state: any) => state.boost);

    return (
        <div className=''>
            <p className='boost-title animate__animated animate__fadeIn animate__slow'>Web 3 world</p>
            <div className='boosters-list glass blur-round-border-bg animate__animated animate__fadeIn animate__slow' style={{
                '--angle': '135deg',
            } as React.CSSProperties}>
                {

                    web3
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
                                haveEnough: BigInt(score.value) >= BigInt(itemPrice),
                            };
                        })
                        .sort((a, b) => (a.isMax && !b.isMax ? 1 : b.isMax && !a.isMax ? -1 : 0))
                        .map(({isMax, item, key, title, subtitle, maxLevel, level, image, coin, trailing, haveEnough}) => (
                            <Web3worldItem
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
                }
            </div>
        </div>
    );
};

export default Web3world;
