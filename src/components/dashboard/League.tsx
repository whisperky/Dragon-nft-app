import logo from '../../../public/icon/rank/small/bronze.svg';
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, LeagueSliceType} from "../../types/store.ts";
import {capitalizeFirstLetter, leagueName, leagueToNumber} from "../../helpers/helper.ts";
import {setLeague, setLeagueNo} from "../../store/league.ts";

const League = () => {
    const navigate = useNavigate();
    const purchase = useSelector((state: any) => state.purchase);
    const league: LeagueSliceType = useSelector((state: any) => state.league);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const leagueLogo = image.league.find((x) => leagueName(x.name) == leagueName(league.userLeague.preset) ?? '')?.img.small.src;
    const dispatch = useDispatch();
    return (
        <div className='flex justify-around mb-10'>
            <div className='league-squad-holder animate__animated animate__fadeIn'>
                <div className='db-league' onClick={() => {
                    dispatch(setLeagueNo(leagueToNumber(leagueName(league.userLeague.preset))));
                    navigate('/league')
                }}>
                    {leagueLogo && <img className='league-image' src={leagueLogo} alt='DragonCoin'/>}
                    <p>{capitalizeFirstLetter(league.userLeague.name)}</p>
                </div>
                <div className='col-divider'></div>
                <div className='db-squad' onClick={() => toast('Coming soon', {id: purchase.toast})}>
                    <div>Join Squad</div> <div>⟶</div>
                </div>
            </div>
        </div>
    );
};

export default League;
