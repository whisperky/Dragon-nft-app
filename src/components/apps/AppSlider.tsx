import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import { useSpringCarousel } from 'react-spring-carousel'
import React from 'react';

const slideItems = [{
    id: 'app',
    img: '/background/dashboard.jpg'
},{
    id: 'dragon-war',
    img: '/background/dragon-war.jpg'
}]
const AppSlider = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = React.useState(slideItems[0].id)
    const { carouselFragment, useListenToCustomEvent, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        itemsPerSlide: 1, 
        initialStartingPosition: 'center',
        gutter: 0,
        items: slideItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`slide w-full transition-all duration-700 ${currentSlide === item.id
                            ? 'z-10'
                            : 'scale-90'
                            }`}>
                        <img src={item.img} alt={item.id} className='w-full h-full mx-auto object-cover' onClick={() => navigate('/dashboard')} />
                    </div>
                )
            }
        })
    });
    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })
    return (
        <div className="slider-container w-full mb-8">
            <p className='apps-text-title text-left px-12 mb-6 text-3xl font-bold'>Apps</p>
            <div className="mx-auto w-9/12 relative">
                {carouselFragment}
            </div>
        </div>
    );
};

export default AppSlider;
