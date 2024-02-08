import {useDispatch, useSelector} from "react-redux";
import {dailyBoosterData, userDailyBoost} from "../../types/data.ts";
import getImage from "../../helpers/image.helper.ts";
import toast from "react-hot-toast";
import {setPurchaseItem, setToast} from "../../store/purchase.ts";

const DailyBoosters = () => {
    const boost = useSelector((state: any) => state.boost);
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const dailyBoosts: dailyBoosterData[] = boost.dailyBoosts;
    const leftDailyBoosts: userDailyBoost[] = boost.leftDailyBoosts;
    const buyBooster = async (id: string) => {
        const item = dailyBoosts.filter((b: any) => id === b.id)[0];
        toast.loading( `Buying ${item.name}`, {
            id: id,
            position: 'bottom-center',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
        dispatch(setToast(id));
        const leftBoost = item.limit - ((leftDailyBoosts.filter((b: any) => id === b.id)[0]).used);
        if (leftBoost <= 0) {
            toast.error('You have reached your limit', {
                id: id,
                position: 'bottom-center',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        } else {
            console.log(item.limit, " - ", ((leftDailyBoosts.filter((b: any) => id === b.id)[0]).used))
            console.log("Shiit")
            user.websocket.emit('buyDailyBoost', {
                type: 'daily',
                item: id,
            });
            dispatch(setPurchaseItem(id))
        }
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
