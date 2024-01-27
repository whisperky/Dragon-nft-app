import logo from "/public/icon/small-coin.svg";
import {useSelector} from "react-redux";
import {AnimatedCounter} from "react-animated-counter";

const Score = () => {
    const score = useSelector((state: any) => state.score.value)
    return (
        <div className="flex justify-around items-center">
            <div className='score-holder flex justify-between items-center'>
                <img className='mr-2' src={logo} alt='DragonCoin'/>
                <p className='font-extrabold'>
                    <AnimatedCounter
                        value={score}
                        color="white"
                        fontSize="40px"
                        incrementColor='white'
                        decrementColor='white'
                        includeDecimals={false}
                        includeCommas={true}
                    />
                </p>
            </div>
        </div>
    );
};

export default Score;
