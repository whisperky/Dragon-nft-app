import toy from '../../../public/icon/main/toy.svg';
import coin from '../../../public/icon/main/small-coin.svg';
import dragon from '../../../public/icon/main/dragon.svg';
import {useNavigate} from "react-router-dom";

const DSTools = () => {
    const navigate = useNavigate();

    const toFrens = () => {
        navigate('fren')
    }
    const toEarn = () => {
        alert('Under Construction')
    }
    const toBoosts = () => {
        navigate(`boosts`);
    }

    return (
        <div className='ds-tools'>
            <div className='ds-tool-box' onClick={toFrens}>
                <img src={toy} alt='toy'/>
                <p>Frens</p>
            </div>
            <div className='ds-tool-box' onClick={toEarn}>
                <img src={coin} alt='coin'/>
                <p>Earn</p>
            </div>
            <div className='ds-tool-box' onClick={toBoosts}>
                <img src={dragon} alt='drogon'/>
                <p>Boosts</p>
            </div>
        </div>
    );
};

export default DSTools;
