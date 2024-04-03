import {boosterData, dailyBoosterData, LeagueImageTypes, skinData, UserData} from "../types/data.ts";
import toast from "react-hot-toast";
import {LeagueNameType, LeaguePresets} from "../types/types.ts";

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
                    return 20;
                }
            case 2:
                if (random < 70) {
                    return 20;
                } else {
                    return 16;
                }
            case 3:
                if (random < 50) {
                    return 16;
                } else {
                    return 10;
                }
            case 4:
                if (random < 30) {
                    return 10;
                } else {
                    return 7;
                }
        }
    }
}
export const leagueName = (league: LeaguePresets | LeagueImageTypes): LeagueNameType => {
    switch (league) {
        case 'BRONZE_MINER':
        case 'BRONZE_SQUAD':
        case 'BRONZE_LEAGUE':
            return 'BRONZE';
        case 'SILVER_MINER':
        case 'SILVER_SQUAD':
        case 'SILVER_LEAGUE':
            return 'SILVER';
        case 'GOLD_MINER':
        case 'GOLD_SQUAD':
        case 'GOLD_LEAGUE':
            return 'GOLD';
        case 'PLATINUM_MINER':
        case 'PLATINUM_SQUAD':
        case 'PLATINUM_LEAGUE':
            return 'PLATINUM';
        case 'EMERALD_MINER':
        case 'EMERALD_SQUAD':
        case 'EMERALD_LEAGUE':
            return 'EMERALD';
        case 'RUBY_MINER':
        case 'RUBY_SQUAD':
        case 'RUBY_LEAGUE':
            return 'RUBY';
        case 'DIAMOND_MINER':
        case 'DIAMOND_SQUAD':
        case 'DIAMOND_LEAGUE':
            return 'DIAMOND';
        case 'WISH_MINER':
        case 'WISH_SQUAD':
        case 'LOONG_LEAGUE':
            return 'WISH';
    }
}
export const leagueToNumber = (league: LeagueNameType): number => {
    switch (league) {
        case 'BRONZE':
            return 1;
        case 'SILVER':
            return 2;
        case 'GOLD':
            return 3;
        case 'PLATINUM':
            return 4;
        case 'EMERALD':
            return 5;
        case 'RUBY':
            return 6;
        case 'DIAMOND':
            return 7;
        case 'WISH':
            return 8;
    }
}
export const numberToLeague = (league: number): LeagueNameType => {
    switch (league) {
        case 1:
            return 'BRONZE';
        case 2:
            return 'SILVER';
        case 3:
            return 'GOLD';
        case 4:
            return 'PLATINUM';
        case 5:
            return 'EMERALD';
        case 6:
            return 'RUBY';
        case 7:
            return 'DIAMOND';
        case 8:
            return 'WISH';
    }

}
export const numberToLeagueMinerPreset = (league: number): LeaguePresets => {
    switch (league) {
        case 1:
            return 'BRONZE_MINER';
        case 2:
            return 'SILVER_MINER';
        case 3:
            return 'GOLD_MINER';
        case 4:
            return 'PLATINUM_MINER';
        case 5:
            return 'EMERALD_MINER';
        case 6:
            return 'RUBY_MINER';
        case 7:
            return 'DIAMOND_MINER';
        case 8:
            return 'WISH_MINER';
    }

}
export const numberToLeagueSquadPreset = (league: number): LeaguePresets => {
    switch (league) {
        case 1:
            return 'BRONZE_SQUAD';
        case 2:
            return 'SILVER_SQUAD';
        case 3:
            return 'GOLD_SQUAD';
        case 4:
            return 'PLATINUM_SQUAD';
        case 5:
            return 'EMERALD_SQUAD';
        case 6:
            return 'RUBY_SQUAD';
        case 7:
            return 'DIAMOND_SQUAD';
        case 8:
            return 'WISH_SQUAD';
    }


}
export const showToast = (id: string, message: string, type: 'success' | 'error' = 'error') => {
    if (type === 'success')
        toast.success(message, {
            id: id,
        });
    else
        toast.error(message, {
            id: id,
        });
}
export const capitalizeFirstLetter = (string: string) => {
    if (string)
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return string
}
export const getRandomColor= () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export const getColorWithId= (id: string) => {
    id = id.split('').map((char) => {
        if (char === '0') {
            return 'A';
        } else if (char === '1') {
            return 'D';
        }
        else if (char == '7') {
            return 'E';
        }
        else {
            return char;
        }
    }).join('')
    var color = '#' + id.slice(0, 6);
    return color;
}
export const highLowScore = (league: number): {high: bigint, low: bigint} => {
    switch (league) {
        case 1:
            return {high: BigInt(4999), low: BigInt(0)};
        case 2:
            return {high: BigInt(49999), low: BigInt(5000)};
        case 3:
            return {high: BigInt(99999), low: BigInt(50000)};
        case 4:
            return {high: BigInt(999999), low: BigInt(100000)};
        case 5:
            return {high: BigInt(9999999), low: BigInt(1000000)};
        case 6:
            return {high: BigInt(19999999), low: BigInt(10000000)};
        case 7:
            return {high: BigInt(99999999), low: BigInt(20000000)};
        case 8:
            return {high: BigInt(999999999), low: BigInt(100000000)};
    }
}