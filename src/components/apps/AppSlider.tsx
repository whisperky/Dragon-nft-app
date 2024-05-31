import { motion } from 'framer-motion';
import { Page } from "./Page.tsx";
import { useNavigate } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

const images = [
    '../public/background/dashboard.jpg',
    '../public/background/dragon-war.jpg'
];

const AppSlider = () => {
    const navigate = useNavigate();

    return (
        <div className="slider-container">
            <p className='apps-text-title text-left mb-5 text-3xl font-bold'>Apps</p>
            <Page
				effect="coverflow"
				style={{
					height: 500,
					width: 350,
					overflow: "visible",
				}}
			>
				{images.map((src, index) => (
                    <motion.div className="slide" key={index} onClick={() => navigate('/dashboard')}>
                        <img src={src} alt={`Slide ${index}`} />
                    </motion.div>
                ))}
			</Page>
        </div>
    );
};

export default AppSlider;
