import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {ImageSliceType} from "../../types/store.ts";
import {showToast} from "../../helpers/helper.ts";
import {useEffect} from "react";

const DSTools = () => {
    const purchase = useSelector((state: any) => state.purchase);
    const images: ImageSliceType = useSelector((state: any) => state.image);
    const navigate = useNavigate();
    const toFrens = () => {
        navigate('/fren')
    }
    const toEarn = () => {
        showToast(purchase.toast, 'Coming Soon')
    }
    const toApps = () => {
        navigate(`/apps`);
    }
    const toBoosts = () => {
        navigate(`/boosts`);
    }// console.log(images.core)
    const TOY_TOOL = images.core.find((img) => img.name === 'TOY_TOOL')?.img;
    const COIN_TOOL = images.core.find((img) => img.name === 'COIN_TOOL')?.img;
    const APPS_TOOL = images.core.find((img) => img.name === 'APPS_TOOL')?.img;
    const DRAGON_TOOL = images.core.find((img) => img.name === 'DRAGON_TOOL')?.img;

    return (
        <div className='ds-tools blur-round-border-bg'>
            <div className='ds-tool-box' onClick={toFrens}>
                <img src={TOY_TOOL?.src} alt='toy'/>
                <p>Frens</p>
            </div>
            <div className='ds-tool-box' onClick={toEarn}>
                <img src={COIN_TOOL?.src} alt='coin'/>
                <p>Earn</p>
            </div>
            <div className='ds-tool-box' onClick={toApps}>
                <img src={APPS_TOOL?.src} alt='apps'/>
                <p>Apps</p>
            </div>
            <div className='ds-tool-box' onClick={toBoosts}>
                <img src={DRAGON_TOOL?.src} alt='dragon'/>
                <p>Boosts</p>
            </div>
        </div>
    );
};

export default DSTools;
