import {useSelector} from "react-redux";
import {ImageSliceType, MyImageTypes, MySkinImageTypes} from "../../types/store.ts";
import {MouseEventHandler} from "react";

const CommunityItem = ({
                       title,
                       subtitle,
                       subtitleColor,
                       coin,
                       locked,
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
    const isBot = item.image == 'AUTO_TAP_BOT';
    const user = useSelector((state: any) => state.user);

    const images: ImageSliceType = useSelector((state: any) => state.image);
    const COIN_IMG = images.core.find((img: any) => img.name == 'COIN_TOOL');
    const LOCKED_IMG = images.optional.find((img: any) => img.name == 'LOCKED_ICON');

    let imgHelp: MyImageTypes & MySkinImageTypes = [...images.booster, ...images.skin].find((img: any) => img.name == image) as any;
    let img = imgHelp?.img;

    const clickHandler = () => {
        user.websocket.emit('getFinishTask', {user: user.data.id, task: item.id});
        window.open(item.type_data, '_blank')
    }
    const replaceAll = (subtitle: string)=> {
        let _subtitle = subtitle;
        while(_subtitle.indexOf(",") !== -1) {
            _subtitle = _subtitle.replace(",", '') 
        }
        return _subtitle
    }

    return (
        <div className='b-item glass-hover my-3' style={{opacity: disabled && !isBot ? .3 : 1}}
             onClick={clickHandler}>
            <div className='flex items-center'>
                {img != undefined ? <img className='b-item-image' src={img.src}/> : <></>}
                <div className='b-item-desc'>
                    <p className='b-item-title flex items-center'>{title} {isBot && isMax ? <span className='ml-3 b-item-badge glass'>on <span className='ml-1' style={{fontSize: '8px'}}>🟢</span></span> : ''}</p>
                        <div className='b-item-pricing'>
                            <div className='b-item-price'>
                                {coin && COIN_IMG ? <img src={COIN_IMG?.img.src} alt='coin'/> : null}
                                {locked && LOCKED_IMG ? <img src={LOCKED_IMG?.img.src} alt='locked'/> : null}
                                {parseInt(replaceAll(subtitle)) > 150000 ? <span style={{
                                    color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                    opacity: subtitleColor == 'grey' ? .5 : 1
                                }}>up to 150,000</span> : <span style={{
                                    color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                    opacity: subtitleColor == 'grey' ? .5 : 1
                                }}> + {subtitle}</span>}
                            </div>
                         </div>
                </div>
            </div>

        </div>
    );
};

export default CommunityItem;