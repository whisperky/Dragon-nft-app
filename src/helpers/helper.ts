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

export const randomTurboLevel = (level: number) => {
    if (level == 5) {
        return 0;
    } else {
        const random = Math.random() * 100; // Generating a random number between 0 and 100
        switch (level) {
            case 1:
                if (random < 90) {
                    return 30;
                } else {
                    return 15;
                }
            case 2:
                if (random < 70) {
                    return 18;
                } else {
                    return 9;
                }
            case 3:
                if (random < 50) {
                    return 16;
                } else {
                    return 8;
                }
            case 4:
                if (random < 30) {
                    return 10;
                } else {
                    return 5;
                }
        }
    }
}