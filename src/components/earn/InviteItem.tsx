import {showBottomSheet} from "../../store/game.ts";
import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, MyImageTypes, MySkinImageTypes, PurchaseSliceType} from "../../types/store.ts";
import {MouseEventHandler} from "react";
import {showToast} from "../../helpers/helper.ts";

const InviteItem = ({
                       image,
                       title,
                       subtitleColor,
                       coin,
                   }: {
    title: string,
    subtitleColor?: 'gold' | 'grey',
    image?: string,
    coin?: boolean,
}) => {
    const dispatch = useDispatch();
    const purchase: PurchaseSliceType = useSelector((state: any) => state.purchase);
    const images: ImageSliceType = useSelector((state: any) => state.image);
    const COIN_IMG = images.core.find((img: any) => img.name == 'COIN_TOOL');
    let imgHelp: MyImageTypes & MySkinImageTypes = [...images.booster, ...images.skin].find((img: any) => img.name == image) as any;
    let img = imgHelp?.img;

    const clickHandler = () => {
        showToast(purchase.toast, 'Coming Soon.', 'error')
    }
    return (
        <div className='b-item glass-hover my-3' style={{opacity: 1}} onClick={clickHandler}>
            <div className='flex items-center'>
                {img != undefined ? <img className='item-image' src={img.src}/> : <></>}
                <div className='b-item-desc'>
                    <p className='b-item-title flex items-center'>
                        {title}
                    </p>
                    <div className='b-item-pricing'>
                        <div className='b-item-price'>
                            <span style={{
                                color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                opacity: subtitleColor == 'grey' ? .5 : 1,
                                paddingRight: '0.2rem'
                            }}>up to 100k </span>
                            {coin && COIN_IMG ? <img src={COIN_IMG?.img.src} alt='coin'/> : null}
                            <span style={{
                                color: subtitleColor == 'gold' ? '#FFD041' : 'white',
                                opacity: subtitleColor == 'grey' ? .5 : 1
                            }}>for fren</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InviteItem;
