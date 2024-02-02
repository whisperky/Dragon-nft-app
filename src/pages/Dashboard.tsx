import CoinImage from "../components/dashboard/CoinImage.tsx";
import Score from "../components/dashboard/Score.tsx";
import League from "../components/dashboard/League.tsx";
import Energy from "../components/dashboard/Energy.tsx";
import DSTools from "../components/dashboard/DSTools.tsx";
import '../App.css'
import WebApp from "@twa-dev/sdk";
import '../fixed_bg.css'
const Dashboard = () => {
    WebApp.BackButton.hide()
    return (
        <div className='dashboard'>
            <div className='add-pad'>
                <Score />
                <CoinImage />
                <League />
                <Energy />
            </div>
            <DSTools />
        </div>
    );
};


export default Dashboard;
