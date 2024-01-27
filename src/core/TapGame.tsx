import CoinImage from "./dashboard/CoinImage.tsx";
import Score from "./dashboard/Score.tsx";
import League from "./dashboard/League.tsx";
import Energy from "./dashboard/Energy.tsx";
import DSTools from "./dashboard/DSTools.tsx";
import './../App.css'

const TapGame = () => {
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

export default TapGame;
