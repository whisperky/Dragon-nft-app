import Sheet from 'react-modal-sheet';
import {useDispatch, useSelector} from "react-redux";
import {hideBottomSheet} from "../store/game.ts";
import {useEffect, useRef} from 'react';
import coin from '../../public/icon/main/small-coin.svg';
import close from '../../public/icon/defaults/close.svg';

import {
    useOverlay,
    useModal,
    OverlayProvider,
    FocusScope,
    useDialog,
} from 'react-aria';
import {boosterData, skinData, userDailyBoost, UserData} from "../types/data.ts";
import {numify} from "../helpers/score.helper.ts";
import {setPurchaseItem} from "../store/purchase.ts";
import {GameSliceType, ImageSliceType, ScoreSliceType, SkinSliceType, UserSliceType} from "../types/store.ts";
import {calculateBoostPrice, getLevels, showToast} from "../helpers/helper.ts";

const BottomSheet = () => {
    const game: GameSliceType = useSelector((state: any) => state.game);
    const dispatch = useDispatch();

    return (
        <div>
            <Sheet rootId='bottom-sheet'
                   isOpen={game.bottomSheet}
                   onClose={() => dispatch(hideBottomSheet())}
                   disableDrag={true}
                   detent={'content-height'}
            >
                <OverlayProvider>
                    <FocusScope contain autoFocus restoreFocus>
                        <SheetComp/>
                    </FocusScope>
                </OverlayProvider>
            </Sheet>
        </div>
    );
};

