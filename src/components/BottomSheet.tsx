import Sheet from 'react-modal-sheet';
import {useDispatch, useSelector} from "react-redux";
import {hideBottomSheet} from "../store/game.ts";
import { useRef } from 'react';
import coin from '../../public/icon/main/small-coin.svg';
import close from '../../public/icon/defaults/close.svg';
import energy from '../../public/icon/boosts/battery.svg';
import {
    useOverlay,
    useModal,
    OverlayProvider,
    FocusScope,
    useDialog,
} from 'react-aria';

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
    const game = useSelector((state: any) => state.game);
    const dispatch = useDispatch();

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
            <button className='bottom-sheet-close-btn' onClick={() => dispatch(hideBottomSheet())}><img src={close}/></button>
        </div>
    );

    return (
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
                        <img className='bs-img' src={energy}/>
                        <div className='bs-title'>Multitap</div>
                        <span className='bs-subtitle'>Increase amount of Notcoin you can earn per one tap.</span>
                        <span className='bs-over-subtitle'>+1 per tap for each level</span>
                        <div className='bs-pricing'>
                            <div className='bs-price'>
                                <img src={coin}/> <span>521,000</span>
                            </div>
                            <span>/ Level 9</span>
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