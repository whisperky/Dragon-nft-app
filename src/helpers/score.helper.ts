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

export const numify = (x: bigint | number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const numShort = (num: number): string => {
    if (num < 1000) return num.toString(); // less than 1000
    if (num < 1000000) return (num / 1000).toFixed(1) + 'k'; // less than 1 million
    if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M'; // less than 1 billion
    if (num < 1000000000000) return (num / 1000000000).toFixed(1) + 'B'; // less than 1 trillion
    return (num / 1000000000000).toFixed(1) + 'Tr'; // 1 trillion or more
}