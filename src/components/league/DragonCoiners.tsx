import openerImg from '../../../public/icon/defaults/open-arrow.svg';
import image from '../../../public/icon/main/small-coin.svg';

const DragonCoiners = () => {
    return (
        <div className='dragonCoiners-container'>
            <div className='dc-label'>
                <div className='dc-img-container'>
                    <img className='dc-img' src={image} alt='sc-image'/>
                    <img className='dc-img' src={image} alt='sc-image'/>
                    <img className='dc-img' src={image} alt='sc-image'/>
                </div>
                <span>9,910,999 Dragoncoiners</span>
            </div>
            <div className='dc-opener'><span>Stats</span><img src={openerImg} alt='opener' style={{height: '14px'}}/>
            </div>
        </div>
    );
};

export default DragonCoiners;
