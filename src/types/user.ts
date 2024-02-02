export type userData = {
    success: boolean,
    id: string,
    tg_id: string,
    fName: string,
    lName: string,
    username: string,
    balance: number,
    squad_id: string,
    league_id: string,
    recharge_lvl: number,
    energy_lvl: number,
    tap_lvl: number,
    last_energy_left: number
    balance_updated_at: number,
    fren_link: string,
    invited_by: string,
    status: string,
    createdAt: Date,
    updatedAt: Date,
}

export type scoreInit = {
    temp_value: number
    value: number
    tap_lvl: number
    energy: number
    energy_lvl: number
    recharge_lvl: number
    last_tap_time: number
    tapTimeout: any
    energyTimeout: any
    coolDown: boolean
}