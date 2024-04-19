import coin from "../../../public/icon/main/small-coin.svg";
import bronze from "../../../public/icon/rank/small/bronze.svg";
import premium from "../../../public/icon/tg_premium.svg";
import openerImg from "../../../public/icon/defaults/open-arrow.svg";
import {numify, numShort} from "../../helpers/score.helper.ts";
import WebApp from "@twa-dev/sdk";
import {getFullName} from "../../helpers/format.helper.ts";
import {getColorWithId, leagueName, leagueToNumber, profileAvatarName} from "../../helpers/helper.ts";
import {LeaguePresets} from "../../types/types.ts";
import {ImageSliceType} from "../../types/store.ts";
import {useSelector} from "react-redux";

const Friend = ({id, fName,lName,username,league, is_premium, balance, earned}: {
    id: string,
    fName: string,
    lName: string,
    league: LeaguePresets,
    is_premium: boolean,
    balance: string,
    earned: number,
    username: string | null
}) => {
    // only 2 letters
    const name = getFullName(fName, lName);
    const shortName = profileAvatarName(fName, lName);
    const images: ImageSliceType = useSelector((state: any) => state.image);
    const LEAGUE_IMAGE = images.league.find((img) => leagueName(img.name) === leagueName(league));
    return (
        <div className='friend-container' onClick={() => username != null ? WebApp.openTelegramLink(`https://t.me/${username}`) : {}}>
            <div className='flex items-center'>
                <div className='friend-image' style={{backgroundColor: getColorWithId(id)}}>{shortName}</div>
                <div className='friend-info'>
                    <div className='friend-name'><span>{name.length > 25 ? name.slice(0,8) + " ..." : name}</span> {is_premium ? <img src={premium} alt='premium'/> : <></>}</div>
                    <div className='friend-subtitle'>
                        <div className='friend-league'><img src={LEAGUE_IMAGE?.img.small.src} alt={leagueName(league)}/> <span>{leagueName(league)}</span></div>
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
