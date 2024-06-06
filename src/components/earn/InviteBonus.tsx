import InviteItem from "./InviteItem.tsx";
import {useSelector} from "react-redux";

const InviteBonus = () => {
    const earn = useSelector((state: any) => state.earn);
    return (
        <div className=''>
            <div className='boosters-list glass blur-round-border-bg animate__animated animate__fadeIn animate__slow' style={{
                '--angle': '135deg',
            } as React.CSSProperties}>
                {
                    earn.list
                        .map((item: any) => {
                                return {
                                    item,
                                    key: item.id,
                                    title: item.name,
                                    image: item.image,
                                    coin: true,
                                    type: item.task_category
                                };
                        })
                        .map(({key, title, image, coin, type}) => 
                            type === "specials" && <InviteItem
                                                        key={key}
                                                        title={title}
                                                        image={image}
                                                        coin={coin}
                                                    />
                        )
                }
            </div>
        </div>
    );
};

export default InviteBonus;
