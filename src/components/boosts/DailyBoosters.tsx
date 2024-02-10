import {useDispatch, useSelector} from "react-redux";
import {dailyBoosterData, userDailyBoost} from "../../types/data.ts";
import getImage from "../../helpers/image.helper.ts";
import {showBottomSheet} from "../../store/game.ts";

const DailyBoosters = () => {
    const boost = useSelector((state: any) => state.boost);
    const dispatch = useDispatch();
    const dailyBoosts: dailyBoosterData[] = boost.dailyBoosts;
    const leftDailyBoosts: userDailyBoost[] = boost.leftDailyBoosts;
    const buyBooster = async (id: string) => {
        const item = dailyBoosts.filter((b: any) => id === b.id)[0];
        dispatch(showBottomSheet({item: item, type: 'daily_booster'}))
    };
    return (
        <div className=''>
            <p className='boost-title'>Free daily boosters</p>
            <div className='daily-boosters glass'>
                {
                    dailyBoosts.map((boost) => {
                        const leftB = boost.limit - ((leftDailyBoosts.filter((b: any) => b.id === boost.id)[0]).used);
                        return (
                            <div className='single-booster glass-hover' key={boost.id}
                                 onClick={() => buyBooster(boost.id)}>
                                <div>
                                    <img src={getImage(boost.image)}/>
                                </div>
                                <div>
                                    <p>{leftB}<span className='daily-boost-limit'>/{boost.limit}</span></p>
                                    <p>{boost.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DailyBoosters;
