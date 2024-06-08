import BOOST_DRAGON from "/icon/boosts/dragon.png";
import BOOST_BATTERY from "/icon/boosts/battery.png";
import BOOST_ENERGY from "/icon/boosts/battery.png";
import BOOST_MULTITAP from "/icon/boosts/multi-tap.png";
import BOOST_RECHARGE from "/icon/boosts/recharge-speed.png";
import BOOST_TAPBOT from "/icon/boosts/tap-bot.png";

import BOOST_BATTERY_BIG from "/icon/boosts/big/battery.png";
import BOOST_ENERGY_BIG from "/icon/boosts/big/energy.png";
import BOOST_MULTITAP_BIG from "/icon/boosts/big/multi-tap.png";
import BOOST_RECHARGE_BIG from "/icon/boosts/big/recharge-speed.png";
import BOOST_TAPBOT_BIG from "/icon/boosts/big/tap-bot.png";
import BOOST_DRAGON_BIG from "/icon/boosts/big/dragon.png";

import EARN_DRAGON_BIG from '/icon/earn/dragon-image.png';
import EARN_DRAGON from '/icon/earn/dragon.png'
import EARN_COMMUNITY from '/icon/earn/community.png'
import EARN_TWITTER from '/icon/earn/twitter.png'
import EARN_WALLET from '/icon/earn/wallet.png'
import EARN_MEDIUM from '/icon/earn/medium.png'
import EARN_TELEGRAM from '/icon/earn/telegram.png'

import BASIC from "/icon/boosts/skin/defualt.svg";
import BITCOIN from "/icon/boosts/skin/bitcoin.svg";
import VOTE_PEDRO from "/icon/boosts/skin/vote.svg";
import JADE_COIN from "/icon/boosts/skin/jade-coin.svg";

import BTC_IMAGE from "/skin/BTC.png";
import BTC_OPEN_IMAGE from "/skin/BTC_open.png";
import DRAGON_ICON_IMAGE from "/skin/dragon-icon.png";
import DRAGON_ICON_OPEN_IMAGE from "/skin/dragon-icon_open.png";
import JADE_IMAGE from "/skin/Jade.png";
import JADE_OPEN_IMAGE from "/skin/Jade_open.png";
import PIN_IMAGE from "/skin/Pin.png";
import PIN_OPEN_IMAGE from "/skin/Pin_open.png";

import TOY_TOOL_IMG from '/icon/menu/frens.png';
import COIN_TOOL_IMG from '/icon/menu/earn.png';
import COIN_SPACE_IMG from '/icon/main/coin-space.svg';
import APPS_TOOL_IMG from '/icon/menu/apps.png';
import DRAGON_TOOL_IMG from '/icon/menu/boost.png';

import BRONZE_LEAGUE from '/icon/rank/bronze.png';
import SILVER_LEAGUE from '/icon/rank/silver.png';
import GOLD_LEAGUE from '/icon/rank/gold.png';
import PLATINUM_LEAGUE from '/icon/rank/platinum.png';
import EMERALD_LEAGUE from '/icon/rank/emerald.png';
import RUBY_LEAGUE from '/icon/rank/ruby.png';
import DIAMOND_LEAGUE from '/icon/rank/diamond.png';
import LOONG_LEAGUE from '/icon/rank/loong.png';

import BRONZE_LEAGUE_SMALL from '/icon/rank/small/bronze.png';
import SILVER_LEAGUE_SMALL from '/icon/rank/small/silver.svg';
import GOLD_LEAGUE_SMALL from '/icon/rank/small/gold.svg';
import PLATINUM_LEAGUE_SMALL from '/icon/rank/small/platinum.svg';
import EMERALD_LEAGUE_SMALL from '/icon/rank/small/emerald.svg';
import RUBY_LEAGUE_SMALL from '/icon/rank/small/ruby.svg';
import DIAMOND_LEAGUE_SMALL from '/icon/rank/small/diamond.svg';
import LOONG_LEAGUE_SMALL from '/icon/rank/small/loong.svg';

import BRONZE_LEAGUE_BG from '/background/skin/bronze.svg';
import SILVER_LEAGUE_BG from '/background/skin/silver.svg';
import GOLD_LEAGUE_BG from '/background/skin/gold.svg';
import PLATINUM_LEAGUE_BG from '/background/skin/platinum.svg';
import EMERALD_LEAGUE_BG from '/background/skin/emerald.svg';
import RUBY_LEAGUE_BG from '/background/skin/ruby.svg';
import DIAMOND_LEAGUE_BG from '/background/skin/diamond.svg';
import LOONG_LEAGUE_BG from '/background/skin/loong.svg';

