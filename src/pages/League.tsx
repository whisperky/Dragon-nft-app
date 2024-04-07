import LeagueHeader from "../components/league/LeagueHeader.tsx";
import '../league.css';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import {ImageSliceType, LeagueSliceType, UserSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {loadLeague, useTemp} from "../store/league.ts";
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
        const no = leagueToNumber(leagueName(league.userLeague.preset))
        if (league.leagueTempData.find((x) => x.no === no) == undefined) {
            dispatch(loadLeague());
            user.websocket.emit('getLeague', {
                no: no,
                type: 'miner',
            })
        } else {
            dispatch(useTemp(no));
        }
    }, [0]);
    return image.isLeagueDone && league.haveLoadAtLeastOnce ? (
        <div>
            <LeagueHeader/>
        </div>
    ) : <LeagueSkeleton/>;
};

export default League;
