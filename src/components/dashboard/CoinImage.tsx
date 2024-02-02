import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {dump_increment, increment, setTapTimeout} from "../../store/score.ts";
import coin from '../../../public/skin/bitcoin.svg';
import React from "react";
import {loadCoin} from "../../store/loading.ts";
import {tapValue} from "../../helpers/score.helper.ts";

const CoinImage = () => {
    const imgH = React.useRef<HTMLDivElement>(null)
    const img = React.useRef<HTMLImageElement>(null)
    const user  = useSelector((state: any) => state.user);
    const score  = useSelector((state: any) => state.score);
    const dispatch = useDispatch();
    const TapTap = () => {
        clearTimeout(score.tapTimeout);
        setTimeout(() => {
            dispatch(increment(user.websocket))
        }, 500);
        WebApp.HapticFeedback.impactOccurred('medium')
        return true;
    }
    const onTapBegin = (e: any) => {
        if (['coin-step-mother', 'coin-mother', 'coin-ex'].includes(e.target.parentNode.id) && score.energy > 0) {
            TapTap();
            const item = img.current!;
            const container = document.querySelector(".coin-itself")!;
            const clientX = e.changedTouches[0].clientX;
            const clientY = e.changedTouches[0].clientY;

            let touch = document.createElement('div');
            let one = document.createElement('span');
            one.innerHTML = tapValue(score.tap_lvl).toString();
            one.style.position = 'absolute';
            touch.id = 'coin-step-mother'
            touch.className = 'floating-score';
            touch.appendChild(one);
            touch.style.top = `${clientY - (clientY / 2.7)}px`;
            touch.style.left = `${clientX - (clientX / 3.7)}px`;
            container.appendChild(touch);
            // Remove the element after 1 second.
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
            if (Math.floor(calcAngleX) === 0 && Math.floor(calcAngleY) === 0) {
                item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(.99)`;
            } else {
                item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg)`;
            }
            // And set its container's perspective.
            imgH.current!.style.perspective = `${halfWidth * 4}px`
            item.style.perspective = `${halfWidth * 4}px`
        }
    }
    const onTapEnds = () => {
        if (score.tapTimeout) {
            clearTimeout(score.tapTimeout);
            dispatch(setTapTimeout(null));
        }
        dispatch(setTapTimeout(setTimeout(() => {
            console.log('Mine dis Coin')
            dispatch(dump_increment(user.websocket))
        }, 2000)))
        const item = img.current!;
        item.style.transform = `rotateY(0deg) rotateX(0deg)`
    }
    return (score.energy > 0 && !score.coolDown) ? (
        <div className='coin-image-holder flex justify-around relative'>
            <div id='coin-mother' ref={imgH} onTouchStart={onTapBegin} onTouchEnd={onTapEnds}>
                <div id='coin-ex' className='coin-itself'></div>
                <img onSelect={() => false} ref={img} id='coinIcon' className='coin-image' src={coin} onLoad={() => dispatch(loadCoin())}
                     alt='DragonCoin'/>
            </div>
            <div></div>
        </div>
    ) : (<div className='coin-image-holder flex items-center justify-center' style={{height: '350px'}}>No Energy</div>);
};

export default CoinImage;