import A from '/users-img/1.jpg';
import B from '/users-img/2.jpg';
import C from '/users-img/3.jpg';
import D from '/users-img/4.jpg';
import E from '/users-img/5.jpg';
import F from '/users-img/6.jpg';
import G from '/users-img/7.jpg';
import H from '/users-img/8.jpg';
import I from '/users-img/9.jpg';
import J from '/users-img/10.jpg';
import K from '/users-img/11.jpg';
import L from '/users-img/12.jpg';
import M from '/users-img/13.jpg';
import N from '/users-img/14.jpg';
import O from '/users-img/15.jpg';

import JOIN_SQUAD_BG from '/background/squad/Squad_BG.svg';
import TOP_FRENS_BG from '/background/fren/topfren_BG.svg';
import SQUAD_DETAIL_BG from '/background/squad/Squad_Detail_BG.svg'
import OPEN_ARROW from "/icon/defaults/open-arrow.svg";
import LEFT_ARROW from "/icon/defaults/left-arrow.svg";
import RIGHT_ARROW from "/icon/defaults/right-arrow.svg";
import TG_PREMIUM from '/icon/tg_premium.svg';
import FIRST_BADGE from '/icon/rank/top/one.svg';
import SECOND_BADGE from '/icon/rank/top/two.svg';
import THIRD_BADGE from '/icon/rank/top/three.svg';
import CHECK_ICON from "/icon/defaults/right-arrow.svg";
import CLOSE_ICON from "/icon/defaults/close.svg";
import LOCKED_ICON from "/icon/boosts/locked.svg";
import CELEBRATION_ICON from "/icon/squad/celebration.svg";

