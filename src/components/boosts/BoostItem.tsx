import coinImg from "../../../public/icon/main/small-coin.svg";
import arrow from "../../../public/icon/defaults/open-arrow.svg";
import check from "../../../public/icon/defaults/check.svg";
import lockedImg from "../../../public/icon/boosts/locked.svg";
import {showBottomSheet} from "../../store/game.ts";
import {useDispatch, useSelector} from "react-redux";
import {BoostSliceType, ImageSliceType, MyImageTypes, MySkinImageTypes, PurchaseSliceType} from "../../types/store.ts";
import toast from "react-hot-toast";
import {MouseEventHandler} from "react";

const BoostItem = ({
                       image,
                       title,
                       subtitle,
                       subtitleColor,
                       coin,
                       locked,
                       level,
                       maxLevel,
                       disabled = false,
                       isMax = false,
                       trailing,
                       onTrailing,
                       item,
                       haveEnough
                   }: {
    title: string,
    subtitle?: string,
    subtitleColor?: 'gold' | 'grey',
    image?: string,
    coin?: boolean,
    locked?: boolean,
    level?: number,
    maxLevel?: number | null,
    disabled?: boolean,
    isMax?: boolean,
    trailing?: 'enabled' | 'disabled' | 'opener' | 'completed' | 'none',
    onTrailing?: MouseEventHandler<HTMLImageElement>
    item: any,
    haveEnough: boolean
}) => {
    if (isMax)
        disabled = true;
    const isBot = item.image == 'AUTO_TAP_BOT';
    const dispatch = useDispatch();
    const itemType = level != undefined ? 'booster' : 'skin';
    const purchase: PurchaseSliceType = useSelector((state: any) => state.purchase);
    // if (itemType == 'skin' && ownSkin) {
    //     coin = false;
    //     locked = false;
    // }
    const images: ImageSliceType = useSelector((state: any) => state.image);
    let imgHelp: MyImageTypes & MySkinImageTypes = [...images.booster, ...images.skin].find((img: any) => img.name == item.image) as any;
    let img = imgHelp !== undefined ? itemType == 'skin' ? imgHelp.img.normal : imgHelp.img : null;
    const clickHandler = () => {
        if (disabled || trailing == 'enabled') {}
        else {
            if (haveEnough || (trailing == 'disabled' && itemType == 'skin')) {
                dispatch(showBottomSheet({item: item, type: itemType}))
            } else {
                toast.error('You do not have enough coins', {
                    id: purchase.toast,
                });
            }
        }

    }
    return (
        <div className='b-item glass-hover my-3' style={{opacity: disabled && !isBot ? .3 : 1}}
             onClick={clickHandler}>
            <div className='flex items-center'>
                {img != undefined ? <img className='b-item-image' src={img.src}/> : <></>}
                <div className='b-item-desc'>
                    <p className='b-item-title flex items-center'>{title} {isBot && isMax ?
                        <span className='ml-3 b-item-badge glass'>on <span className='ml-1'
                                                                           style={{fontSize: '8px'}}>🟢</span></span> : ''}</p>
                    {isMax ? <p className='mt-2'>{isBot ? 'Taps when you\'re asleep' : 'Max level reached'}</p> :
                        <div className='b-item-pricing'>
                            <div className='b-item-price'>
                                {coin && <img src={coinImg} alt='coin'/>}
                                {locked && <img src={lockedImg} alt='locked'/>}
                                <span style={{
                                    color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                    opacity: subtitleColor == 'grey' ? .5 : 1
                                }}>{subtitle}</span>
                            </div>
                            {level == null || maxLevel == 1 ? <></> : <span className='text-muted'>•</span>}
                            {level == null || maxLevel == 1 ? <></> :
                                <div className='b-item-level text-muted'>{level} lvl</div>}
                        </div>}
                </div>
            </div>
            {(trailing == 'opener' ?
                    <img onClick={onTrailing} className='b-item-arrow opacity-less' src={arrow} alt='opener'/>
                    : trailing == 'enabled' ?
                        <span onClick={onTrailing} className='b-item-badge glass b-item-badge-enabled mr-4'>enabled</span> :
                        trailing == 'disabled' ?
                            <span onClick={onTrailing} className='b-item-badge glass mr-4'>turn on</span> :
                            trailing == 'completed' ?
                                <img onClick={onTrailing} className='b-item-arrow' src={check}
                                     alt='completed'/> : <></>)}
        </div>
    );
};

export default BoostItem;
