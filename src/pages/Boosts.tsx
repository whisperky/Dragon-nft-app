import Score from "../components/dashboard/Score.tsx";
import '../App.css'
import DailyBoosters from "../components/boosts/DailyBoosters.tsx";
import BoosterList from "../components/boosts/BoosterList.tsx";
import WebApp from "@twa-dev/sdk";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    return (
        <div className='boosts'>
            <div className='add-pad flex flex-col items-center'>
                <p className='text-muted py-2'>Your balance</p>
                <Score />
            </div>
            <DailyBoosters />
            <BoosterList />
        </div>
    );
};


export default Dashboard;
