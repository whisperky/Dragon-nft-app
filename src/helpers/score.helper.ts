export const tapValue = (level: number) => {
    return level + 1;
}
export const energyValue = (level: number) => {
    return (level * 500) + 1000;
}
export const rechargeValue = (level: number) => {
    return level + 1;
}
export const currentEnergy = (time: number, energy: number, energy_lvl: number,recharge_lvl: number) => {
    const cEnergy = (Math.ceil(((Date.now() / 1000) - time)) * rechargeValue(recharge_lvl)) + energy;
    return cEnergy >= energyValue(energy_lvl) ? energyValue(energy_lvl) : cEnergy;
}
export const randomRange = (min: number, max: number) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
