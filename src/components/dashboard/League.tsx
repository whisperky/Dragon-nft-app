import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, LeagueSliceType, SquadSliceType} from "../../types/store.ts";
import {capitalizeFirstLetter, leagueName, leagueToNumber} from "../../helpers/helper.ts";
import {changeLeagueType, setLeague, setLeagueNo, setLoadLeaguePage} from "../../store/league.ts";
import {selectSquad} from "../../store/squad.ts";

const League = () => {
    const navigate = useNavigate();
    const purchase = useSelector((state: any) => state.purchase);
    const league: LeagueSliceType = useSelector((state: any) => state.league);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const squad: SquadSliceType = useSelector((state: any) => state.squad);
    const leagueLogo = image.league.find((x) => leagueName(x.name) == leagueName(league.userLeague.preset))?.img.small.src;
    const dispatch = useDispatch();
    return (
        <div className='flex justify-around league-container blur-round-border-bg mx-8 my-[5%]'>
            <div className='league-squad-holder animate__animated animate__fadeIn'>
                <div className='db-league' onClick={() => {
                    dispatch(setLoadLeaguePage(false))
                    dispatch(setLeagueNo(leagueToNumber(leagueName(league.userLeague.preset))));
                    dispatch(changeLeagueType('miner'));
                    navigate('/league')
                }}>
                    {leagueLogo && <img className='league-image' src={leagueLogo} alt='DragonCoin'/>}
                    <p>{capitalizeFirstLetter(league.userLeague.name)}</p>
                </div>
                <div className='col-divider'></div>
                {squad.userSquad == null ?
                    <div className='db-squad' onClick={() => navigate('/squad')}>
                        <div>Join Clan</div>
                        <span>⟶</span>
                    </div> : <div className='db-squad' onClick={() => {
                        dispatch(selectSquad(squad.userSquad));
                        navigate(`/squad-detail/${squad.userSquad.id}`)
                    }}>
                        <p>{squad.userSquad.name}</p>
                    </div>}
            </div>
        </div>
    );
};

export default League;
