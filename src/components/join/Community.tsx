import CommunityItem from "./CommunityItems.tsx";
import {EarnData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";

const communities = [
    {
        id : "10b96607-8248-4c6e-aa1b-5165d48f969f",
        image : "EARN_TWITTER",
        name : "Follow us on Twitter", 
        price : 30000,
        url: "https://x.com/DragonDotBot",
        type: "twitter"
    },
    {
        id : "10b96607-8248-4c6e-aa1b-5165d748f969f",
        image : "EARN_TELEGRAM",
        name : "Join Our Telegram Channel", 
        price : 10000,
        url: "https://t.me/DragonBotCommunity",
        type: "tg_channel"
    },
    {
        id : "10b96607-8248-4c6e-aa1b-5165d485f969f",
        image : "EARN_TELEGRAM",
        name : "Join Our Telegram Group", 
        price :50000,
        url: "https://t.me/DragonBotGC",
        type: "tg_group"
    },
    {
        id : "10b96607-8248-4c6e-aa1b-5165d2485f969f",
        image : "EARN_MEDIUM",
        name : "Follow use on Medium", 
        price :50000,
        url: "https://medium.com/@dragonbot",
        type: "medium"
    }
]

const Community = () => {

    return (
        <div className=''>
            <div className='boosters-list glass blur-round-border-bg animate__animated animate__fadeIn animate__slow' style={{
                '--angle': '135deg',
            } as React.CSSProperties}>
                {
                    communities
                        .map((item: EarnData) => {
                            return {
                                item,
                                key: item.id,
                                title: item.name,
                                subtitle: numify(item.price),
                                image: item.image,
                                coin: true,
                                url: item.url,
                                type: item.type,
                            };
                        })
                        
                        .map(({item, key, title, subtitle, image, coin, url}) => (
                            <CommunityItem
                                item={item}
                                key={key}
                                title={title}
                                subtitle={subtitle}
                                image={image}
                                coin={coin}
                                url={url}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default Community;
