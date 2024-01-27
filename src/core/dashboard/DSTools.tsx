import toy from '../../../public/icon/toy.svg';
import coin from '../../../public/icon/small-coin.svg';
import dragon from '../../../public/icon/dragon.svg';

const DSTools = () => {
    return (
        <div className='ds-tools'>
            <div className='ds-tool-box'>
                <img src={toy} alt='toy'/>
                <p>Frens</p>
            </div>
            <div className='ds-tool-box'>
                <img src={coin} alt='coin'/>
                <p>Frens</p>
            </div>
            <div className='ds-tool-box'>
                <img src={dragon} alt='drogon'/>
                <p>Frens</p>
            </div>
        </div>
    );
};

export default DSTools;
