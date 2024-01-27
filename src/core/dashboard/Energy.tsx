import {useSelector} from "react-redux";
import {useEffect} from "react";

const Energy = () => {
    const energy = (useSelector((state:any) => state.score.energy) / 1000) * 100;
    useEffect(() => {}, [energy])
    return (
        <div className='energy-bar'>
                <span className='energy-bar-slider' style={{width: energy+'%'}}>
                    <span>
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8L5 0V6H9.5L4 13.5V8H0Z" fill="#FFD041"/>
                        </svg>
                    </span>
                </span>
        </div>
    );
};

export default Energy;
