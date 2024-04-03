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

import BRONZE_LEAGUE from '../../public/icon/rank/bronze.svg';
import SILVER_LEAGUE from '../../public/icon/rank/silver.svg';
import GOLD_LEAGUE from '../../public/icon/rank/gold.svg';
import PLATINUM_LEAGUE from '../../public/icon/rank/platinum.svg';
import EMERALD_LEAGUE from '../../public/icon/rank/emerald.svg';
import RUBY_LEAGUE from '../../public/icon/rank/ruby.svg';
import DIAMOND_LEAGUE from '../../public/icon/rank/diamond.svg';
import LOONG_LEAGUE from '../../public/icon/rank/loong.svg';

import BRONZE_LEAGUE_SMALL from '../../public/icon/rank/small/bronze.svg';
import SILVER_LEAGUE_SMALL from '../../public/icon/rank/small/silver.svg';
import GOLD_LEAGUE_SMALL from '../../public/icon/rank/small/gold.svg';
import PLATINUM_LEAGUE_SMALL from '../../public/icon/rank/small/platinum.svg';
import EMERALD_LEAGUE_SMALL from '../../public/icon/rank/small/emerald.svg';
import RUBY_LEAGUE_SMALL from '../../public/icon/rank/small/ruby.svg';
import DIAMOND_LEAGUE_SMALL from '../../public/icon/rank/small/diamond.svg';
import LOONG_LEAGUE_SMALL from '../../public/icon/rank/small/loong.svg';

import BRONZE_LEAGUE_BG from '../../public/background/bronze.svg';
import SILVER_LEAGUE_BG from '../../public/background/silver.svg';
import GOLD_LEAGUE_BG from '../../public/background/gold.svg';
import PLATINUM_LEAGUE_BG from '../../public/background/platinum.svg';
import EMERALD_LEAGUE_BG from '../../public/background/emerald.svg';
import RUBY_LEAGUE_BG from '../../public/background/ruby.svg';
import DIAMOND_LEAGUE_BG from '../../public/background/diamond.svg';
import LOONG_LEAGUE_BG from '../../public/background/loong.svg';

import A from '../../public/users-img/1.jpg';
import B from '../../public/users-img/2.jpg';
import C from '../../public/users-img/3.jpg';
import D from '../../public/users-img/4.jpg';
import E from '../../public/users-img/5.jpg';
import F from '../../public/users-img/6.jpg';
import G from '../../public/users-img/7.jpg';
import H from '../../public/users-img/8.jpg';
import I from '../../public/users-img/9.jpg';
import J from '../../public/users-img/10.jpg';
import K from '../../public/users-img/11.jpg';
import L from '../../public/users-img/12.jpg';
import M from '../../public/users-img/13.jpg';
import N from '../../public/users-img/14.jpg';
import O from '../../public/users-img/15.jpg';

