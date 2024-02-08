import Score from "../components/dashboard/Score.tsx";
import '../App.css'
import DailyBoosters from "../components/boosts/DailyBoosters.tsx";
import BoosterList from "../components/boosts/BoosterList.tsx";
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";
import SkinList from "../components/boosts/SkinList.tsx";
import {useSelector} from "react-redux";

const Boosts = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();

    const user = useSelector((state: any) => state.user);
    const boost = useSelector((state: any) => state.boost);
    if (boost.haveData === false) user.websocket.emit('getBoostData');
    return boost.haveData ? (
        <div className='boosts'>
            <div className='add-pad flex flex-col items-center'>
                <Score />
                <p className='text-muted py-2'>Your balance</p>
            </div>
            <DailyBoosters />
            <BoosterList />
            <SkinList />
        </div>
    ) : (
        <div className='flex items-center justify-center h-full'>
            <div className="loader"></div>
        </div>
    )
};


export default Boosts;
