import {LeaguePresets} from "./types.ts";

export type adminData = {
    id: string;
    name: string | null;
    username: string | null;
    user_id: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export type UserData = {
    id: string;
    tg_id: string;
    fName: string | null;
    lName: string | null;
    username: string | null;
    balance: string;
    squad_id: string | null;
    league_id: string | null;
    tap_lvl: number;
    energy_lvl: number;
    recharge_lvl: number;
    bot_lvl: number;
    fren_token: string | null;
    invited_by: string | null;
    invited_users: number;
    last_energy_left: number | null;
    balance_updated_at: number | null;
    status: userStatusData | null;
    botEarn: number;
    skin: SkinImageTypes;
    createdAt: Date;
    updatedAt: Date;
}
export type earnLogData = {
    id: number;
    user_id: string;
    squad_id: string | null;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}
export type squadData = {
    id: string;
    name: string;
    chat_id: string;
    chat_type: chatTypeData;
    username: string;
    description: string;
    score: number;
    members: number;
    image: string;
    league_id: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type squadDataLeague = {
    id: string;
    name: string;
    chat_id: string;
    chat_type: chatTypeData;
    username: string;
    description: string;
    score: number;
    members: number;
    image: string;
    league_id: string;
    league: {
        name: string,
        preset: LeaguePresets
    }
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type leagueData = {
    id: string;
    name: string;
    score: number;
    type: leagueTypeData;
    preset: LeaguePresets;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export type dailyBoosterData = {
    id: string;
    name: string;
    price: number;
    limit: number;
    image: any;
    createdAt: Date;
    updatedAt: Date;
}
export type boosterData = {
    id: string;
    name: string;
    price: number;
    description: string | null;
    short_description: string | null;
    max_lvl: number | null;
    lvl_diff: number | null;
    image: any
    createdAt: Date;
    updatedAt: Date;
}
export type EarnData = {
    id: string;
    name: string;
    price: number;
    image: any;
    url?: String;
    type: String;
}
export type skinData = {
    id: string;
    name: string;
    price: number;
    description: string | null;
    image: any
    task_id: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export type userSkinData = {
    id: string;
    user_id: string;
    skin_id: string;
    price: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type taskData = {
    id: string;
    title: string | null;
    emoji: string | null;
    description: string | null;
    difficulty: taskDifficultData;
    type: taskTypeData;
    social: tasksocialData;
    type_data: string | null;
    type_unique: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export type transactionData = {
    id: string;
    user_id: string;
    type: transactionTypeData;
    amount: number;
    item_id: string;
    createdAt: Date;
    updatedAt: Date;
}
export type frenData = {
    id: string;
    user_id: string;
    iuser_id: string;
    is_premium: boolean;
    earned: number;
    iuser?: UserDataFren;
    user?: UserData;
    createdAt: Date;
    updatedAt: Date;
}
export type topFrenData = {
    id: string;
    tg_id: string;
    fName: string;
    lName: string;
    frens: number;
    earned: number;
}
export type UserDataFren = {
    id: string;
    tg_id: string;
    fName: string | null;
    lName: string | null;
    username: string | null;
    balance: string;
    squad_id: string | null;
    league_id: string | null;
    tap_lvl: number;
    energy_lvl: number;
    recharge_lvl: number;
    bot_lvl: number;
    fren_token: string | null;
    invited_by: string | null;
    invited_users: number;
    last_energy_left: number | null;
    balance_updated_at: number | null;
    status: userStatusData | null;
    botEarn: number;
    skin: SkinImageTypes;
    league: leagueData;
    createdAt: Date;
    updatedAt: Date;
}

// Enums
export type userStatusData = 'active' | 'suspended' | 'deactivated';
export type chatTypeData = 'group' | 'channel';
export type leagueTypeData = 'miner' | 'squad';
export type taskDifficultData = 'easy' | 'medium' | 'hard';
export type taskTypeData = 'web_link' | 'link' | 'socials';
export type tasksocialData = 'telegram'| 'twitter'| 'tiktok'| 'medium'| 'reddit'| 'twitch'| 'youtube'| 'discord'| 'facebook'| 'whatsapp'| 'linkedin'| 'snapchat'| 'instagram'| 'pinterest'| 'wechat';
export type transactionTypeData = 'skin' | 'booster' | 'daily_booster';

// helper
export type UserWebhookData = {
    success: boolean;
    id: string;
    tg_id: string;
    fName: string;
    lName: string;
    username: string;
    balance: string;
    squad_id: string;
    league_id: string;
    recharge_lvl: number;
    energy_lvl: number;
    tap_lvl: number;
    bot_lvl: number;
    last_energy_left: number;
    balance_updated_at: number;
    fren_token: string;
    invited_by: string;
    invited_users: number;
    status: userStatusData | null;
    botEarn: number;
    turbo?: TurboData[]
    skin: SkinImageTypes;
    league: LeagueData;
    game: GameData;
    squad: squadDataLeague;
    createdAt: Date;
    updatedAt: Date;
}
export type boostWebHookData = {
    success: boolean;
    data: {
        dailyBoosts: dailyBoosterData[];
        boosts: boosterData[];
        skins: skinData[];
        userSkins: userSkinData[];
        leftDailyBoosts: userDailyBoost[];
    }
}
export type taskWebHookData = {
    success: boolean;
    data: {
        tasks: taskData[];
    }
}
export type frenWebHookData = {
    success: boolean;
    data: {
        frens: frenData[];
    }
}
export type userDailyBoost = {
    id: string;
    name: string;
    used: number;
}
export type purchaseReturnData = {
    success: boolean;
    message: string;
    user: {
        id: string;
        tg_id: string;
        balance: string;
        energy_lvl: number;
        recharge_lvl: number;
        tap_lvl: number;
        bot_lvl: number;
        balance_updated_at: number | null;
        last_energy_left: number | null;
        createdAt: Date;
        updatedAt: Date;
        skin: any;
        skins: userSkinData[];
        boosts: userDailyBoost;
        turbo?: TurboData[]
    };
    itemType: 'mine' | 'daily_booster' | 'skin' | 'booster' | 'change_skin';
}
export type TurboData = {
    id: string;
    multiply: number;
    maxTaps: number;
    token: string;
    duration: number;
}
export type LeagueData = {
    id: string,
    name: string,
    score: string,
    type: 'miner' | 'squad',
    description: string,
    preset: LeaguePresets,
};
export type GameData = {
    id: number;
    name: string;
    totalPlayers: string;
    totalEarned: string;
    totalSpent: string;
    dailyUser: string;
    onlineUsers: string;
}
// universal

export type BoosterImageTypes = 'RECHARGING_SPEED' | 'MULTI_TAP' | 'AUTO_TAP_BOT' | 'ENERGY_LIMIT';
export type DailyBoosterImageTypes = 'ENERGY' | 'TURBO';
export type SkinImageTypes = 'BASIC' | 'BITCOIN' | 'VOTE_PEDRO' | 'JADE_COIN';
export type ImageTypes = BoosterImageTypes | DailyBoosterImageTypes | SkinImageTypes | string;
export type LeagueImageTypes =
    'BRONZE_LEAGUE'
    | 'SILVER_LEAGUE'
    | 'GOLD_LEAGUE'
    | 'PLATINUM_LEAGUE'
    | 'EMERALD_LEAGUE'
    | 'RUBY_LEAGUE'
    | 'DIAMOND_LEAGUE'
    | 'LOONG_LEAGUE';