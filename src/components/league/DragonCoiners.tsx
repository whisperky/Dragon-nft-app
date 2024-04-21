import {GameSliceType, ImageSliceType} from "../../types/store.ts";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";

const DragonCoiners = () => {
    const navigate = useNavigate();
    const game: GameSliceType = useSelector((state: any) => state.game);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const OPEN_IMG = image.optional.find((img: any) => img.name === 'OPEN_ARROW');
    const day = (new Date()).getDay();
    let sun = [1, 0, 3]
    let mon = [6, 10, 8]
    let tue = [13, 2, 9]
    let wed = [4, 3, 1]
    let thu = [10, 1, 5]
    let fri = [7, 11, 12]
    let sat = [2, 4, 14]

    const coinerImages = image.coiners;
    const use = day == 0 ? sun : day == 1 ? mon : day == 2 ? tue : day == 3 ? wed : day == 4 ? thu : day == 5 ? fri : day == 6 ? sat : sun;
    const coinOne = coinerImages[use[0]]?.img.src;
    const coinTwo = coinerImages[use[1]]?.img.src;
    const coinThree = coinerImages[use[2]]?.img.src;
    const isAdmin = (WebApp?.initDataUnsafe?.user?.id ?? '').toString() == '353575758';
    const handleClick = () => {
        if (isAdmin)
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
                <span>{BigInt(game.totalPlayers).toLocaleString()} Dragoncoiners</span>
            </div>
            {isAdmin ?
                <div className='dc-opener'>
                    <span>Stats</span>{OPEN_IMG ? <img src={OPEN_IMG?.img.src} alt='opener'/> : null}
                </div> : <></>}
        </div>
    );
};

export default DragonCoiners;
