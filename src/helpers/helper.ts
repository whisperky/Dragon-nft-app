import {boosterData, dailyBoosterData, skinData, UserData} from "../types/data.ts";

export const getLevels = (user: {
    energy_lvl: number,
    bot_lvl: number,
    tap_lvl: number,
    recharge_lvl: number
}, item: dailyBoosterData | boosterData | skinData): number => {
    let lvl = 0;
    if (item.image === 'ENERGY_LIMIT') {
        lvl += user.energy_lvl;
    } else if (item.image === 'AUTO_TAP_BOT') {
        lvl += user.bot_lvl;
    } else if (item.image === 'MULTI_TAP') {
        lvl += user.tap_lvl;
    } else if (item.image === 'RECHARGING_SPEED') {
        lvl += user.recharge_lvl;
    }
    return lvl;
}

export const calculateBoostPrice = ({price = 100, level = 0, diff = 2}: {
    price?: number,
    level?: number,
    diff?: number
}): number => {
    if (level == 0)
        return price * Math.pow(diff, level);
    else
        return (price * Math.pow(diff, level)) * 10
}