const SheetComp = () => {
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    const websocket = useSelector((state: any) => state.user.websocket);
    const game: GameSliceType = useSelector((state: any) => state.game);
    const skins: SkinSliceType = useSelector((state: any) => state.skin);
    const purchase = useSelector((state: any) => state.purchase);
    const boost = useSelector((state: any) => state.boost);
    const dispatch = useDispatch();
    const item: skinData | boosterData = game.item;
    const item_lvl = getLevels({
        tap_lvl: score.tap_lvl,
        recharge_lvl: score.recharge_lvl,
        bot_lvl: score.bot_lvl,
        energy_lvl: score.energy_lvl,
    }, item);
    const itemPrice = ((item as boosterData).lvl_diff !== undefined) ? calculateBoostPrice({
        price: item.price,
        level: item_lvl,
        diff: (item as boosterData).lvl_diff,
    }) : item.price;
    const containerRef = useRef(null);
    const dialog = useDialog({}, containerRef);
    const overlay = useOverlay(
        {onClose: () => dispatch(hideBottomSheet()), isOpen: game.bottomSheet, isDismissable: true},
        containerRef
    );
    useModal();
    const onPurchaseHandler = () => {
        dispatch(hideBottomSheet())
        if (game.itemType == 'daily_booster') {
            showToast(purchase.toast, `Buying ${item.name}`, 'loading');
            const leftDailyBoosts: userDailyBoost[] = boost.leftDailyBoosts;
            const leftBoost = game.item.limit - ((leftDailyBoosts.filter((b: any) => game.item.id === b.id)[0]).used);
            if (leftBoost <= 0) {
                showToast(purchase.toast, 'You have reached your limit', 'error')
            }
            else {
                websocket.emit('purchase', {
                    type: game.itemType,
                    item: game.item.id,
                });
                dispatch(setPurchaseItem(game.item.id))
            }
        }
        else if (game.itemType == 'booster') {
            showToast(purchase.toast, `Buying ${item.name}`, 'loading')
            if (BigInt(itemPrice) > BigInt(score.value)) {
                showToast(purchase.toast,'You do not have enough coins', 'error')
            } else if (
                (game.itemType == 'booster' && game.item.image == 'ENERGY_LIMIT' && game.item.max_lvl !== 0 && game.item.max_lvl <= score.energy_lvl) ||
                (game.itemType == 'booster' && game.item.image == 'AUTO_TAP_BOT' && game.item.max_lvl !== 0 && game.item.max_lvl <= score.bot_lvl) ||
                (game.itemType == 'booster' && game.item.image == 'MULTI_TAP' && game.item.max_lvl !== 0 && game.item.max_lvl <= score.tap_lvl) ||
                (game.itemType == 'booster' && game.item.image == 'RECHARGING_SPEED' && game.item.max_lvl !== 0 && game.item.max_lvl <= score.recharge_lvl)
            ) {
                showToast(purchase.toast,'You have reached the maximum level', 'error')
            } else {
                websocket.emit('purchase', {
                    type: game.itemType,
                    item: game.item.id,
                });
                dispatch(setPurchaseItem(game.item.id))
                // toast(`${game.item.price} > ${user.balance} Coming soon ${game.itemType} + ${game.item.id} + ${game.item.name} `, {id: purchase.toast})
            }
        }
        else if (game.itemType == 'skin') {
            const uSkin = skins.userSkins.find((x) => x.skin_id == game.item.id);
            const ownSkin = uSkin != undefined;
            // const isEnabled = ownSkin ? uSkin.status == true : false;

            if (!ownSkin) {
                showToast(purchase.toast,`Buying ${item.name}`, 'loading')
                websocket.emit('purchase', {
                    type: game.itemType,
                    item: game.item.id,
                });
                dispatch(setPurchaseItem(game.item.id))
            } else {
                showToast(purchase.toast,`Changing skin to ${item.name}`, 'loading')
                websocket.emit('changeSkin', {
                    uSkinId: uSkin.id
                })
            }
        }
    }
    // In real world usage this would be a separate React component
    const customHeader = (
        <div>
            <button className='bottom-sheet-close-btn' onClick={() => dispatch(hideBottomSheet())}><img src={close} alt='X'/>
            </button>
        </div>
    );
    const daily_img = image.dailyBooster.find((x) => x.name == item.image);
    const boost_img = image.booster.find((x) => x.name == item.image);
    const skin_img = image.skin.find((x) => x.name == item.image)

    const img = game.itemType == "daily_booster" && daily_img != undefined ? daily_img.img : game.itemType == 'booster' && boost_img != undefined ? boost_img.img : game.itemType == 'skin' && skin_img != undefined ? skin_img.img.normal : null;
    if (game.itemType == 'skin') {
        const uSkin = skins.userSkins.find((x) => x.skin_id == game.item.id);
        const ownSkin = uSkin != undefined;
        const isEnabled = ownSkin ? uSkin.status == true : false;

        return game.item == null ? <></> : (
            <>
                <Sheet.Container
                    className='sheet-body'
                    ref={containerRef}
                    {...overlay.overlayProps as any}
                    {...dialog.dialogProps as any}
                >
                    <Sheet.Header>{customHeader}</Sheet.Header>
                    <Sheet.Content>
                        <div className="bs-container">
                            {img !== null ? <img className='bs-img' src={img.src}/> : <div className='bs-img'></div>}
                            <div className='bs-title'>{item.name}</div>
                            <span className='bs-subtitle'>{item.description}</span>
                            {!ownSkin ? <div className='bs-pricing'>
                                <div className='bs-price'>
                                    <img src={coin} alt='coin'/>
                                    <span>{item.price == 0 ? 'Free' : numify(itemPrice)}</span>
                                </div>
                            </div> : <></>}
                            <button className='bs-button'
                                    onClick={onPurchaseHandler}>{ownSkin ? 'Apply Skin' : 'Get'}</button>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop/>
            </>
        );
    } else {
        return game.item == null ? <></> : (
            <>
                <Sheet.Container
                    className='sheet-body'
                    ref={containerRef}
                    {...overlay.overlayProps as any}
                    {...dialog.dialogProps as any}
                >
                    <Sheet.Header>{customHeader}</Sheet.Header>
                    <Sheet.Content>
                        <div className="bs-container">
                            {img !== null ? <img className='bs-img' src={img.src}/> : <div className='bs-img'></div>}
                            <div className='bs-title'>{item.name}</div>
                            <span className='bs-subtitle'>{item.description}</span>
                            {/*<span className='bs-over-subtitle'>{item.}</span>*/}
                            <div className='bs-pricing'>
                                <div className='bs-price'>
                                    <img src={coin} alt='coin'/>
                                    <span>{item.price == 0 ? 'Free' : numify(itemPrice)}</span>
                                </div>
                                {game.itemType == 'booster' && <span>/ Level {item_lvl}</span>}
                            </div>
                            <button className='bs-button' onClick={onPurchaseHandler}>Get</button>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop/>
            </>
        );
    }
};
export default BottomSheet;