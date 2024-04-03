import openerImg from '../../../public/icon/defaults/open-arrow.svg';
import {GameSliceType, ImageSliceType} from "../../types/store.ts";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const DragonCoiners = () => {
    const navigate = useNavigate();
    const game: GameSliceType = useSelector((state: any) => state.game);
    const image: ImageSliceType = useSelector((state: any) => state.image);

    const day = (new Date()).getDay();
    let sun = [1,0,3]
    let mon = [6,10,8]
    let tue = [13,2,9]
    let wed = [4,3,1]
    let thu = [10,1,5]
    let fri = [7,11,12]
    let sat = [2,4,14]

    const coinerImages = image.coiners;
    const use = day == 0 ? sun : day == 1 ? mon : day == 2 ? tue : day == 3 ? wed : day == 4 ? thu : day == 5 ? fri : day == 6 ? sat : sun;
    const coinOne = coinerImages[use[0]]?.img.src;
    const coinTwo = coinerImages[use[1]]?.img.src;
    const coinThree = coinerImages[use[2]]?.img.src;
    const handleClick = () => {
        navigate('/stats')
    }
    return (
        <div className='dragonCoiners-container animate__animated animate__fadeIn animate__slow' onClick={handleClick}>
            <div className='dc-label'>
                <div className='dc-img-container'>
                    <img className='dc-img' src={coinOne} alt='sc-image'/>
                    <img className='dc-img' src={coinTwo} alt='sc-image'/>
                    <img className='dc-img' src={coinThree} alt='sc-image'/>
                </div>
                <span>{BigInt( game.totalPlayers).toLocaleString()} Dragoncoiners</span>
            </div>
            <div className='dc-opener'><span>Stats</span><img src={openerImg} alt='opener'/>
            </div>
        </div>
    );
};

export default DragonCoiners;