import {addCoinLoadedImg} from "../store/loading.ts";
import {store} from "../store/store.ts";
import {BoosterImageTypes, DailyBoosterImageTypes, LeagueImageTypes, SkinImageTypes} from "../types/data.ts";
import {
    addActiveSkinsImages,
    addBoosterImages, addCoinersImages,
    addCoreImages,
    addDailyBoosterImages,
    addLeagueImages, addOptionalImages,
    addOthersImages,
    addSkinImages,
    setActiveSkinsDone,
    setBoosterDone, setCoinersDone,
    setCoreDone,
    setDailyBoosterDone,
    setLeagueDone, setOptionalDone,
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
//             return BOOST_BATTERY;
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
        {name: 'RECHARGING_SPEED', src: [{type: 'small', img: BOOST_RECHARGE}, {type: 'big', img: BOOST_RECHARGE_BIG}], type: 'booster'},
        {name: 'EARN_DRAGON', src: [{type: 'small', img: EARN_DRAGON}, {type: 'big', img: EARN_DRAGON}], type: 'booster'},
        {name: 'EARN_COMMUNITY', src: [{type: 'small', img: EARN_COMMUNITY}, {type: 'big', img: EARN_COMMUNITY}], type: 'booster'},
        {name: 'EARN_TWITTER', src: [{type: 'small', img: EARN_TWITTER}, {type: 'big', img: EARN_TWITTER}], type: 'booster'},
        {name: 'EARN_WALLET', src: [{type: 'small', img: EARN_WALLET}, {type: 'big', img: EARN_WALLET}], type: 'booster'},
        {name: 'EARN_MEDIUM', src: [{type: 'small', img: EARN_MEDIUM}, {type: 'big', img: EARN_MEDIUM}], type: 'booster'},
        {name: 'EARN_TELEGRAM', src: [{type: 'small', img: EARN_TELEGRAM}, {type: 'big', img: EARN_TELEGRAM}], type: 'booster'},
        {name: 'MULTI_TAP', src: [{type: 'small', img: BOOST_MULTITAP}, {type: 'big', img: BOOST_MULTITAP_BIG}], type: 'booster'},
        {name: 'AUTO_TAP_BOT', src: [{type: 'small', img: BOOST_TAPBOT}, {type: 'big', img: BOOST_TAPBOT_BIG}], type: 'booster'},
        {name: 'ENERGY_LIMIT', src: [{type: 'small', img: BOOST_BATTERY}, {type: 'big', img: BOOST_BATTERY_BIG}], type: 'booster'},
        {name: 'ENERGY', src: [{type: 'small', img: BOOST_ENERGY}, {type: 'big', img: BOOST_ENERGY_BIG}], type: 'dailyBooster'},
        {name: 'TURBO', src: [{type: 'small', img: BOOST_DRAGON}, {type: 'big', img: BOOST_DRAGON_BIG}], type: 'dailyBooster'},

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
        img.src.forEach((image: { type: 'normal' | 'turbo' | 'small' | 'big', img: any }) => {
            const im = new Image()
            im.src = image.img
            im.onload = () => {
                if (img.type == 'booster') {
                    store.dispatch(addBoosterImages({
                        name: img.name as BoosterImageTypes,
                        img: im,
                        type: image.type as 'small' | 'big'
                    }))
                    if (store.getState().image.booster.filter((x) => x.name === 'RECHARGING_SPEED' || x.name === 'MULTI_TAP' || x.name == 'AUTO_TAP_BOT' || x.name == 'ENERGY_LIMIT').length >= 4) {
                        store.dispatch(setBoosterDone(true))
                    }
                } else if (img.type == 'dailyBooster') {
                    store.dispatch(addDailyBoosterImages({
                        name: img.name as DailyBoosterImageTypes,
                        img: im,
                        type: image.type as 'small' | 'big'
                    }))
                    if (store.getState().image.dailyBooster.filter((x) => x.name === 'TURBO' || x.name === 'ENERGY').length >= 2) {
                        store.dispatch(setDailyBoosterDone(true))
                    }
                } else if (img.type == 'skin') {
                    store.dispatch(addSkinImages({
                        name: img.name as SkinImageTypes,
                        img: im,
                        type: image.type as 'normal' | 'turbo'
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
        {name: 'EARN_DRAGON_BIG', preset: 'BASIC', src: EARN_DRAGON_BIG, type: 'earn'},
        {name: 'JADE_COIN_NORMAL', preset: 'JADE_COIN', src: JADE_IMAGE, type: 'normal'},
        {name: 'JADE_COIN_TURBO', preset: 'JADE_COIN', src: JADE_OPEN_IMAGE, type: 'turbo'},
        {name: 'VOTE_PEDRO_NORMAL', preset: 'VOTE_PEDRO', src: PIN_IMAGE, type: 'normal'},
        {name: 'VOTE_PEDRO_TURBO', preset: 'VOTE_PEDRO', src: PIN_OPEN_IMAGE, type: 'turbo'},
    ];
    switch (store.getState().user.data.skin) {
        case 'BASIC':
            const normal_image = new Image();
            normal_image.src = DRAGON_ICON_IMAGE;
            const earn_image = new Image();
            normal_image.onload = () => {
                earn_image.src = EARN_DRAGON_BIG;
            }
            const turbo_image = new Image();
            earn_image.onload = () => {
                turbo_image.src = DRAGON_ICON_OPEN_IMAGE;
            }

            turbo_image.onload = () => {
                store.dispatch(addActiveSkinsImages({
                    name: loadImages.find((x) => x.preset === store.getState().user.data.skin).name,
                    img: {
                        normal: normal_image,
                        turbo: turbo_image,
                        earn: earn_image
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
            normal_image.src = DRAGON_ICON_IMAGE;
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
        {name: 'APPS_TOOL', src: APPS_TOOL_IMG},
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
            if (store.getState().image.core.filter((x) => x.name === 'TOY_TOOL' || x.name === 'COIN_TOOL' || x.name === 'DRAGON_TOOL' || x.name == 'APPS_TOOL').length >= 4) {
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

export const loadOptionalImages = () => {
    const loadImages = [
        {name: 'JOIN_SQUAD_BG', src: JOIN_SQUAD_BG},
        {name: 'TOP_FRENS_BG', src: TOP_FRENS_BG},
        {name: 'SQUAD_DETAIL_BG', src: SQUAD_DETAIL_BG},
        {name: 'OPEN_ARROW', src: OPEN_ARROW},
        {name: 'LEFT_ARROW', src: LEFT_ARROW},
        {name: 'RIGHT_ARROW', src: RIGHT_ARROW},
        {name: 'TG_PREMIUM', src: TG_PREMIUM},
        {name: 'FIRST_BADGE', src: FIRST_BADGE},
        {name: 'SECOND_BADGE', src: SECOND_BADGE},
        {name: 'THIRD_BADGE', src: THIRD_BADGE},
        {name: 'CHECK_ICON', src: CHECK_ICON},
        {name: 'CLOSE_ICON', src: CLOSE_ICON},
        {name: 'LOCKED_ICON', src: LOCKED_ICON},
        {name: 'CELEBRATION_ICON', src: CELEBRATION_ICON}
    ];
    return loadImages.forEach((img) => {
        const im = new Image()
        im.src = img.src
        im.onload = () => {
            store.dispatch(addOptionalImages({
                name: img.name,
                img: im
            }))
            if (store.getState().image.optional.filter((x) => x.name == 'JOIN_SQUAD_BG' || x.name == 'TOP_FRENS_BG' || x.name == 'SQUAD_DETAIL_BG' || x.name == 'OPEN_ARROW' || x.name == 'LEFT_ARROW' || x.name == 'RIGHT_ARROW' || x.name == 'TG_PREMIUM' || x.name == 'FIRST_BADGE' || x.name == 'SECOND_BADGE' || x.name == 'THIRD_BADGE' || x.name == 'CHECK_ICON' || x.name == 'CLOSE_ICON' || x.name == 'LOCKED_ICON' || x.name == 'CELEBRATION_ICON').length >= 14) {
                store.dispatch(setOptionalDone(true))
            }
        }
    })
}

// export default getImage;