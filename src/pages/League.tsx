import LeagueHeader from "../components/league/LeagueHeader.tsx";
import '../league.css';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import {ImageSliceType, LeagueSliceType, UserSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {loadLeague} from "../store/league.ts";
import LeagueSkeleton from "../skeleton/LeagueSkeleton.tsx";

const League = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const league: LeagueSliceType = useSelector((state: any) => state.league);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    useEffect(() => {
        dispatch(loadLeague());
        user.websocket.emit('getLeague', {
            no: league.no > 0 ? league.no : 1,
            type: 'miner',
        })
    }, [0]);
    return image.isLeagueDone ? (
        <div>
            <LeagueHeader />
        </div>
    ) : <LeagueSkeleton />;
};

export default League;
