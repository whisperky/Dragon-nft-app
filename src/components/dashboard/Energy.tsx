import {useSelector} from "react-redux";
import {energyValue} from "../../helpers/score.helper.ts";

const Energy = () => {
    const score = useSelector((state:any) => state.score);
    const percentage = (score.energy/ energyValue(score.energy_lvl)) * 100;

    return (
        <div className='flex items-center justify-between' style={{gap: '10px'}}>
            <div className="w-4/5">
                <div className='energy-bar'>
                <span className='energy-bar-slider' style={{width: percentage + '%'}}>
                    <span>
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8L5 0V6H9.5L4 13.5V8H0Z" fill="#FFD041"/>
                        </svg>
                    </span>
                </span>
                </div>
            </div>
            <div className='energy-label'><span>{score.energy}</span><span>/{energyValue(score.energy_lvl)}</span></div>
        </div>
    );
};

export default Energy;
