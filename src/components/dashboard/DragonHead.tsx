import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, ScoreSliceType, TurboSliceType} from "../../types/store.ts";
import {activateTurbo, hideTurbo, turnOnTurbo, useTurbo} from "../../store/turbo.ts";

const DragonHead = () => {
    const turbo: TurboSliceType = useSelector((state: any) => state.turbo);
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    const dispatch = useDispatch();

    useEffect(() => {
        if ((score.temp_value % 150 == 0 || score.temp_value == 0) && turbo.availableTurbos.length > 0) {
            dispatch(activateTurbo());
        }
    }, [score.temp_value]);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    return image.isCoreDone ? (
        <div className='dragon-head-con'>
            <img onLoad={() => dispatch(turnOnTurbo())}
                 onClick={() => turbo.availableTurbos.length > 0 ? dispatch(useTurbo(turbo.availableTurbos[0])) : null}
                 onAnimationEnd={() => dispatch(hideTurbo())} style={turbo.style} className='dragon-head'
                 src={image.core.find((x) => x.name === 'DRAGON_TOOL').img.src} alt='dragon-head'/>
        </div>
    ) : <></>;
};

export default DragonHead;