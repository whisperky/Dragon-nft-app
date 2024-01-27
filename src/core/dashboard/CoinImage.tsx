import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {decreaseEnergy, increment} from "../../store/score.ts";
import coin from '../../../public/skin/bitcoin.svg';
import React from "react";

const CoinImage = () => {
    const imgH = React.useRef<HTMLDivElement>(null)
    const img = React.useRef<HTMLImageElement>(null)
    const energy:number = useSelector((state: any) => state.score.energy);
    const dispatch = useDispatch();
    const TapTap = () => {
        setTimeout(() => {
            dispatch(increment())
        }, 500);
        dispatch(decreaseEnergy())
        WebApp.HapticFeedback.impactOccurred('medium')
        // const item = img.current!;
        // const e = imgH.current!;
        return true;
    }
    const onTapBegin = (e: any) => {
        if (['coin-step-mother', 'coin-mother', 'coin-ex'].includes(e.target.parentNode.id) && energy > 0) {
            TapTap();
            const item = img.current!;
            const container = document.querySelector(".coin-itself")!;
            const clientX = e.changedTouches[0].clientX;
            const clientY = e.changedTouches[0].clientY;

            let touch = document.createElement('div');
            let one = document.createElement('span');
            one.innerHTML = '1';
            one.style.position = 'absolute';
            touch.id = 'coin-step-mother'
            touch.className = 'floating-score';
            touch.appendChild(one);
            touch.style.top = `${clientY - (clientY / 2.7)}px`;
            touch.style.left = `${clientX - (clientX / 3.7)}px`;
            container.appendChild(touch);
            // Remove the element after 1 second.
            console.log(container.children.length)
            // if (container.children.length > 40) {
            //     let i = 0;
            //     while (i < container.children.length) {
            //         container.removeChild(container.children[i]);
            //         i++;
            //     }
            // }
            setTimeout(() => {
                // let i = 0;
                // while (i < container.children.length) {
                //     container.removeChild(container.children[i]);
                //     i++;
                // }
                container.removeChild(touch);
            }, 700);
            let x = Math.abs(item.getBoundingClientRect().x - clientX);
            // Get the y position relative to the button
            let y = Math.abs(item.getBoundingClientRect().y - clientY);
            // Calculate half the width and height
            let halfWidth = item.getBoundingClientRect().width / 2;
            let halfHeight = item.getBoundingClientRect().height / 2;

            // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
            // Changing these numbers will change the depth of the effect.
            let calcAngleX = ((x - halfWidth) / 16);
            let calcAngleY = ((y - halfHeight) / 14) * -1;

            // Set the items transform CSS property
            item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg)`;

            // And set its container's perspective.
            imgH.current!.style.perspective = `${halfWidth * 4}px`
            item.style.perspective = `${halfWidth * 4}px`
        }
    }
    const onTapEnds = () => {
        const item = img.current!;
        item.style.transform = `rotateY(0deg) rotateX(0deg)`
    }
    return (energy > 0) ? (
        <div className='coin-image-holder flex justify-around relative'>
            <div id='coin-mother' ref={imgH} onTouchStart={onTapBegin} onTouchEnd={onTapEnds} onTouchCancel={onTapEnds}>
                <div id='coin-ex' className='coin-itself'></div>
                <img onSelect={() => false} ref={img} id='coinIcon' className='coin-image' src={coin}
                     alt='DragonCoin'/>
            </div>
            <div></div>
        </div>
    ) : (<div className='coin-image-holder flex items-center justify-center'>No Energy</div>);
};

export default CoinImage;
