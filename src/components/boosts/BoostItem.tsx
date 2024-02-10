import coinImg from "../../../public/icon/main/small-coin.svg";
import arrow from "../../../public/icon/defaults/open-arrow.svg";
import check from "../../../public/icon/defaults/check.svg";
import lockedImg from "../../../public/icon/boosts/locked.svg";
import {showBottomSheet} from "../../store/game.ts";
import {useDispatch, useSelector} from "react-redux";
import getImage from "../../helpers/image.helper.ts";
import {skinData} from "../../types/data.ts";

const BoostItem = ({image, title, subtitle, subtitleColor, coin, locked, level, maxLevel, disabled = false, trailing, item}: {
    title: string,
    subtitle?: string,
    subtitleColor?: 'gold' | 'grey',
    image?: string,
    coin?: boolean,
    locked?: boolean,
    level?: number,
    maxLevel?: number | null,
    disabled?: boolean,
    trailing?: 'enabled' | 'disabled' | 'opener' | 'completed',
    item: any
}) => {
    const dispatch = useDispatch();
    const itemType = level != undefined ? 'booster' : 'skin';
    const skins: any[] = useSelector((state:any) => state.skin.userSkins);
    const ownSkin = skins.some((skin: any) => skin.skin_id == item.id);
    if (itemType == 'skin' && ownSkin) {
        coin = false;
        locked = false;
    }
    return (
        <div className='b-item glass-hover my-3' style={{opacity: disabled ? .3 : 1}}
             onClick={() => disabled || ownSkin  ? {} : dispatch(showBottomSheet({item: item, type: itemType}))}>
            <div className='flex items-center'>
                <img className='b-item-image' src={getImage(image ?? '')}/>
                <div className='b-item-desc'>
                    <p className='b-item-title'>{title}</p>
                    <div className='b-item-pricing'>
                        <div className='b-item-price'>
                            {coin && <img src={coinImg} alt='coin'/>}
                            {locked && <img src={lockedImg} alt='locked'/>}
                            <span style={{
                                color: subtitleColor == 'gold' && !(itemType == 'skin' && ownSkin) ? '#FFD041' : 'white',
                                opacity: subtitleColor == 'grey' || (itemType == 'skin' && ownSkin )  ? .5 : 1
                            }}>{itemType == 'skin' && ownSkin ? 'You own it' : subtitle}</span>
                        </div>
                        {level == null || maxLevel == 1 ? <></> : <span className='text-muted'>•</span>}
                        {level == null || maxLevel == 1 ? <></> : <div className='b-item-level text-muted'>{level} lvl</div>}
                    </div>
                </div>
            </div>
            {!ownSkin && (trailing == 'opener' ? <img className='b-item-arrow opacity-less' src={arrow} alt='opener'/>
                : trailing == 'enabled' ?
                    <span className='b-item-badge glass b-item-badge-enabled'>enabled</span> : trailing == 'disabled' ?
                        <span className='b-item-badge glass'>turn on</span> : trailing == 'completed' ? <img className='b-item-arrow' src={check} alt='completed'/> : <></>)}
        </div>
    );
};

export default BoostItem;
