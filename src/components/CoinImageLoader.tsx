import {LoadingSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import BTC_IMAGE from "*.png";
import BTC_OPEN_IMAGE from "*.png";
import DRAGON_ICON_IMAGE from "*.png";
import DRAGON_ICON_OPEN_IMAGE from "*.png";
import JADE_IMAGE from "*.png";
import JADE_OPEN_IMAGE from "*.png";
import PIN_IMAGE from "*.png";
import PIN_OPEN_IMAGE from "*.png";
import {addCoinLoadedImg} from "../store/loading.ts";

const CoinImageLoader = (coin: 'BASIC' | 'BITCOIN' | 'JADE_COIN' | 'VOTE_PEDRO') => {
    const load: LoadingSliceType = useSelector((state: any) => state.loading);
    const dispatch = useDispatch();
    const loadImages = [
        {preset: 'BITCOIN', src: BTC_IMAGE, type: 'normal'},
        {preset: 'BITCOIN', src: BTC_OPEN_IMAGE, type: 'turbo'},
        {preset: 'BASIC', src: DRAGON_ICON_IMAGE, type: 'normal'},
        {preset: 'BASIC', src: DRAGON_ICON_OPEN_IMAGE, type: 'turbo'},
        {preset: 'JADE_COIN', src: JADE_IMAGE, type: 'normal'},
        {preset: 'JADE_COIN', src: JADE_OPEN_IMAGE, type: 'turbo'},
        {preset: 'VOTE_PEDRO', src: PIN_IMAGE, type: 'normal'},
        {preset: 'VOTE_PEDRO', src: PIN_OPEN_IMAGE, type: 'turbo'},
    ];
    const loadedImageHandler = (src: string) => {
        console.log(`${src} Loaded`);
        dispatch(addCoinLoadedImg(src));
    }
    return load.coreLoaded ?
        <div style={{display: "none"}}>
            {loadImages.map((img, index) => {
                if (img.preset === coin) {
                    return (
                        <div key={index}>
                            <img src={img.src} alt={img.src} onLoad={() => loadedImageHandler(img.src)}/>
                        </div>
                    )
                }
            })}
        </div>
        : <></>;
}

export default CoinImageLoader;