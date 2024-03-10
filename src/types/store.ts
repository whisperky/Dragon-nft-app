import {boosterData, dailyBoosterData, skinData, UserData} from "./data.ts";

export type GameSliceType = {
    item: dailyBoosterData & skinData & boosterData | null;
    itemType: 'daily_booster' | 'skin' | 'booster' | null;
    bottomSheet: boolean;
    botBottomSheet: boolean;
    botEarn: number;
}
export type ScoreSliceType = {
    temp_value: number;
    value: number;
    tap_lvl: number;
    energy: number;
    energy_lvl: number;
    recharge_lvl: number;
    bot_lvl: number;
    last_tap_time: number;
    tapTimeout: any;
    energyTimeout: any;
    coolDown: boolean;
}
export type LoadingSliceType = {
    allLoaded: boolean;
    coinLoaded: boolean;
    userLoaded: boolean;
}
export type UserSliceType = {
    dataRequested: boolean;
    websocket: any;
    data: UserData | null;
}
export type SkinSliceType = {
    list: any[],
    userSkins: any[]
}
export type BoostSliceType = {
    haveData: boolean;
    dailyBoosts: any[];
    boosts: any[];
    leftDailyBoosts: any[];
}
export type PurchaseSliceType = {
    isPurchasing: boolean;
    toast: string;
    item: string | null;
    status: 'success' | 'error' | null;
}

export type FrenSliceType = {
    haveData: boolean;
    list: any[];
}