import BOOST_DRAGON from "../../public/icon/boosts/dragon.svg";
import BOOST_BATTREY from "../../public/icon/boosts/battery.svg";
import BOOST_ENERGY from "../../public/icon/boosts/energy.svg";
import BOOST_MULTITAP from "../../public/icon/boosts/multi-tap.svg";
import BOOST_RECHARGE from "../../public/icon/boosts/recharge-speed.svg";
import BOOST_TAPBOT from "../../public/icon/boosts/tap-bot.svg";

import BASIC from "../../public/icon/boosts/skin/defualt.svg";
import BITCOIN from "../../public/icon/boosts/skin/bitcoin.svg";
import VOTE_PEDRO from "../../public/icon/boosts/skin/vote.svg";
import JADE_COIN from "../../public/icon/boosts/skin/jade-coin.svg";

import BTC_IMAGE from "../../public/skin/BTC.png";
import BTC_OPEN_IMAGE from "../../public/skin/BTC_open.png";
import DRAGON_ICON_IMAGE from "../../public/skin/dragon-icon.png";
import DRAGON_ICON_OPEN_IMAGE from "../../public/skin/dragon-icon_open.png";
import JADE_IMAGE from "../../public/skin/Jade.png";
import JADE_OPEN_IMAGE from "../../public/skin/Jade_open.png";
import PIN_IMAGE from "../../public/skin/Pin.png";
import PIN_OPEN_IMAGE from "../../public/skin/Pin_open.png";

import TOY_TOOL_IMG from '../../public/icon/main/toy.svg';
import COIN_TOOL_IMG from '../../public/icon/main/small-coin.svg';
import COIN_SPACE_IMG from '../../public/icon/main/coin-space.svg';
import DRAGON_TOOL_IMG from '../../public/icon/main/dragon.svg';

import {addCoinLoadedImg} from "../store/loading.ts";
import {store} from "../store/store.ts";
import {SkinImageTypes} from "../types/data.ts";
import {
    addActiveSkinsImages,
    addBoosterImages,
    addCoreImages,
    addDailyBoosterImages,
    addOthersImages,
    addSkinImages, setActiveSkinsDone, setCoreDone, setDailyBoosterDone
} from "../store/image.ts";

