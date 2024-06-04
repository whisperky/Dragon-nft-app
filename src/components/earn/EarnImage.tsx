import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {
    addToTempValue,
    addToValue, decreaseValue,
    dump_increment,
    increment,
    resetTempValue,
    setTapTimeout
} from "../../store/score.ts";
import React from "react";
import {loadCoin} from "../../store/loading.ts";
import {tapValue} from "../../helpers/score.helper.ts";
import {ImageSliceType, ScoreSliceType, TurboSliceType, UserSliceType} from "../../types/store.ts";
import {incrementTurboTaps, resetTurboTaps, turboModeOff} from "../../store/turbo.ts";

const EarnImage = () => {
    const imgH = React.useRef<HTMLDivElement>(null)
    const img = React.useRef<HTMLImageElement>(null)
    const user: UserSliceType = useSelector((state: any) => state.user);
    const score: ScoreSliceType = useSelector((state: any) => state.score);
    const turbo: TurboSliceType = useSelector((state: any) => state.turbo);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const normal_image = image.activeSkins.img == undefined ? '' : image.activeSkins.img.normal.src;
    const turbo_image = image.activeSkins.img == undefined ? '' : image.activeSkins.img.turbo.src;
    const earn_image = image.activeSkins.img == undefined ? '' : image.activeSkins.img.earn.src;
    const dispatch = useDispatch();
    const TapTap = () => {
        if (turbo.turboMode) {
            dispatch(incrementTurboTaps());
            if (turbo.turbo.maxTaps <= turbo.taps && turbo.turboMode) {
                user.websocket.emit('mineTurbo', {
                    token: turbo.turbo.token,
                    taps: turbo.taps,
                })
                dispatch(resetTurboTaps())
                dispatch(turboModeOff())
                clearTimeout(turbo.timeout);
            } else {
                const val = tapValue(score.tap_lvl) * turbo.turbo.multiply;
                dispatch(addToValue(val));
            }
        } else {
            clearTimeout(score.tapTimeout);
            setTimeout(() => {
                dispatch(increment(user.websocket))
            }, 500);
            WebApp.HapticFeedback.impactOccurred('medium')
            return true;
        }
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
            one.innerHTML = turbo.turboMode ? (tapValue(score.tap_lvl) * turbo.turbo.multiply).toString() : (tapValue(score.tap_lvl)).toString();
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
        if (!turbo.turboMode) {
            dispatch(setTapTimeout(setTimeout(() => {
                console.log('Mine dis Coin')
                dispatch(dump_increment(user.websocket))
            }, 2000)))
        }
        const item = img.current!;
        item.style.transform = `rotateY(0deg) rotateX(0deg)`
    }
    
    return (score.energy > 0 && !score.coolDown) ? (
        <>
            <div className='coin-image-holder flex justify-center relative mx-10'>
                <div id='coin-mother' ref={imgH}>
                    <div id='coin-ex' className='coin-itself'></div>
                    <img onSelect={() => false} ref={img} id='coinIcon' className=''
                        src={earn_image} alt='DragonCoin'/>
                </div>
                
                <div></div>
                
            </div>
            <p className='earn-title animate__animated animate__fadeIn animate__slow clear-both'>Dragon Earn</p>
            <p className="earn-subtitle">Full Guide</p>
        </>

    ) : (<div className='coin-image-holder flex justify-center relative mx-10'>
        <div id='coin-mother glitch-container' ref={imgH}>
            <div id='coin-ex' className='coin-itself'></div>
            <img ref={img} id='coinIcon' className='coin-image grayscale-image glitch-animation' src={normal_image}
                 alt='DragonCoin'/>
        </div>

        <div></div>
    </div>);
};

export default EarnImage;
