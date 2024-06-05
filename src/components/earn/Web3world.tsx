import Web3worldItem from "./Web3worldItem.tsx";
import {useSelector} from "react-redux";
import {EarnData, UserData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";
import {BoostSliceType, ScoreSliceType} from "../../types/store.ts";
import {calculateBoostPrice, getLevels} from "../../helpers/helper.ts";

const web3 = [
    {
        id : "10b96607-8248-4c6e-aa1b-5165d48f969f",
        image : "EARN_COMMUNITY",
        name : "Connect with Socials", 
        price : 10000000,
        type: "join"
    },
    {
        id : "10b96607-8248-4c6e-aa1b-5165d748f969f",
        image : "EARN_WALLET",
        name : "Connect Wallet", 
        price : 100000,
        type: "wallet"
    },
    {
        id : "10b96607-8248-4c6e-aa1b-5165d485f969f",
        image : "EARN_TWITTER",
        name : "Engage with Posts", 
        price :50000,
        type: "retweet"
    }
]

const Web3world = () => {
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    // const boost: BoostSliceType = useSelector((state: any) => state.boost);

    return (
        <div className=''>
            <p className='boost-title animate__animated animate__fadeIn animate__slow'>Dragon world</p>
            <div className='boosters-list glass blur-round-border-bg animate__animated animate__fadeIn animate__slow' style={{
                '--angle': '135deg',
            } as React.CSSProperties}>
                {

                    web3
                        .map((item: EarnData) => {
                            return {
                                item,
                                key: item.id,
                                title: item.name,
                                image: item.image,
                                coin: true,
                                type: item.type,
                            };
                        })
                        .map(({item, key, title, coin, image, type}) => (
                            <Web3worldItem
                                item={item}
                                key={key}
                                title={title}
                                image={image}
                                coin={coin}
                                type={type}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default Web3world;
