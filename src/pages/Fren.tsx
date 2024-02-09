import {useNavigate} from "react-router-dom";
import coin from '../../public/icon/main/small-coin.svg';
import WebApp from "@twa-dev/sdk";
import '../fren.css';
import arrow from "../../public/icon/defaults/open-arrow.svg";
import toy from "../../public/icon/main/toy.svg";
// import Friend from "../components/fren/Friend.tsx";


const Fren = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();

    return (
        <div className='fren-zone-container'>
            <p className='fren-title'>Fren Zone</p>
            <div className='fren-info'>
                <div className='flex items-center'>
                    <div className='fren-earned'>
                        <div>+2000</div> <img src={coin} alt='coin'/>
                    </div>
                    <div className='fren-divider'></div>
                    <div className='fren-earn-info'>
                        📣 Top 30 <span className='text-glass'>leaders</span>
                    </div>
                </div>
                <img className='fren-opener-arrow opacity-less mr-1' src={arrow} alt='opener'/>
            </div>
            <p className='fren-list-title'>Frens List</p>
            <div className='fren-list'>
                {/*<Friend />*/}
                <div className='no-fren-con'>
                    <img src={toy} alt='toy'/>
                    <p className='fren-text-muted'>No Frens yet</p>
                </div>
            </div>
            <div className='invite-fren-btn-con'>
                <button className='invite-fren-btn' onClick={() => WebApp.openLink(`https://t.me/${WebApp.initDataUnsafe.receiver?.username}?start=fren`)}>Invite a Fren</button>
            </div>
        </div>
    );
};

export default Fren;
