import coin from "../../../public/icon/main/small-coin.svg";
import bronze from "../../../public/icon/rank/small/bronze.svg";
import premium from "../../../public/icon/tg_premium.svg";
import openerImg from "../../../public/icon/defaults/open-arrow.svg";
import {numify, numShort} from "../../helpers/score.helper.ts";
import WebApp from "@twa-dev/sdk";
import {getFullName} from "../../helpers/format.helper.ts";
import {getColorWithId} from "../../helpers/helper.ts";

const Friend = ({id, fName,lName,username, is_premium, balance, earned}: {
    id: string,
    fName: string,
    lName: string,
    is_premium: boolean,
    balance: string,
    earned: number,
    username: string | null
}) => {
    // only 2 letters
    const name = getFullName(fName, lName);
    const shortName = ((fName ? fName.charAt(0) : '') + (lName ? lName.charAt(0) : '')).toUpperCase();
    return (
        <div className='friend-container' onClick={() => username != null ? WebApp.openTelegramLink(`https://t.me/${username}`) : {}}>
            <div className='flex items-center'>
                <div className='friend-image' style={{backgroundColor: getColorWithId(id)}}>{shortName}</div>
                <div className='friend-info'>
                    <div className='friend-name'><span>{name.length > 25 ? name.slice(0,8) + " ..." : name}</span> {is_premium ? <img src={premium} alt='premium'/> : <></>}</div>
                    <div className='friend-subtitle'>
                        <div className='friend-league'><img src={bronze} alt='bronze'/> <span>Bronze</span></div>
                        <span>•</span>
                        <div className='friend-coin'><img src={coin} alt='coin'/> <span>{BigInt(balance).toLocaleString()}</span></div>
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
