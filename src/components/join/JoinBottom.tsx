import Sheet from 'react-modal-sheet';
import {useDispatch, useSelector} from "react-redux";
import {useRef} from 'react';

import {
    useOverlay,
    useModal,
    OverlayProvider,
    FocusScope,
    useDialog,
} from 'react-aria';
import {numify} from "../../helpers/score.helper.ts";
import {EarnSliceType, GameSliceType, ImageSliceType} from "../../types/store.ts";
import { setBottom } from '../../store/earn.ts';

const JoinBottom = () => {
    const earn: EarnSliceType = useSelector((state: any) => state.earn);
    const dispatch = useDispatch();

    return (
        <div>
            <Sheet rootId='bottom-sheet'
                    isOpen={earn.bottomSheet}
                    onClose={() => {
                        dispatch(setBottom(false))
                    }}
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
    const earn: EarnSliceType = useSelector((state: any) => state.earn);

    const dispatch = useDispatch();
    
    const containerRef = useRef(null);
    const dialog = useDialog({}, containerRef);
    const overlay = useOverlay(
        {onClose: () => dispatch(setBottom(false))},
        containerRef
    );

    const COIN_IMG = image.core.find((i) => i.name === 'COIN_TOOL');
    const CLOSE_IMG = image.optional.find((i) => i.name === 'CLOSE_ICON');

    useModal();
    const onPurchaseHandler = () => {
        dispatch(setBottom(false))
    }
    // In real world usage this would be a separate React component
    const customHeader = (
        <div>
            <button className='bottom-sheet-close-btn' onClick={() => dispatch(setBottom(false))}>
                {CLOSE_IMG ? <img src={CLOSE_IMG?.img.src} alt='X'/> : null}
            </button>
        </div>
    );
       
    return (
        <>
            <Sheet.Container
                className='sheet-body bs-modal-container blur-round-border-bg'
                style={{
                    '--angle': '125deg',
                } as React.CSSProperties}
                // ref={containerRef}
                {...overlay.overlayProps as any}
                {...dialog.dialogProps as any}
            >
                <Sheet.Header>{customHeader}</Sheet.Header>
                <Sheet.Content>
                    <div className="bs-container items-stretch px-6 py-10">
                        <img className='bs-img mx-auto ' src={'http://localhost:5173/icon/earn/earn_check.png'}/>
                        <div className='bs-title pt-6'>Congrates</div>
                        <span className='bs-subtitle pt-2'>you have completed the task</span>
                        {/*<span className='bs-over-subtitle'>{item.}</span>*/}
                        <div className='bs-pricing pt-4'>
                            <div className='bs-price'>
                                {COIN_IMG ? <img src={COIN_IMG?.img.src} alt='coin'/> : null}
                                <span>{numify(earn.totalEarn)}</span>
                            </div>
                            
                        </div>
                        <button className='bs-button my-4' onClick={onPurchaseHandler}>{numify(earn.totalEarn)} DragonCoins</button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </>
    )
};
export default JoinBottom;