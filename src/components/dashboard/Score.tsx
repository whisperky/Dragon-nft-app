import {useSelector} from "react-redux";
import {AnimatedCounter} from "react-animated-counter";
import {ImageSliceType} from "../../types/store.ts";

const Score = () => {
    const score = useSelector((state: any) => state.score.value);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const COIN_IMG = image.core.find((img) => img.name === 'COIN_TOOL');
    return (
        <div className="flex justify-around items-center animate__animated  animate__fadeIn animate__slow mb-2">
            <div className='score-holder flex justify-between items-center'>
                {COIN_IMG ? <img className='mr-2' src={COIN_IMG?.img.src} alt='DragonCoin'/> : null}
                <div className='font-extrabold'>
                    <AnimatedCounter
                        value={parseInt(score)}
                        color="white"
                        fontSize="40px"
                        incrementColor='white'
                        decrementColor='white'
                        includeDecimals={false}
                        includeCommas={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Score;
