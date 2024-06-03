// import { useNavigate } from "react-router-dom";
// import Carousel from "react-spring-3d-carousel";
// import { config } from "react-spring";
// import WebApp from "@twa-dev/sdk";
// import React from 'react';
// const AppSlider = () => {
//     const navigate = useNavigate();
//     const [state, setState] = React.useState({
//         goToSlide: 0,
//         offsetRadius: 2,
//         showNavigation: false,
//         config: config.gentle
//     });
//
//     let slides = [{
//         key: 1,
//         content: <img src="/background/dashboard.jpg" alt="1" />
//     },{
//         key: 2,
//         content: <img src="/background/dragon-war.jpg" alt="2"/>
//     },{
//         key: 3,
//         content: <div className='w-[50%] h-full rounded-3xl bg-black bg-opacity-50'></div>
//     }].map((slide, index) => {
//         return { ...slide, onClick: () => navigate('/dashboard') };
//     });
//
//     let xDown = null;
//     let yDown = null;
//
//     const getTouches = (evt) => {
//         return (
//         evt.touches || evt.originalEvent.touches // browser API
//         ); // jQuery
//     };
//
//     const handleTouchStart = (evt) => {
//         const firstTouch = getTouches(evt)[0];
//         xDown = firstTouch.clientX;
//         yDown = firstTouch.clientY;
//     };
//
//     const handleTouchMove = (evt) => {
//         if (!xDown || !yDown) {
//         return;
//         }
//
//         let xUp = evt.touches[0].clientX;
//         let yUp = evt.touches[0].clientY;
//
//         let xDiff = xDown - xUp;
//         let yDiff = yDown - yUp;
//
//         if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         /*most significant*/
//         if (xDiff > 0) {
//             /* left swipe */
//             setState(prevState => ({ ...prevState, goToSlide: state.goToSlide + 1 }));
//         } else {
//             /* right swipe */
//             setState(prevState => ({ ...prevState, goToSlide: state.goToSlide - 1 }));
//         }
//         } else {
//         if (yDiff > 0) {
//             /* up swipe */
//         } else {
//             /* down swipe */
//         }
//         }
//         /* reset values */
//         xDown = null;
//         yDown = null;
//     };
//
//     return (
//         <div className="slider-container w-full mb-8">
//             <p className='apps-text-title text-left px-12 mb-6 text-3xl font-bold'>Apps</p>
//             <div className="mx-auto w-[150%] translate-x-[-17%] relative">
//                 <div
//                 className={`slide w-full h-[50vh]`}
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 >
//                     <Carousel
//                         slides={slides}
//                         goToSlide={state.goToSlide}
//                         offsetRadius={state.offsetRadius}
//                         showNavigation={state.showNavigation}
//                         animationConfig={state.config}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default AppSlider;
