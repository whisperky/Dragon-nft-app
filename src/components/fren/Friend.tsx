import coin from "../../../public/icon/main/small-coin.svg";
import bronze from "../../../public/icon/rank/small/bronze.svg";
import premium from "../../../public/icon/tg_premium.svg";
import openerImg from "../../../public/icon/defaults/open-arrow.svg";

const Friend = () => {
    return (
        <div className='friend-container'>
            <div className='flex items-center'>
                <div className='friend-image'>BA</div>
                <div className='friend-info'>
                    <div className='friend-name'>Bamlak <img src={premium} alt='premium'/></div>
                    <div className='friend-subtitle'>
                        <div className='friend-league'><img src={bronze} alt='bronze'/> <span>Bronze</span></div>
                        <span>•</span>
                        <div className='friend-coin'><img src={coin} alt='coin'/> <span>1,295</span></div>
                    </div>
                </div>
            </div>
            <div className='friend-trailer-container'>
            <img className='friend-trailer-img' src={openerImg} alt='bronze'/>
            </div>
        </div>
    );
};

export default Friend;
