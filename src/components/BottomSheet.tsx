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
import {boosterData, skinData} from "../types/data.ts";
import getImage from "../helpers/image.helper.ts";
import {numify} from "../helpers/score.helper.ts";

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
    const game = useSelector((state: any) => state.game);
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
                                <img src={coin} alt='coin'/> <span>{numify(item.price)}</span>
                            </div>
                            { game.itemType == 'booster' && <span>/ Level {level}</span>}
                        </div>
                        <button className='bs-button'>Get</button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop/>
        </>
    );
};
export default BottomSheet;