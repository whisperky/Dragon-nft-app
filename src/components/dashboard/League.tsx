import logo from '../../../public/icon/rank/small/bronze.svg';
import {useNavigate} from "react-router-dom";

const League = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-around mb-10'>
            <div className='league-squad-holder'>
                <div className='db-league' onClick={() => navigate('league')}>
                    <img className='league-image' src={logo} alt='DragonCoin'/>
                    <p>Bronze</p>
                </div>
                <div className='col-divider'></div>
                <div className='db-squad'>
                    <div>Join Squad</div> <div>⟶</div>
                </div>
            </div>
        </div>
    );
};

export default League;
