import Sheet from 'react-modal-sheet';
import {useDispatch, useSelector} from "react-redux";
import {hideBotBottomSheet, hideBottomSheet} from "../store/game.ts";
import {useRef} from 'react';
import coin from '../../public/icon/main/small-coin.svg';
import close from '../../public/icon/defaults/close.svg';

import {
    useOverlay,
    useModal,
    OverlayProvider,
    FocusScope,
    useDialog,
} from 'react-aria';
import {UserData} from "../types/data.ts";
import {numify} from "../helpers/score.helper.ts";
import toast from "react-hot-toast";
import {GameSliceType} from "../types/store.ts";

const BotBottomSheet = () => {
    const game: GameSliceType = useSelector((state: any) => state.game);
    const dispatch = useDispatch();

    return (
        <div>
            <Sheet rootId='bottom-sheet'
                   isOpen={game.botBottomSheet}
                   onClose={() => dispatch(hideBotBottomSheet())}
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
    const user: UserData = useSelector((state: any) => state.user.data);
    const game: GameSliceType = useSelector((state: any) => state.game);
    const websocket = useSelector((state: any) => state.user.websocket);
    const purchase = useSelector((state: any) => state.purchase);
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const dialog = useDialog({}, containerRef);
    const overlay = useOverlay(
        {onClose: () => dispatch(hideBottomSheet()), isOpen: game.bottomSheet, isDismissable: true},
        containerRef
    );
    useModal();
    const onPurchaseHandler = () => {
        dispatch(hideBotBottomSheet())
        toast.loading(`Claiming`, {
            id: 'claiming',
        });
        websocket.emit('claimBotEarn');
    }
    // In real world usage this would be a separate React component
    const customHeader = (
        <div>
            <button className='bottom-sheet-close-btn' onClick={() => dispatch(hideBotBottomSheet())}><img src={close}
                                                                                                           alt='X'/>
            </button>
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
                        <div style={{fontSize: '7rem'}}>🤖</div>
                        <div className='bot-bs-title'><p>+{numify(game.botEarn)}</p> <img src={coin} alt='coin'/></div>
                        <span className='bot-bs-subtitle'>Earned by Auto Tap bot for you</span>
                        <div className='bs-inner-box glass'>
                            <div>
                                <p>🦾</p>
                                <div className='bs-inner-desc'>
                                    <p>Auto Tap</p>
                                    <p>if not played for 1 hour</p>
                                </div>
                            </div>
                            <div>
                                <p>⏳</p>
                                <div className='bs-inner-desc'>
                                    <p>Works for</p>
                                    <p>12 hours</p>
                                </div>
                            </div>
                        </div>
                        <button className='bs-button' onClick={onPurchaseHandler}>Thanks</button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop/>
        </>
    );
};
export default BotBottomSheet;