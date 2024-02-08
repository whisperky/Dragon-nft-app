import LeagueHeader from "../components/league/LeagueHeader.tsx";
import '../league.css';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";

const League = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    
    return (
        <div>
            <LeagueHeader />
        </div>
    );
};

export default League;
