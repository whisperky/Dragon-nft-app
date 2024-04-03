import {
    boosterData,
    BoosterImageTypes,
    dailyBoosterData,
    DailyBoosterImageTypes, ImageTypes, LeagueData, LeagueImageTypes,
    skinData,
    SkinImageTypes, TurboData,
    UserData
} from "./data.ts";
import React, {ReactElement} from "react";
import {LeagueNameType, LeaguePresets} from "./types.ts";

export type GameSliceType = {
    item: dailyBoosterData & skinData & boosterData | null;
    itemType: 'daily_booster' | 'skin' | 'booster' | null;
    bottomSheet: boolean;
    botBottomSheet: boolean;
    botEarn: number;
    totalEarned: string;
    totalSpent: string;
    totalPlayers: string;
    dailyUser: string;
    onlineUsers: string;
}
export type ScoreSliceType = {
    temp_value: number;
    value: string;
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
    coreLoaded: boolean;
    allLoaded: boolean;
    allLoadedImg: string[];
    coinLoaded: boolean;
    coinLoadedImg: string[];
    userLoaded: boolean;
}
export type UserSliceType = {
    dataRequested: boolean;
    websocket: any;
    data: UserData | null;
}
export type SkinSliceType = {
    list: any[],
    userSkins: {
        id: string;
        user_id: string;
        skin_id: string;
        price: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]
}
export type BoostSliceType = {
    haveData: boolean;
    dailyBoosts: any[];
    boosts: any[];
    leftDailyBoosts: any[];
    images: {
        name: ImageTypes
        img: HTMLImageElement
    }[];
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
export type TurboSliceType = {
    taps: number;
    power: 'on' | 'off';
    turbo: TurboData;
    turboMode: boolean;
    ready: boolean;
    style: React.CSSProperties;
    availableTurbos: TurboData[];
    mineTurbo: boolean;
    timeout: any;
}
export type MyImageTypes = {
    name: ImageTypes;
    img: HTMLImageElement;
}
export type MySkinImageTypes = {
    name: SkinImageTypes;
    img: {
        normal: HTMLImageElement;
        turbo: HTMLImageElement;
    }
}
export type MyLeagueImageTypes = {
    name: LeagueImageTypes;
    img: {
        main: HTMLImageElement;
        bg: HTMLImageElement;
        small: HTMLImageElement;
    }
}
export type ImageSliceType = {
    core: MyImageTypes[];
    activeSkins: MySkinImageTypes;
    booster: MyImageTypes[];
    dailyBooster: MyImageTypes[];
    skin: MySkinImageTypes[];
    others: MyImageTypes[];
    league: MyLeagueImageTypes[];
    coiners: MyImageTypes[];

    isCoreDone: boolean;
    isActiveSkinsDone: boolean;
    isBoosterDone: boolean;
    isDailyBoosterDone: boolean;
    isSkinDone: boolean;
    isOthersDone: boolean;
    isLeagueDone: boolean;
    isCoinersDone: boolean;
}
export type LeagueSliceType = {
    userLeague: LeagueData;
    league: LeagueNameType;
    type: 'miner' | 'squad';
    userTop: number,
    no: number;
    time: 'day' | 'week';
    leagueData: LeagueData;
    topUsers: any[];
    leagueList: any[];
}