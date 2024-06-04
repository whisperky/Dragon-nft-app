import {showBottomSheet} from "../../store/game.ts";
import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, MyImageTypes, MySkinImageTypes, PurchaseSliceType} from "../../types/store.ts";
import {MouseEventHandler} from "react";
import {showToast} from "../../helpers/helper.ts";
import {useNavigate} from "react-router-dom";

const Web3worldItem = ({
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
                       haveEnough,
                       type
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
    haveEnough: boolean,
    type: String
}) => {
    const navigate = useNavigate()
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
    const COIN_IMG = images.core.find((img: any) => img.name == 'COIN_TOOL');
    const LOCKED_IMG = images.optional.find((img: any) => img.name == 'LOCKED_ICON');
    const OPEN_IMG = images.optional.find((img: any) => img.name == 'OPEN_ARROW');
    const CHECK_IMG = images.optional.find((img: any) => img.name == 'CHECK_ICON');
    let imgHelp: MyImageTypes & MySkinImageTypes = [...images.booster, ...images.skin].find((img: any) => img.name == item.image) as any;
    let img = imgHelp !== undefined ? itemType == 'skin' ? imgHelp?.img.normal : imgHelp?.img : null;
    const clickHandler = () => {
        if(type==="join") {navigate(item.type)}
        else showToast(purchase.toast, 'Coming Soon', 'error')
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
                                {coin && COIN_IMG ? <img src={COIN_IMG?.img.src} alt='coin'/> : null}
                                {locked && LOCKED_IMG ? <img src={LOCKED_IMG?.img.src} alt='locked'/> : null}
                                {parseInt(subtitle.replaceAll(",", "")) > 150000 ? <span style={{
                                    color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                    opacity: subtitleColor == 'grey' ? .5 : 1
                                }}>up to 150,000</span> : <span style={{
                                    color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                    opacity: subtitleColor == 'grey' ? .5 : 1
                                }}> + {subtitle}</span>}
                            </div>
                            {/* {level == null || maxLevel == 1 ? <></> : <span className='text-muted'>•</span>}
                            {level == null || maxLevel == 1 ? <></> :
                                <div className='b-item-level text-muted'>Level {level}</div>} */}
                        </div>}
                </div>
            </div>
            {(trailing == 'opener' ?
                OPEN_IMG ? <img onClick={onTrailing} className='b-item-arrow opacity-less' src={OPEN_IMG?.img.src}
                                alt='opener'/> : null
                : trailing == 'enabled' ?
                    <span onClick={onTrailing} className='b-item-badge glass b-item-badge-enabled mr-4'>enabled</span> :
                    trailing == 'disabled' ?
                        <span onClick={onTrailing} className='b-item-badge glass mr-4'>turn on</span> :
                        trailing == 'completed' ?
                            CHECK_IMG ? <img onClick={onTrailing} className='b-item-arrow' src={CHECK_IMG?.img.src}
                                             alt='completed'/> : null : <></>)}
        </div>
    );
};

export default Web3worldItem;
