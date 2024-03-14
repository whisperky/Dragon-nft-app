import BTC_IMAGE from '../assets/skin/BTC.png';
import BTC_OPEN_IMAGE from '../assets/skin/BTC_open.png';
import DRAGON_ICON_IMAGE from '../assets/skin/dragon-icon.png';
import DRAGON_ICON_OPEN_IMAGE from '../assets/skin/dragon-icon_open.png';
import JADE_IMAGE from '../assets/skin/Jade.png';
import JADE_OPEN_IMAGE from '../assets/skin/Jade_open.png';
import PIN_IMAGE from '../assets/skin/Pin.png';
import PIN_OPEN_IMAGE from '../assets/skin/Pin_open.png';
import {useDispatch, useSelector} from "react-redux";
import {LoadingSliceType} from "../types/store.ts";
import {addAllLoadedImg, addCoinLoadedImg} from "../store/loading.ts";

const ImageLoader = () => {
    const imagesLength = 8;
    const load: LoadingSliceType = useSelector((state: any) => state.loading);
    const dispatch = useDispatch();
    const loadImages = [
        {src: BTC_IMAGE},
        {src: BTC_OPEN_IMAGE},
        {src: DRAGON_ICON_IMAGE},
        {src: DRAGON_ICON_OPEN_IMAGE},
        {src: JADE_IMAGE},
        {src: JADE_OPEN_IMAGE},
        {src: PIN_IMAGE},
        {src: PIN_OPEN_IMAGE},
    ];
    const loadedImageHandler = (src: string) => {
        console.log(`${src} Loaded`);
        dispatch(addAllLoadedImg(src));
    }
    return load.coreLoaded ?
        <div style={{display: "none"}}>
            {loadImages.map((img, index) => {
                return (
                    <div key={index}>
                        <img src={img.src} alt={img.src} onLoad={() => loadedImageHandler(img.src)}/>
                    </div>
                )
            })}
        </div>
        : <></>;
}
export default ImageLoader;