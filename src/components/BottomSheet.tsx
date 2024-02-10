import Sheet from 'react-modal-sheet';
import {useDispatch, useSelector} from "react-redux";
import {hideBottomSheet} from "../store/game.ts";
import { useRef } from 'react';
import coin from '../../public/icon/main/small-coin.svg';
import close from '../../public/icon/defaults/close.svg';

import {
    useOverlay,
    useModal,
    OverlayProvider,
    FocusScope,
    useDialog,
} from 'react-aria';
import {boosterData, skinData, userDailyBoost} from "../types/data.ts";
import getImage from "../helpers/image.helper.ts";
import {numify} from "../helpers/score.helper.ts";
import toast from "react-hot-toast";
import {setPurchaseItem} from "../store/purchase.ts";

const BottomSheet = () => {
    const game = useSelector((state: any) => state.game);
    const dispatch = useDispatch();

    return (
        <div>
            <Sheet  rootId='bottom-sheet'
                    isOpen={game.bottomSheet}
                    onClose={() => dispatch(hideBottomSheet())}
                    disableDrag={true}
                    detent={'content-height'}
            >
                <OverlayProvider>
                    <FocusScope contain autoFocus restoreFocus>
                        <SheetComp />
                    </FocusScope>
                </OverlayProvider>
            </Sheet>
        </div>
    );
};

const SheetComp = () => {
    const user = useSelector((state: any) => state.user.data);
    const websocket = useSelector((state: any) => state.user.websocket);
    const game = useSelector((state: any) => state.game);
    const purchase = useSelector((state: any) => state.purchase);
    const boost = useSelector((state: any) => state.boost);
    const dispatch = useDispatch();
    const item: skinData | boosterData = game.item;
    const level = game.item != null ? (item.image == 'MULTI_TAP' ? user.tap_lvl : item.image == 'ENERGY_LIMIT' ? user.energy_lvl : item.image == 'RECHARGING_SPEED' ? user.recharge_lvl : 0) : 0;
    const containerRef = useRef(null);
    const dialog = useDialog({}, containerRef);
    const overlay = useOverlay(
        { onClose: () => dispatch(hideBottomSheet()), isOpen: game.bottomSheet, isDismissable: true },
        containerRef
    );
    useModal();
    const onPurchaseHandler = () => {
        dispatch(hideBottomSheet())
        toast.loading( `Buying ${item.name}`, {
            id: purchase.toast,
        });
        if (game.itemType == 'daily_booster') {
            const leftDailyBoosts: userDailyBoost[] = boost.leftDailyBoosts;
            const leftBoost = game.item.limit - ((leftDailyBoosts.filter((b: any) => game.item.id === b.id)[0]).used);
            if (leftBoost <= 0) {
                toast.error('You have reached your limit', {
                    id: purchase.toast,
                    position: 'bottom-center',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            } else {
                websocket.emit('buyDailyBoost', {
                    type: 'daily',
                    item: game.item.id,
                });
                dispatch(setPurchaseItem(game.item.id))
            }
        } else {
            toast('Coming soon', {id: purchase.toast})
        }
    }
    // In real world usage this would be a separate React component
    const customHeader = (
        <div>
            <button className='bottom-sheet-close-btn' onClick={() => dispatch(hideBottomSheet())}><img src={close} alt='X'/></button>
        </div>
    );

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
                        <img className='bs-img' src={getImage(item.image)}/>
                        <div className='bs-title'>{item.name}</div>
                        <span className='bs-subtitle'>{item.description}</span>
                        {/*<span className='bs-over-subtitle'>{item.}</span>*/}
                        <div className='bs-pricing'>
                            <div className='bs-price'>
                                <img src={coin} alt='coin'/> <span>{item.price == 0 ? 'Free' : numify(item.price)}</span>
                            </div>
                            { game.itemType == 'booster' && <span>/ Level {level}</span>}
                        </div>
                        <button className='bs-button' onClick={onPurchaseHandler}>Get</button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop/>
        </>
    );
};
export default BottomSheet;