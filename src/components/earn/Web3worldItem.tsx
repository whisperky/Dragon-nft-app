import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, MyImageTypes, MySkinImageTypes, PurchaseSliceType} from "../../types/store.ts";
import {showToast} from "../../helpers/helper.ts";
import {useNavigate} from "react-router-dom";
import { numify } from "../../helpers/score.helper.ts";
import { setSelectedTasks, setTotalEarn } from "../../store/task.ts";
import { useEffect } from "react";

const Web3worldItem = ({
                       image,
                       title,
                       coin,
                       item,
                   }: {
    title: string,
    subtitle?: string,
    image?: string,
    coin?: boolean,
    item: any,
    type: String
}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const purchase: PurchaseSliceType = useSelector((state: any) => state.purchase);
    const task = useSelector((state: any) => state.task);
    const user = useSelector((state: any) => state.user);

    const images: ImageSliceType = useSelector((state: any) => state.image);
    const COIN_IMG = images.core.find((img: any) => img.name == 'COIN_TOOL');

    let imgHelp: MyImageTypes & MySkinImageTypes = [...images.booster, ...images.skin].find((img: any) => img.name == image) as any;
    let img = imgHelp?.img;

    const clickHandler = (id, title) => {
        const _tasksByEarn = task.list.filter(_task => _task.earn_id === id)
        if(!_tasksByEarn.length) {
            return showToast(purchase.toast, 'There is no tasks.', 'error')
        }
        dispatch(setSelectedTasks({tasks: _tasksByEarn, title: title}))
        dispatch(setTotalEarn(item.reward))
        navigate('join')
    }
   
    return (
        <div className='b-item glass-hover my-3' style={{opacity: 1}}
             onClick={() => clickHandler(item.id, title)}>
            <div className='flex items-center'>
                {img != undefined ? <img className='b-item-image' src={img.src}/> : <></>}
                <div className='b-item-desc'>
                    <p className='b-item-title flex items-center'>{title}</p>
                        <div className='b-item-pricing'>
                            <div className='b-item-price'>
                                {coin && COIN_IMG ? <img src={COIN_IMG?.img.src} alt='coin'/> : null}
                                {parseInt(item.reward) > 150000 ? <span style={{
                                    color: 'white',
                                    opacity: 1
                                }}>up to 150,000</span> : <span style={{
                                    color: 'white',
                                    opacity: 1
                                }}> + {numify(item.reward)}</span>}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Web3worldItem;
