import Sheet from 'react-modal-sheet';
import {useDispatch, useSelector} from "react-redux";
import {hideBotBottomSheet, hideBottomSheet} from "../store/game.ts";
import {useRef} from 'react';

import {
    useOverlay,
    useModal,
    OverlayProvider,
    FocusScope,
    useDialog,
} from 'react-aria';
import {UserData} from "../types/data.ts";
import {numify} from "../helpers/score.helper.ts";
import {GameSliceType, ImageSliceType} from "../types/store.ts";
import {showToast} from "../helpers/helper.ts";

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
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const CLOSE_ICON = image.core.find((i) => i.name === 'CLOSE_ICON');
    const COIN_IMG = image.core.find((i) => i.name === 'COIN_ICON');
    const AUTO_EARN_IMG = image.core.find((i) => i.name === 'AUTO_EARN_BOT');

    useModal();
    const onPurchaseHandler = () => {
        dispatch(hideBotBottomSheet())
        showToast('claiming', 'Claiming', 'loading')
        websocket.emit('claimBotEarn');
    }
    // In real world usage this would be a separate React component
    const customHeader = (
        <div>
            <button className='bottom-sheet-close-btn' onClick={() => dispatch(hideBotBottomSheet())}>
                {CLOSE_ICON ? <img src={CLOSE_ICON?.img.src} alt='X'/> : null}
            </button>
        </div>
    );

    return (
        <>
            <Sheet.Container
                className='bs-modal-container blur-round-border-bg' 
                style={{
                    '--angle': '125deg',
                } as React.CSSProperties}
                ref={containerRef}
                {...overlay.overlayProps as any}
                {...dialog.dialogProps as any}
            >
                <Sheet.Header>{customHeader}</Sheet.Header>
                <Sheet.Content>
                    <div className="bs-container items-stretch px-6">
                        <img className='earn-user mx-auto' src={AUTO_EARN_IMG?.img?.src} alt='Auto earn bot' />
                        <div className='bot-bs-title'><p>+{numify(game.botEarn)}</p> {COIN_IMG ?
                            <img src={COIN_IMG?.img.src} alt='coin'/> : null}
                        </div>
                        <span className='bot-bs-subtitle'>Earned by Auto Tap bot for you</span>
                        <div className='bs-inner-box blur-round-border-bg my-6 items-center justify-items-center' style={{
                            '--opacity': 0,
                            '--blur': 0,
                            '--angle': '170deg',
                        } as React.CSSProperties}>
                            <div>
                                <p className='icon-autotap'></p>
                                <div className='bs-inner-desc'>
                                    <p>Auto Tap</p>
                                    <p>if not played for 1 hour</p>
                                </div>
                            </div>
                            <div>
                                <p className='icon-works'></p>
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