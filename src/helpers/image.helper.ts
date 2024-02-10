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


const getImage = (handler: string)  => {
    switch (handler.toUpperCase()) {
        // RECHARGING_SPEED
        // MULTI_TAP
        // AUTO_TAP_BOT
        // ENERGY_LIMIT
        // GOLD
        // DIAMOND
        // PLATINUM
        // SILVER
        // BRONZE
        // JADE_COIN
        // BITCOIN
        // VOTE_PEDRO
        // BASIC
        case 'RECHARGING_SPEED':
            return BOOST_RECHARGE;
        case 'MULTI_TAP':
            return BOOST_MULTITAP;
        case 'AUTO_TAP_BOT':
            return BOOST_TAPBOT;
        case 'ENERGY_LIMIT':
            return BOOST_BATTREY;
        case 'ENERGY':
            return BOOST_ENERGY;
        case 'BASIC':
            return BASIC;
        case 'BITCOIN':
            return BITCOIN;
        case 'VOTE_PEDRO':
            return VOTE_PEDRO;
        case 'JADE_COIN':
            return JADE_COIN;
        default:
            return BOOST_DRAGON;
    }
}

export default getImage;