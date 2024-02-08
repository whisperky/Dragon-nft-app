import leftArrow from '../../../public/icon/defaults/left-arrow.svg';
import rightArrow from '../../../public/icon/defaults/right-arrow.svg';
import leagueLogo from '../../../public/icon/rank/bronze.svg';
import bronzeBg from '../../../public/background/bronze.svg';
import DragonCoiners from "./DragonCoiners.tsx";
import DragonUser from "../DragonUser.tsx";

const LeagueHeader = () => {
    return (
        <div className='league-header'>
            <img className='league-header-bg' src={bronzeBg}/>
            <DragonCoiners/>
            <div className='flex justify-between items-center'>
                <img className='lh-img' src={leftArrow}/>
                <img className='lh-rank-img' src={leagueLogo}/>
                <img className='lh-img' src={rightArrow}/>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <div className='lh-text text-center'>
                    <p>Bronze League</p>
                    {/*<p>2,862,981 / 10M</p>*/}
                    <p>From 0 Dragoncoin</p>
                </div>
            </div>
            <div className='league-bar mt-5'>
                <span className='league-bar-slider' style={{width: '50%'}}></span>
            </div>

            <div className='mt-5'>
                <div className='league-tabs'>
                    <input type='radio' id='league-miner-tab' name='tabs' checked/>
                    <label htmlFor='league-miner-tab' className='league-tab'>Miners</label>
                    <input type='radio' id='league-squad-tab' name='tabs'/>
                    <label htmlFor='league-squad-tab' className='league-tab'>Squads</label>
                    <span className='league-tab-slider'></span>
                </div>
            </div>
            <div className='mt-5'>
                <div className='league-lines'>
                    <input type='radio' id='league-day-line' name='lines' checked/>
                    <label htmlFor='league-day-line' className='league-line'>Day</label>
                    <input type='radio' id='league-week-line' name='lines'/>
                    <label htmlFor='league-week-line' className='league-line'>Week</label>
                    <span className='league-line-slider'></span>
                </div>
            </div>

            <DragonUser name='Mikiyas Lemlemu' rank={3} coin='100,000'/>
        </div>
    );
};

export default LeagueHeader;
