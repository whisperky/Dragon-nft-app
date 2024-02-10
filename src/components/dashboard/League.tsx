import logo from '../../../public/icon/rank/small/bronze.svg';
// import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";

const League = () => {
    // const navigate = useNavigate();
    const purchase = useSelector((state: any) => state.purchase);
    return (
        <div className='flex justify-around mb-10'>
            <div className='league-squad-holder'>
                <div className='db-league' onClick={() => toast('Coming soon', {id: purchase.toast})}>
                    <img className='league-image' src={logo} alt='DragonCoin'/>
                    <p>Bronze</p>
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