// const getImage = (handler: string) => {
//     switch (handler.toUpperCase()) {
//         // RECHARGING_SPEED
//         // MULTI_TAP
//         // AUTO_TAP_BOT
//         // ENERGY_LIMIT
//         // GOLD
//         // DIAMOND
//         // PLATINUM
//         // SILVER
//         // BRONZE
//         // JADE_COIN
//         // BITCOIN
//         // VOTE_PEDRO
//         // BASIC
//         case 'RECHARGING_SPEED':
//             return BOOST_RECHARGE;
//         case 'MULTI_TAP':
//             return BOOST_MULTITAP;
//         case 'AUTO_TAP_BOT':
//             return BOOST_TAPBOT;
//         case 'ENERGY_LIMIT':
//             return BOOST_BATTREY;
//         case 'ENERGY':
//             return BOOST_ENERGY;
//         case 'BASIC':
//             return BASIC;
//         case 'BITCOIN':
//             return BITCOIN;
//         case 'VOTE_PEDRO':
//             return VOTE_PEDRO;
//         case 'JADE_COIN':
//             return JADE_COIN;
//         default:
//             return BOOST_DRAGON;
//     }
// }
const loadCoinImages = (coin: 'BASIC' | 'BITCOIN' | 'JADE_COIN' | 'VOTE_PEDRO') => {
    const loadImages = [
        {name: 'BITCOIN_NORMAL', preset: 'BITCOIN', src: BTC_IMAGE, type: 'normal'},
        {name: 'BITCOIN_TURBO', preset: 'BITCOIN', src: BTC_OPEN_IMAGE, type: 'turbo'},
        {name: 'BASIC_NORMAL', preset: 'BASIC', src: DRAGON_ICON_IMAGE, type: 'normal'},
        {name: 'BASIC_TURBO', preset: 'BASIC', src: DRAGON_ICON_OPEN_IMAGE, type: 'turbo'},
        {name: 'JADE_COIN_NORMAL', preset: 'JADE_COIN', src: JADE_IMAGE, type: 'normal'},
        {name: 'JADE_COIN_TURBO', preset: 'JADE_COIN', src: JADE_OPEN_IMAGE, type: 'turbo'},
        {name: 'VOTE_PEDRO_NORMAL', preset: 'VOTE_PEDRO', src: PIN_IMAGE, type: 'normal'},
        {name: 'VOTE_PEDRO_TURBO', preset: 'VOTE_PEDRO', src: PIN_OPEN_IMAGE, type: 'turbo'},
    ];
    const images = loadImages.filter((img) => img.preset === coin);
    images.forEach((img) => {
        const im = new Image()
        im.onload = () => addCoinLoadedImg(img.name)
        im.src = img.src
    })
}
export const loadBoostImages = () => {
    const loadImages = [
        {name: 'RECHARGING_SPEED', src: [{type: 'normal', img: BOOST_RECHARGE}], type: 'booster'},
        {name: 'MULTI_TAP', src: [{type: 'normal', img: BOOST_MULTITAP}], type: 'booster'},
        {name: 'AUTO_TAP_BOT', src: [{type: 'normal', img: BOOST_TAPBOT}], type: 'booster'},
        {name: 'ENERGY_LIMIT', src: [{type: 'normal', img: BOOST_BATTREY}], type: 'booster'},
        {name: 'ENERGY', src: [{type: 'normal', img: BOOST_ENERGY}], type: 'dailyBooster'},
        {name: 'TURBO', src: [{type: 'normal', img: BOOST_DRAGON}], type: 'dailyBooster'},

        {
            name: 'BASIC',
            src: [{type: 'normal', img: DRAGON_ICON_IMAGE}, {type: 'turbo', img: DRAGON_ICON_OPEN_IMAGE}],
            type: 'skin'
        },
        {
            name: 'BITCOIN',
            src: [{type: 'normal', img: BTC_IMAGE}, {type: 'turbo', img: BTC_OPEN_IMAGE}],
            type: 'skin'
        },
        {
            name: 'VOTE_PEDRO',
            src: [{type: 'normal', img: PIN_IMAGE}, {type: 'turbo', img: PIN_OPEN_IMAGE}],
            type: 'skin'
        },
        {
            name: 'JADE_COIN',
            src: [{type: 'normal', img: JADE_IMAGE}, {type: 'turbo', img: JADE_OPEN_IMAGE}],
            type: 'skin'
        },
        {name: 'COIN_SPACE', src: [{type: 'normal', img: COIN_SPACE_IMG}], type: 'others'},

    ];
    return loadImages.forEach((img) => {
        img.src.forEach((image: { type: 'normal' | 'turbo', img: any }) => {
            const im = new Image()
            im.src = image.img
            im.onload = () => {
                if (img.type == 'booster') {
                    store.dispatch(addBoosterImages({
                        name: img.name,
                        img: im
                    }))
                }
                else if (img.type == 'dailyBooster') {
                    store.dispatch(addDailyBoosterImages({
                        name: img.name,
                        img: im
                    }))
                    if (store.getState().image.dailyBooster.filter((x) => x.name === 'TURBO' || x.name === 'ENERGY').length >= 2) {
                        store.dispatch(setDailyBoosterDone(true))
                    }
                }
                else if (img.type == 'skin') {
                    store.dispatch(addSkinImages({
                        name: img.name as SkinImageTypes,
                        img: im,
                        type: image.type
                    }))
                }
                else if (img.type == 'booster') {
                    store.dispatch(addOthersImages({
                        name: img.name,
                        img: im
                    }))
                }
            }
        });
    })
}
export const loadCoinSkinImages = () => {
    const loadImages = [
        {name: 'BITCOIN_NORMAL', preset: 'BITCOIN', src: BTC_IMAGE, type: 'normal'},
        {name: 'BITCOIN_TURBO', preset: 'BITCOIN', src: BTC_OPEN_IMAGE, type: 'turbo'},
        {name: 'BASIC_NORMAL', preset: 'BASIC', src: DRAGON_ICON_IMAGE, type: 'normal'},
        {name: 'BASIC_TURBO', preset: 'BASIC', src: DRAGON_ICON_OPEN_IMAGE, type: 'turbo'},
        {name: 'JADE_COIN_NORMAL', preset: 'JADE_COIN', src: JADE_IMAGE, type: 'normal'},
        {name: 'JADE_COIN_TURBO', preset: 'JADE_COIN', src: JADE_OPEN_IMAGE, type: 'turbo'},
        {name: 'VOTE_PEDRO_NORMAL', preset: 'VOTE_PEDRO', src: PIN_IMAGE, type: 'normal'},
        {name: 'VOTE_PEDRO_TURBO', preset: 'VOTE_PEDRO', src: PIN_OPEN_IMAGE, type: 'turbo'},
    ];
    switch (store.getState().user.data.skin) {
        case 'BASIC':
            const normal_image = new Image();
            normal_image.src = DRAGON_ICON_IMAGE;
            const turbo_image = new Image();
            normal_image.onload = () => {
                turbo_image.src = DRAGON_ICON_OPEN_IMAGE;
            }
            turbo_image.onload = () => {
                store.dispatch(addActiveSkinsImages({
                    name: loadImages.find((x) => x.preset === store.getState().user.data.skin).name,
                    img: {
                        normal: normal_image,
                        turbo: turbo_image
                    }
                }))
                store.dispatch(setActiveSkinsDone(true))
            }
            break;
        case 'BITCOIN':
            const normal_image1 = new Image();
            normal_image1.src = BTC_IMAGE;
            const turbo_image1 = new Image();
            normal_image1.onload = () => {
                turbo_image1.src = BTC_OPEN_IMAGE;
            }
            turbo_image1.onload = () => {
                store.dispatch(addActiveSkinsImages({
                    name: loadImages.find((x) => x.preset === store.getState().user.data.skin).name,
                    img: {
                        normal: normal_image1,
                        turbo: turbo_image1
                    }
                }))
                store.dispatch(setActiveSkinsDone(true))
            }
            break;
        case 'VOTE_PEDRO':
            const normal_image2 = new Image();
            normal_image2.src = PIN_IMAGE;
            const turbo_image2 = new Image();
            normal_image2.onload = () => {
                turbo_image2.src = PIN_OPEN_IMAGE;
            }
            turbo_image2.onload = () => {
                store.dispatch(addActiveSkinsImages({
                    name: loadImages.find((x) => x.preset === store.getState().user.data.skin).name,
                    img: {
                        normal: normal_image2,
                        turbo: turbo_image2
                    }
                }))
                store.dispatch(setActiveSkinsDone(true))
            }
            break;
        case 'JADE_COIN':
            const normal_image3 = new Image();
            normal_image3.src = JADE_IMAGE;
            const turbo_image3 = new Image();
            normal_image3.onload = () => {
                turbo_image3.src = JADE_OPEN_IMAGE;
            }
            turbo_image3.onload = () => {
                store.dispatch(addActiveSkinsImages({
                    name: loadImages.find((x) => x.preset === store.getState().user.data.skin).name,
                    img: {
                        normal: normal_image3,
                        turbo: turbo_image3
                    }
                }))
                store.dispatch(setActiveSkinsDone(true))
            }
            break;
        default:
            alert(store.getState().user.data.skin)
            const normal_image4 = new Image();
            normal_image4.src = DRAGON_ICON_IMAGE;
            const turbo_image4 = new Image();
            normal_image4.onload = () => {
                turbo_image4.src = DRAGON_ICON_OPEN_IMAGE;
            }
            turbo_image4.onload = () => {
                store.dispatch(addActiveSkinsImages({
                    name: loadImages.find((x) => x.preset === store.getState().user.data.skin).name,
                    img: {
                        normal: normal_image4,
                        turbo: turbo_image4
                    }
                }))
                store.dispatch(setActiveSkinsDone(true))
            }
            break;
    }
}
export const loadCoreImages = () => {
    const loadImages = [
        {name: 'TOY_TOOL', src: TOY_TOOL_IMG},
        {name: 'COIN_TOOL', src: COIN_TOOL_IMG},
        {name: 'DRAGON_TOOL', src: DRAGON_TOOL_IMG},
    ];
    return loadImages.forEach((img) => {
        const im = new Image()
        im.src = img.src
        im.onload = () => {
            store.dispatch(addCoreImages({
                name: img.name,
                img: im
            }))
            if (store.getState().image.core.filter((x) => x.name === 'TOY_TOOL' || x.name === 'COIN_TOOL' || x.name === 'DRAGON_TOOL').length >= 3) {
                store.dispatch(setCoreDone(true))
            }
        }
    })
}

// export default getImage;