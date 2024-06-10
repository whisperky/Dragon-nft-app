import {useNavigate} from "react-router-dom";
import Carousel from "react-spring-3d-carousel";
import {config} from "react-spring";
import WebApp from "@twa-dev/sdk";
import React from 'react';
import {ImageSliceType} from "../../types/store.ts";
import {useSelector} from "react-redux";
import {showToast} from "../../helpers/helper.ts";

const AppSlider = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle
    });
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const tapIMG = image.core.find((img) => img.name === 'DRAGON_TAP')?.img;
    const warImg = image.core.find((img) => img.name === 'DRAGON_WAR')?.img;
    const launchImg = image.core.find((img) => img.name === 'DRAGON_LAUNCHPADS')?.img;
    const mintImg = image.core.find((img) => img.name === 'DRAGON_MINT')?.img;
    const catchImg = image.core.find((img) => img.name === 'DRAGON_CATCH')?.img;

    let slides = [{
        key: 1,
        content: <div className='app-con '>
            <img className='app-image' src={tapIMG?.src} alt="1"/>
            <div className='app-name-con blur-round-border-bg'>
                <p>Dragon Tap</p>
                <p>Where it all began. Tap and Share with your friends to earn Dragoncoins. [WARNING: Highly
                    Addictive]</p>
            </div>
        </div>
    }, {
        key: 2,
        content: <div className='app-con '>
            <img className='app-image' src={warImg?.src} alt="1"/>
            <div className='app-name-con blur-round-border-bg'>
                <p>Dragon Pot (Coming Soon)</p>
                <p>Buy a ticket, throw as many coins in the Pot as you can, whoever gets the most wins all!</p>
            </div>
        </div>
    }, {
        key: 3,
        content: <div className='app-con '>
            <img className='app-image' src={mintImg?.src} alt="1"/>
            <div className='app-name-con blur-round-border-bg'>
                <p>Dragon Mint (Coming Soon)</p>
                <p>Mint your Dragoncoins into valuable Dragon NFT on the Ton Network, and trade them on GetGems!</p>
            </div>
        </div>
    }, {
        key: 4,
        content: <div className='app-con '>
            <img className='app-image' src={launchImg?.src} alt="1"/>
            <div className='app-name-con blur-round-border-bg'>
                <p>Dragon Launch (Coming Soon)</p>
                <p>Use your Dragoncoins to buy allocations to special launchpads, or buy a Dragon Pass to get them all!</p>
            </div>
        </div>
    },  {
        key: 5,
        content: <div className='app-con '>
            <img className='app-image' src={catchImg?.src} alt="1"/>
            <div className='app-name-con blur-round-border-bg'>
                <p>Dragon Play (Coming Soon)</p>
                <p>Play mini-games and earn Dragoncoins and other prizes!</p>
            </div>
        </div>
    }
    ].map((slide, index) => {
        switch (slide.key) {
            case 1:
                return {...slide, onClick: () => navigate('/dashboard')};
            default:
                return {...slide, onClick: () => showToast('dragon', 'Coming soon')};
        }
    });

    let xDown = null;
    let yDown = null;

    const getTouches = (evt) => {
        return (
            evt.touches || evt.originalEvent.touches // browser API
        ); // jQuery
    };

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                setState(prevState => ({...prevState, goToSlide: state.goToSlide + 1}));
            } else {
                /* right swipe */
                setState(prevState => ({...prevState, goToSlide: state.goToSlide - 1}));
            }
        } else {
            if (yDiff > 0) {
                /* up swipe */
            } else {
                /* down swipe */
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };

    return (
        <div className="slider-container w-full mb-8">
            <p className='apps-text-title text-left px-12 mb-10 text-3xl font-bold'>Apps</p>
            <div className="mx-auto w-[150%] translate-x-[-17%] relative">
                <div
                    className={`slide w-full h-[50vh]`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <Carousel
                        slides={slides}
                        goToSlide={state.goToSlide}
                        offsetRadius={state.offsetRadius}
                        showNavigation={state.showNavigation}
                        animationConfig={state.config}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppSlider;
