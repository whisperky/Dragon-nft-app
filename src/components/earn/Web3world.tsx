import Web3worldItem from "./Web3worldItem.tsx";
import {useSelector} from "react-redux";

const Web3world = () => {
    const earn = useSelector((state: any) => state.earn);
    return (
        <div className=''>
            <p className='boost-title animate__animated animate__fadeIn animate__slow'>Dragon world</p>
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
                                type: item.task_category,
                            };
                        })
                        .map(({item, key, title, coin, image, type}) => 
                            type === "web3_world" && <Web3worldItem
                                                        item={item}
                                                        key={key}
                                                        title={title}
                                                        image={image}
                                                        coin={coin}
                                                        type={type}
                                                    />
                        )
                }
            </div>
        </div>
    );
};

export default Web3world;
