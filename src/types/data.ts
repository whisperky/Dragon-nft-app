export type adminData = {
    id: string
    name: string | null
    username: string | null
    user_id: string | null
    createdAt: Date
    updatedAt: Date
}
export type userData = {
    id: string
    tg_id: string
    fName: string | null
    lName: string | null
    username: string | null
    balance: number
    squad_id: string | null
    league_id: string | null
    tap_lvl: number
    energy_lvl: number
    recharge_lvl: number
    fren_token: string | null
    invited_by: string | null
    invited_users: number
    last_energy_left: number | null
    balance_updated_at: number | null
    status: userStatusData | null
    createdAt: Date
    updatedAt: Date
}
export type earnLogData = {
    id: number
    user_id: string
    squad_id: string | null
    amount: number
    createdAt: Date
    updatedAt: Date
}
export type squadData = {
    id: string
    name: string
    chat_id: string
    chat_type: chatTypeData
    score: number
    league_id: string
    createdAt: Date
    updatedAt: Date
}
export type leagueData = {
    id: string
    name: string
    score: number
    type: leagueTypeData
    description: string | null
    createdAt: Date
    updatedAt: Date
}
export type dailyBoosterData = {
    id: string
    name: string
    price: number
    limit: number
    image: string
    createdAt: Date
    updatedAt: Date
}
export type boosterData = {
    id: string
    name: string
    price: number
    description: string | null
    short_description: string | null
    max_lvl: number | null
    lvl_diff: number | null
    image: string
    createdAt: Date
    updatedAt: Date
}
export type skinData = {
    id: string
    name: string
    price: number
    description: string | null
    image: string
    task_id: string | null
    createdAt: Date
    updatedAt: Date
}
export type userSkinData = {
    id: string
    user_id: string
    skin_id: string
    price: number
    status: boolean
    createdAt: Date
    updatedAt: Date
}
export type taskData = {
    id: string
    name: string | null
    description: string | null
    image: string | null
    task_category: taskCategoryData
    createdAt: Date
    updatedAt: Date
}
export type transactionData = {
    id: string
    user_id: string
    type: transactionTypeData
    amount: number
    item_id: string
    createdAt: Date
    updatedAt: Date
}
export type frenData = {
    id: string
    user_id: string
    token: string
    invited_users: number
    createdAt: Date
    updatedAt: Date
}
export type frenListData = {
    id: string
    fren_id: string
    user_id: string
    is_premium: boolean
    earned: number
    createdAt: Date
    updatedAt: Date
}

// Enums
export type userStatusData = 'active' | 'suspended' | 'deactivated';
export type chatTypeData = 'group' | 'channel';
export type leagueTypeData = 'miner' | 'squad';
export type taskCategoryData = 'onboarding' | 'specials' | 'web3_world';
export type transactionTypeData = 'skin' | 'booster' | 'daily_booster';

// helper
export type boostWebHookData = {
    success: boolean,
    data: {
        dailyBoosts: dailyBoosterData[],
        boosts: boosterData[],
        skins: skinData[],
        userSkins: userSkinData[],
        leftDailyBoosts: userDailyBoost[]
    }
}
export type userDailyBoost = {
    id: string,
    name: string,
    used: number
}
export type purchaseReturnData = {
    success: boolean
    message: string
    user: {
        id: string
        tg_id: string
        balance: number
        energy_lvl: number
        recharge_lvl: number
        tap_lvl: number
        balance_updated_at: number | null
        last_energy_left: number | null
        createdAt: Date
        updatedAt: Date
        skins: userSkinData[]
        boosts: userDailyBoost
    }
}