import {addCoinLoadedImg} from "../store/loading.ts";
import {store} from "../store/store.ts";
import {LeagueImageTypes, SkinImageTypes} from "../types/data.ts";
import {
    addActiveSkinsImages,
    addBoosterImages, addCoinersImages,
    addCoreImages,
    addDailyBoosterImages,
    addLeagueImages,
    addOthersImages,
    addSkinImages,
    setActiveSkinsDone,
    setBoosterDone, setCoinersDone,
    setCoreDone,
    setDailyBoosterDone,
    setLeagueDone,
    setOthersDone,
    setSkinDone
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
                    if (store.getState().image.booster.filter((x) => x.name === 'RECHARGING_SPEED' || x.name === 'MULTI_TAP' || x.name == 'AUTO_TAP_BOT' || x.name == 'ENERGY_LIMIT').length >= 4) {
                        store.dispatch(setBoosterDone(true))
                    }
                } else if (img.type == 'dailyBooster') {
                    store.dispatch(addDailyBoosterImages({
                        name: img.name,
                        img: im
                    }))
                    if (store.getState().image.dailyBooster.filter((x) => x.name === 'TURBO' || x.name === 'ENERGY').length >= 2) {
                        store.dispatch(setDailyBoosterDone(true))
                    }
                } else if (img.type == 'skin') {
                    store.dispatch(addSkinImages({
                        name: img.name as SkinImageTypes,
                        img: im,
                        type: image.type
                    }))
                    if (store.getState().image.skin.filter((x) => x.name === 'BASIC' || x.name === 'BITCOIN' || x.name == 'VOTE_PEDRO' || x.name == 'JADE_COIN').length >= 4) {
                        store.dispatch(setSkinDone(true))
                    }
                } else {
                    store.dispatch(addOthersImages({
                        name: img.name,
                        img: im
                    }))
                    if (store.getState().image.others.filter((x) => 'COIN_SPACE').length >= 1) {
                        store.dispatch(setOthersDone(true))
                    }
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
export const loadLeagueImages = () => {
    const leagueImages: { name: LeagueImageTypes, src: { img: any, bg: any, small: any } }[] = [
        {name: 'BRONZE_LEAGUE', src: {img: BRONZE_LEAGUE, bg: BRONZE_LEAGUE_BG, small: BRONZE_LEAGUE_SMALL}},
        {name: 'SILVER_LEAGUE', src: {img: SILVER_LEAGUE, bg: SILVER_LEAGUE_BG, small: SILVER_LEAGUE_SMALL}},
        {name: 'GOLD_LEAGUE', src: {img: GOLD_LEAGUE, bg: GOLD_LEAGUE_BG, small: GOLD_LEAGUE_SMALL}},
        {name: 'PLATINUM_LEAGUE', src: {img: PLATINUM_LEAGUE, bg: PLATINUM_LEAGUE_BG, small: PLATINUM_LEAGUE_SMALL}},
        {name: 'EMERALD_LEAGUE', src: {img: EMERALD_LEAGUE, bg: EMERALD_LEAGUE_BG, small: EMERALD_LEAGUE_SMALL}},
        {name: 'RUBY_LEAGUE', src: {img: RUBY_LEAGUE, bg: RUBY_LEAGUE_BG, small: RUBY_LEAGUE_SMALL}},
        {name: 'DIAMOND_LEAGUE', src: {img: DIAMOND_LEAGUE, bg: DIAMOND_LEAGUE_BG, small: DIAMOND_LEAGUE_SMALL}},
        {name: 'LOONG_LEAGUE', src: {img: LOONG_LEAGUE, bg: LOONG_LEAGUE_BG, small: LOONG_LEAGUE_SMALL}},
    ];
    return leagueImages.forEach((img) => {
        const image = new Image()
        image.src = img.src.img;
        const bg_image = new Image();
        bg_image.src = img.src.bg;
        const small_image = new Image();
        image.onload = () => {
            bg_image.src = img.src.bg;
        }
        bg_image.onload = () => {
            small_image.src = img.src.small;
        }
        small_image.onload = () => {
            store.dispatch(addLeagueImages({
                name: img.name,
                img: {
                    main: image,
                    bg: bg_image,
                    small: small_image
                }
            }))
            if (store.getState().image.league.filter((x) => x.name === 'BRONZE_LEAGUE' || x.name === 'SILVER_LEAGUE' || x.name === 'GOLD_LEAGUE' || x.name === 'PLATINUM_LEAGUE' || x.name === 'EMERALD_LEAGUE' || x.name === 'RUBY_LEAGUE' || x.name === 'DIAMOND_LEAGUE' || x.name === 'LOONG_LEAGUE').length >= 8) {
                store.dispatch(setLeagueDone(true))
            }
        }
    })
}
export const loadCoinersImages = () => {
    const loadImages = [
        {name: 'A', src: A},
        {name: 'B', src: B},
        {name: 'C', src: C},
        {name: 'D', src: D},
        {name: 'E', src: E},
        {name: 'F', src: F},
        {name: 'G', src: G},
        {name: 'H', src: H},
        {name: 'I', src: I},
        {name: 'J', src: J},
        {name: 'K', src: K},
        {name: 'L', src: L},
        {name: 'M', src: M},
        {name: 'N', src: N},
        {name: 'O', src: O}
    ];
    return loadImages.forEach((img) => {
        const im = new Image()
        im.src = img.src
        im.onload = () => {
            store.dispatch(addCoinersImages({
                name: img.name,
                img: im
            }))
            if (store.getState().image.coiners.filter((x) => x.name == 'A' || x.name == 'B' || x.name == 'C' || x.name == 'D' || x.name == 'E' || x.name == 'F' || x.name == 'G' || x.name == 'H' || x.name == 'I' || x.name == 'J' || x.name == 'K' || x.name == 'L' || x.name == 'M' || x.name == 'N' || x.name == 'O').length >= 15) {
                store.dispatch(setCoinersDone(true))
            }
        }
    })
}


// export default getImage;