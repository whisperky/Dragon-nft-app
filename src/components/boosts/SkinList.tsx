// import {useDispatch, useSelector} from "react-redux";
// import Flickity from "react-flickity-component";

import BoostItem from "./BoostItem.tsx";
import {useSelector} from "react-redux";
import {skinData} from "../../types/data.ts";
import {numify} from "../../helpers/score.helper.ts";
import {ScoreSliceType} from "../../types/store.ts";

const SkinList = () => {
    // const score  = useSelector((state: any) => state.score);
    // const dispatch = useDispatch();
    // const flickityOptions = {
    //     contain: true,
    //     prevNextButtons: false,
    //     pageDots: false,
    // };
    const skins = useSelector((state:any) => state.skin);
    const score: ScoreSliceType = useSelector((state: any) => state.score);

    return (
        <div className=''>
            <p className='boost-title'>Buy Skins</p>
            {/*<Flickity*/}
            {/*    className={"skin-container"} // default ''*/}
            {/*    elementType={"div"} // default 'div'*/}
            {/*    options={flickityOptions} // takes flickity options {}*/}
            {/*    disableImagesLoaded={false} // default false*/}
            {/*    reloadOnUpdate*/}
            {/*    static*/}
            {/*>*/}
                <div className={'skin-item'}>
                    <div className='boosters-list glass'>
                        {
                            skins.list.map((skin: skinData) => {
                                return <BoostItem haveEnough={score.value >= skin.price} item={skin} key={skin.id} title={skin.name} subtitle={numify(skin.price)} image={skin.image} coin={true} subtitleColor={"gold"}  trailing='opener'/>
                            })
                        }
                        {/*<BoostItem title='Basic' image={defaualtCoin} trailing='enabled'/>*/}
                        {/*<BoostItem title='Diamond' subtitle='Diamond league exclusive' subtitleColor='gold' image={bitCoin} locked={true} />*/}
                        {/*<BoostItem title='Diamond' subtitle='You own it' subtitleColor='grey' image={voteCoin} trailing='disabled' />*/}
                        {/*<BoostItem title='Diamond' subtitle='500,000' subtitleColor='gold' image={jadeCoin} coin={true} trailing='opener' />*/}
                    </div>
                </div>

            {/*</Flickity>*/}
        </div>
    );
};
export default SkinList;

/*
<div className={'skin-item'}>
                    <div className='boosters-list glass'>
                        <div className='b-item glass-hover'>
                            <div className='flex items-center'>
                                <img className='b-item-image' src={dragon}/>
                                <div className='b-item-desc'>
                                    <p className='text-glass'>Multitap</p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <img src={coin}/> <span>512,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='b-item-arrow' src={arrow}/>
                        </div>
                        <div className='b-item glass-hover mt-3'>
                            <div className='flex items-center'>
                                <img className='b-item-image' src={dragon}/>
                                <div className='b-item-desc'>
                                    <p className='text-glass'>Multitap</p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <img src={coin}/> <span>512,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='b-item-arrow' src={arrow}/>
                        </div>
                        <div className='b-item glass-hover mt-3'>
                            <div className='flex items-center'>
                                <img className='b-item-image' src={dragon}/>
                                <div className='b-item-desc'>
                                    <p className='text-glass'>Multitap</p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <img src={coin}/> <span>512,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='b-item-arrow' src={arrow}/>
                        </div>
                        <div className='b-item glass-hover mt-3'>
                            <div className='flex items-center'>
                                <img className='b-item-image' src={dragon}/>
                                <div className='b-item-desc'>
                                    <p className='text-glass'>Multitap</p>
                                    <div className='b-item-pricing'>
                                        <div className='b-item-price'>
                                            <img src={coin}/> <span>512,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className='b-item-arrow' src={arrow}/>
                        </div>
                    </div>
                </div>
* */