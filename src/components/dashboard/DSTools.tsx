import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {ImageSliceType} from "../../types/store.ts";
import {showToast} from "../../helpers/helper.ts";

const DSTools = () => {
    const purchase = useSelector((state: any) => state.purchase);
    const images: ImageSliceType = useSelector((state: any) => state.image);
    const navigate = useNavigate();
    const toFrens = () => {
        navigate('/fren')
    }
    const toEarn = () => {
        showToast(purchase.toast, 'Coming soon')
    }
    const toApps = () => {
        navigate(`/apps`);
    }
    const toBoosts = () => {
        navigate(`/boosts`);
    }
    const checker = images.core.filter((img) => img.name === 'TOY_TOOL' || img.name === 'COIN_TOOL' || img.name == 'DRAGON_TOOL' || img.name === 'APPS_TOOL')
    if (checker.length >= 4) {
        // console.log(images.core)
        const TOY_TOOL = images.core.find((img) => img.name === 'TOY_TOOL').img;
        const COIN_TOOL = images.core.find((img) => img.name === 'COIN_TOOL').img;
        const APPS_TOOL = images.core.find((img) => img.name === 'APPS_TOOL').img;
        const DRAGON_TOOL = images.core.find((img) => img.name === 'DRAGON_TOOL').img;
        return (
            <div className='ds-tools animate__animated animate__fadeIn !z-[10] blur-round-border-bg'>
                <div className='ds-tool-box' onClick={toFrens}>
                    <img src={TOY_TOOL.src} alt='toy'/>
                    <p>Frens</p>
                </div>
                <div className='ds-tool-box' onClick={toEarn}>
                    <img src={COIN_TOOL.src} alt='coin'/>
                    <p>Earn</p>
                </div>
                <div className='ds-tool-box' onClick={toApps}>
                    <img src={APPS_TOOL.src} alt='apps'/>
                    <p>Apps</p>
                </div>
                <div className='ds-tool-box' onClick={toBoosts}>
                    <img src={DRAGON_TOOL.src} alt='drogon'/>
                    <p>Boosts</p>
                </div>
            </div>
        );
    } else {
        return <div className='ds-tools'></div>;
    }
};

export default DSTools;
