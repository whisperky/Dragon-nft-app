import coin from "../../../public/icon/main/small-coin.svg";
import bronze from "../../../public/icon/rank/small/bronze.svg";
import premium from "../../../public/icon/tg_premium.svg";
import openerImg from "../../../public/icon/defaults/open-arrow.svg";
import {numify, numShort} from "../../helpers/score.helper.ts";
import WebApp from "@twa-dev/sdk";

const Friend = ({name, username, is_premium, balance, earned}: {
    name: string,
    is_premium: boolean,
    balance: number,
    earned: number,
    username: string | null
}) => {
    const shortName = name.split(' ').map((n: string) => n[0]).join('');
    return (
        <div className='friend-container' onClick={() => username != null ? WebApp.openTelegramLink(`https://t.me/${username}`) : {}}>
            <div className='flex items-center'>
                <div className='friend-image'>{shortName}</div>
                <div className='friend-info'>
                    <div className='friend-name'>{name} {is_premium ? <img src={premium} alt='premium'/> : <></>}</div>
                    <div className='friend-subtitle'>
                        <div className='friend-league'><img src={bronze} alt='bronze'/> <span>Bronze</span></div>
                        <span>•</span>
                        <div className='friend-coin'><img src={coin} alt='coin'/> <span>{numify(balance)}</span></div>
                    </div>
                </div>
            </div>
            <div className='friend-trailer-container'>
                <span className='friend-earned'>+{numShort(earned)}</span>
                {username != null ? <img className='friend-trailer-img' src={openerImg} alt='opener'/> : <></>}
            </div>
        </div>
    );
};

export default Friend;
