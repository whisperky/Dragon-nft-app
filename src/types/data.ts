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
    balance: number;
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
    score: number;
    league_id: string;
    createdAt: Date;
    updatedAt: Date;
}
export type leagueData = {
    id: string;
    name: string;
    score: number;
    type: leagueTypeData;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export type dailyBoosterData = {
    id: string;
    name: string;
    price: number;
    limit: number;
    image: 'RECHARGING_SPEED' | 'MULTI_TAP' | 'AUTO_TAP_BOT' | 'ENERGY_LIMIT';
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
    image: string;
    createdAt: Date;
    updatedAt: Date;
}
export type skinData = {
    id: string;
    name: string;
    price: number;
    description: string | null;
    image: string;
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
    name: string | null;
    description: string | null;
    image: string | null;
    task_category: taskCategoryData;
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
    iuser?: UserData;
    user?: UserData;
    createdAt: Date;
    updatedAt: Date;
}

// Enums
export type userStatusData = 'active' | 'suspended' | 'deactivated';
export type chatTypeData = 'group' | 'channel';
export type leagueTypeData = 'miner' | 'squad';
export type taskCategoryData = 'onboarding' | 'specials' | 'web3_world';
export type transactionTypeData = 'skin' | 'booster' | 'daily_booster';

// helper
export type UserWebhookData = {
    success: boolean;
    id: string;
    tg_id: string;
    fName: string;
    lName: string;
    username: string;
    balance: number;
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
        balance: number;
        energy_lvl: number;
        recharge_lvl: number;
        tap_lvl: number;
        bot_lvl: number;
        balance_updated_at: number | null;
        last_energy_left: number | null;
        createdAt: Date;
        updatedAt: Date;
        skins: userSkinData[];
        boosts: userDailyBoost;
    }
}