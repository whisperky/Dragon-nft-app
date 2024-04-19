import LeagueHeader from "../components/league/LeagueHeader.tsx";
import '../league.css';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import {ImageSliceType, LeagueSliceType, UserSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {loadLeague, resetPageLCount, setLoadLeaguePage, setSquadTop, setUserTop, useTemp} from "../store/league.ts";
import LeagueSkeleton from "../skeleton/LeagueSkeleton.tsx";
import {leagueName, leagueToNumber} from "../helpers/helper.ts";

const League = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const league: LeagueSliceType = useSelector((state: any) => state.league);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    useEffect(() => {
        if (league.leagueTempData.find((x) => x.no === league.no && x.type === league.type) == undefined) {
            dispatch(loadLeague());
            user.websocket.emit('getLeague', {
                no: league.no,
                type: league.type,
            })
            dispatch(resetPageLCount());
        } else {
            dispatch(useTemp());
        }
        dispatch(setLoadLeaguePage(true));
    }, [0]);
    return league.loadLeaguePage && image.isLeagueDone && league.haveLoadAtLeastOnce ? (
        <div>
            <LeagueHeader/>
        </div>
    ) : <LeagueSkeleton/>;
};

export default League;
