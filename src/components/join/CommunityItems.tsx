import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, MyImageTypes, MySkinImageTypes} from "../../types/store.ts";
import {MouseEventHandler} from "react";
import { showToast } from "../../helpers/helper.ts";
import { setSelectedTasks } from "../../store/task.ts";
import WebApp from "@twa-dev/sdk";

const CommunityItem = ({
                       title,
                       subtitleColor,
                       disabled = false,
                       isMax = false,
                       item,
                       image
                   }: {
    title: string,
    subtitle?: string,
    subtitleColor?: 'gold' | 'grey',
    image?: string,
    coin?: boolean,
    locked?: boolean,
    level?: number,
    maxLevel?: number | null,
    disabled?: boolean,
    isMax?: boolean,
    trailing?: 'enabled' | 'disabled' | 'opener' | 'completed' | 'none',
    onTrailing?: MouseEventHandler<HTMLImageElement>
    item: any,
    url: String
}) => {
    const dispatch = useDispatch();
    const isBot = item.image == 'AUTO_TAP_BOT';
    const user = useSelector((state: any) => state.user);
    const task = useSelector((state: any) => state.task);

    const images: ImageSliceType = useSelector((state: any) => state.image);
    const purchase = useSelector((state: any) => state.purchase);
    // const LOCKED_IMG = images.optional.find((img: any) => img.name == 'LOCKED_ICON');

    
    let imgHelp: MyImageTypes & MySkinImageTypes = [...images.booster, ...images.skin].find((img: any) => img.name == image) as any;
    let img = imgHelp?.img;

    const clickHandler = () => {
        console.log(item.type_data)
        if(item.completed) {
            showToast(purchase.toast, 'This task is already completed.', 'error')
            return
        }
        
        let _tasks: any[] = []
        task.selectedTask.forEach(_task => {
            if(_task.id === item.id) {
                _tasks = [..._tasks, {..._task, completed: true}]
            }
            else _tasks = [..._tasks, _task]
        })
        dispatch(setSelectedTasks({tasks: _tasks}))
        user.websocket.emit('getFinishTask', {user: user.data.id, task: item.task_id});
        WebApp.openLink(item.type_data)
        
    }

    return (
        <div className='b-item glass-hover my-3' style={{opacity: disabled && !isBot ? .3 : 1}}
             onClick={clickHandler}>
            <div className='flex items-center'>
                {img != undefined ? <img className='b-item-image' src={img.src}/> : <></>}
                <div className='b-item-desc'>
                    <p className='b-item-title flex items-center'>{title}</p>
                        <div className='b-item-pricing'>
                            <div className='b-item-price'>
                                 <span style={{
                                    color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                    opacity: subtitleColor == 'grey' ? .5 : 1
                                }}>{item.completed ? "Task completed" : 'Task uncompleted'}</span>
                            </div>
                         </div>
                </div>
            </div>

        </div>
    );
};

export default CommunityItem;
