import {useSelector} from "react-redux";
import React from "react";
import {ImageSliceType} from "../../types/store.ts";

const EarnImage = () => {
    const imgH = React.useRef<HTMLDivElement>(null)
    const img = React.useRef<HTMLImageElement>(null)
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const normal_image = image.activeSkins.img == undefined ? '' : image.activeSkins.img.normal.src;

    const earn = useSelector((state: any) => state.earn);

    return (earn.haveData) ? (
        <>
            <div className='coin-image-holder flex justify-center relative mx-10'>
                <div id='coin-mother' ref={imgH}>
                    <div id='coin-ex' className='coin-itself'></div>
                    <img onSelect={() => false} ref={img} id='coinIcon' className='earn-image'
                        src={normal_image} alt='DragonCoin'/>
                </div>
                
                <div></div>
                
            </div>
            <p className='earn-title animate__animated animate__fadeIn animate__slow clear-both'>Dragon Earn</p>
            <p className="earn-subtitle">Full Guide</p>
        </>

    ) : null ;
};

export default EarnImage;
