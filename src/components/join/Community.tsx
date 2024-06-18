import CommunityItem from "./CommunityItems.tsx";
import {taskData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";
import {useDispatch, useSelector} from "react-redux";

const getImage = (type: string) => {
    if(type === "medium") return "EARN_MEDIUM";
    if(type === "twitter") return "EARN_TWITTER";
    if(type === "telegram") return "EARN_TELEGRAM";
    if(type === "website") return "EARN_WEBSITE";
}

const Community = () => {
    const task = useSelector((state: any) => state.task);
    return (
        <div className=''>
            <p className='join-title animate__animated animate__fadeIn animate__slow clear-both '>{task.selectedTitle}</p>
            <div className='boosters-list glass blur-round-border-bg animate__animated animate__fadeIn animate__slow' style={{
                '--angle': '135deg',
            } as React.CSSProperties}>
                {
                    task.selectedTask
                        .map((item: taskData) => {
                            return {
                                item,
                                key: item.id,
                                title: item.title,
                                subtitle: numify(50000),
                                image: getImage(item.social),
                                coin: true,
                                url: item.type_data,
                                type: item.type,
                            };
                        })
                        
                        .map(({item, key, title, subtitle, image, coin, url}) => (
                            <CommunityItem
                                item={item}
                                key={key}
                                title={title}
                                subtitle={subtitle}
                                image={image}
                                coin={coin}
                                url={url}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default Community;
