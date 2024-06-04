import CommunityItem from "./CommunityItem.tsx";
import {useSelector} from "react-redux";
import {EarnData, UserData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";
import {BoostSliceType, ScoreSliceType} from "../../types/store.ts";
import {calculateBoostPrice, getLevels} from "../../helpers/helper.ts";

const web3 = [
    {
        createdAt : new Date("2024-02-21T06:02:35.989Z"),
        description : "increase the energy recharging speed.",
        id : "10b96607-8248-4c6e-aa1b-5165d48f969f",
        image : "EARN_TWITTER",
        lvl_diff : 20,
        max_lvl : 3,
        name : "Follow us on Twitter", 
        price : 30000,
        short_description : "+1/ sec for each level. 3 levels max limit",
        updatedAt : new Date("2024-02-21T06:02:35.989Z"),
        type: "twitter"
    },
    {
        createdAt : new Date("2024-02-21T06:02:35.989Z"),
        description : "increase the energy recharging speed.",
        id : "10b96607-8248-4c6e-aa1b-5165d748f969f",
        image : "EARN_TELEGRAM",
        lvl_diff : 20,
        max_lvl : 3,
        name : "Join Our Telegram Channel", 
        price : 10000,
        short_description : "+1/ sec for each level. 3 levels max limit",
        updatedAt : new Date("2024-02-21T06:02:35.989Z"),
        type: "tg_channel"
    },
    {
        createdAt : new Date("2024-02-21T06:02:35.989Z"),
        description : "increase the energy recharging speed.",
        id : "10b96607-8248-4c6e-aa1b-5165d485f969f",
        image : "EARN_TELEGRAM",
        lvl_diff : 2,
        max_lvl : 3,
        name : "Join Our Telegram Group", 
        price :50000,
        short_description : "+1/ sec for each level. 3 levels max limit",
        updatedAt : new Date("2024-02-21T06:02:35.989Z"),
        type: "tg_chat"
    },
    {
        createdAt : new Date("2024-02-21T06:02:35.989Z"),
        description : "increase the energy recharging speed.",
        id : "10b96607-8248-4c6e-aa1b-5165d2485f969f",
        image : "EARN_MEDIUM",
        lvl_diff : 2,
        max_lvl : 3,
        name : "Follow use on Medium", 
        price :50000,
        short_description : "+1/ sec for each level. 3 levels max limit",
        updatedAt : new Date("2024-02-21T06:02:35.989Z"),
        type: "tg_medium"
    }
]

const Community = () => {
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    // const boost: BoostSliceType = useSelector((state: any) => state.boost);

    return (
        <div className=''>
            <div className='boosters-list glass blur-round-border-bg animate__animated animate__fadeIn animate__slow' style={{
                '--angle': '135deg',
            } as React.CSSProperties}>
                {

                    web3
                        .map((item: EarnData) => {
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
                                type: item.type,
                                trailing: trailing, //  "opener" | "enabled" | "disabled" | "completed"
                                haveEnough: BigInt(score.value) >= BigInt(itemPrice),
                            };
                        })
                        .sort((a, b) => (a.isMax && !b.isMax ? 1 : b.isMax && !a.isMax ? -1 : 0))
                        .map(({isMax, item, key, title, subtitle, maxLevel, level, image, coin, trailing, haveEnough, type}) => (
                            <CommunityItem
                                isMax={isMax}
                                item={item}
                                key={key}
                                title={title}
                                subtitle={subtitle}
                                maxLevel={maxLevel}
                                level={level}
                                image={image}
                                coin={coin}
                                type={type}
                                haveEnough={haveEnough}
                                trailing={trailing as "opener" | "enabled" | "disabled" | "completed" | "none"}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default Community;
