import {useDispatch, useSelector} from "react-redux";
import {energyValue, randomRange, rechargeValue, tapValue} from "../../helpers/score.helper.ts";
import {useEffect} from "react";
import {increaseEnergy, resetCoolDown, setEnergyTimeout} from "../../store/score.ts";

const Energy = () => {
    const score = useSelector((state: any) => state.score);
    const percentage = (score.energy/ energyValue(score.energy_lvl)) * 100;
    const dispatch = useDispatch();
    useEffect(() => {
        let tempEnergy = score.energy;
        if (score.energyTimeout !== null) {
            clearTimeout(score.energyTimeout);
            dispatch(setEnergyTimeout(null))
            dispatch(setEnergyTimeout(
                setInterval(() => {
                    console.log(`Add Energy : ${score.coolDown} --- ${score.energy}`)
                    dispatch(increaseEnergy())
                    if (tempEnergy < energyValue(score.energy_lvl)) {
                        const energy_to_be = tempEnergy + rechargeValue(score.recharge_lvl);
                        tempEnergy = energy_to_be > energyValue(score.energy_lvl) ? energyValue(score.energy_lvl) : energy_to_be;
                    }
                    if (score.coolDown && (tempEnergy > randomRange(tapValue(score.tap_lvl), tapValue(score.tap_lvl) + 7))) {
                        console.log("Reset Cool Down")
                        dispatch(resetCoolDown())
                    }
                }, 1000)
            ))
        } else {
            dispatch(setEnergyTimeout(
                setInterval(() => {
                    console.log(`Add Energy : ${score.coolDown}`)
                    dispatch(increaseEnergy())
                    if (score.coolDown && (score.energy > randomRange(tapValue(score.tap_lvl), tapValue(score.tap_lvl) + 7))) {
                        console.log("Reset Cool Down")
                        dispatch(resetCoolDown())
                    }
                }, 1000)
            ))
        }
    }, [score.coolDown])
    return (
        <div className='flex items-center justify-between animate__animated animate__fadeIn' style={{gap: '10px'}}>
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
