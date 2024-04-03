import openerImg from '../../../public/icon/defaults/open-arrow.svg';
import image from '../../../public/icon/main/small-coin.svg';
import {GameSliceType} from "../../types/store.ts";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const DragonCoiners = () => {
    const navigate = useNavigate();
    const game: GameSliceType = useSelector((state: any) => state.game);
    const handleClick = () => {
        navigate('/stats')
    }
    return (
        <div className='dragonCoiners-container animate__animated animate__fadeIn animate__slow' onClick={handleClick}>
            <div className='dc-label'>
                <div className='dc-img-container'>
                    <img className='dc-img' src={image} alt='sc-image'/>
                    <img className='dc-img' src={image} alt='sc-image'/>
                    <img className='dc-img' src={image} alt='sc-image'/>
                </div>
                <span>{BigInt( game.totalPlayers).toLocaleString()} Dragoncoiners</span>
            </div>
            <div className='dc-opener'><span>Stats</span><img src={openerImg} alt='opener'/>
            </div>
        </div>
    );
};

export default DragonCoiners;
