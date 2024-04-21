import {numShort} from "../../helpers/score.helper.ts";
import WebApp from "@twa-dev/sdk";
import {getFullName} from "../../helpers/format.helper.ts";
import {getColorWithId, leagueName, profileAvatarName} from "../../helpers/helper.ts";
import {LeaguePresets} from "../../types/types.ts";
import {ImageSliceType} from "../../types/store.ts";
import {useSelector} from "react-redux";

const Friend = ({id, fName, lName, username, league, is_premium, balance, earned}: {
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
    const OPEN_IMG = images.optional.find((img) => img.name === 'OPEN_ARROW');
    const PREMIUM_IMG = images.optional.find((img) => img.name === 'TG_PREMIUM');
    const COIN_IMAGE = images.core.find((img) => img.name === 'COIN_TOOL');
    const LEAGUE_IMAGE = images.league.find((img) => leagueName(img.name) === leagueName(league));
    return (
        <div className='friend-container'
             onClick={() => username != null ? WebApp.openTelegramLink(`https://t.me/${username}`) : {}}>
            <div className='flex items-center'>
                <div className='friend-image' style={{backgroundColor: getColorWithId(id)}}>{shortName}</div>
                <div className='friend-info'>
                    <div className='friend-name'>
                        <span>{name.length > 25 ? name.slice(0, 8) + " ..." : name}</span> {is_premium && PREMIUM_IMG ? <img src={PREMIUM_IMG?.img.src} alt='premium'/> : <></>}</div>
                    <div className='friend-subtitle'>
                        <div className='friend-league'><img src={LEAGUE_IMAGE?.img.small.src} alt={leagueName(league)}/>
                            <span>{leagueName(league)}</span></div>
                        <span>•</span>
                        <div className='friend-coin'>{COIN_IMAGE ? <img src={COIN_IMAGE?.img.src} alt='coin'/> : null}
                            <span>{BigInt(balance).toLocaleString()}</span></div>
                    </div>
                </div>
            </div>
            <div className='friend-trailer-container'>
                <span className='friend-earned'>+{numShort(earned)}</span>
                {username != null && OPEN_IMG ? <img className='friend-trailer-img' src={OPEN_IMG?.img.src} alt='opener'/> : <></>}
            </div>
        </div>
    );
};

export default Friend;
