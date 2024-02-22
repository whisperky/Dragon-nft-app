import {useNavigate} from "react-router-dom";
import coin from '../../public/icon/main/small-coin.svg';
import WebApp from "@twa-dev/sdk";
import '../fren.css';
// import arrow from "../../public/icon/defaults/open-arrow.svg";
import toy from "../../public/icon/main/toy.svg";
import {useSelector} from "react-redux";
import {numShort} from "../helpers/score.helper.ts";
import Friend from "../components/fren/Friend.tsx";
import {frenData} from "../types/data.ts";
import FrenSkeleton from "../skeleton/FrenSkeleton.tsx";


const Fren = () => {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user);
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    const fren = useSelector((state: any) => state.fren);
    const earned = fren.list.reduce((acc: number, fren: any) => acc + fren.earned, 0);
    if (fren.haveData === false) user.websocket.emit('getFrenData');
    return fren.haveData ? (
        <div className='fren-zone-container'>
            <p className='fren-title'>Fren Zone</p>
            <div className='fren-info'>
                <div className='flex items-center'>
                    <div className='fren-earned'>
                        <div>+{numShort(earned)}</div> <img src={coin} alt='coin'/>
                    </div>
                    <div className='fren-divider'></div>
                    <div className='fren-earn-info'>
                        <span className='fren-emoji'>📣</span> Top 30 <span className='text-glass'>leaders</span>
                    </div>
                </div>
                {/*<img className='fren-opener-arrow opacity-less mr-1' src={arrow} alt='opener'/>*/}
            </div>
            <p className='fren-list-title'>Frens List</p>
            <div className='fren-list'>
                {
                    fren.list.length > 0 ?
                     fren.list.map((fren: frenData) => {
                        return (
                            <Friend fName={fren.iuser?.fName} lName={fren.iuser?.lName} username={fren.iuser?.username ?? null} balance={fren.iuser?.balance ?? 0} earned={fren.earned} is_premium={fren.is_premium} />
                        )
                    }) : (<div className='no-fren-con'>
                            <img src={toy} alt='toy'/>
                            <p className='fren-text-muted'>No Frens yet</p>
                        </div>)
                }
            </div>
            <div className='invite-fren-btn-con'>
                <button className='invite-fren-btn' onClick={() => {
                    WebApp.openTelegramLink(`https://t.me/${import.meta.env.VITE_REACT_APP_BOT_USERNAME}?start=fren`);
                    WebApp.close();
                }}>Invite a Fren</button>
            </div>
        </div>
    ) : (<FrenSkeleton />);
};

export default Fren;
