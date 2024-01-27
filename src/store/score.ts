import { createSlice } from '@reduxjs/toolkit'

const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        value: 0,
        addValueBy: 1,
        energy: 1000,
        addEnergyBy: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += state.addValueBy;
        },
        increaseEnergy: (state) => {
            state.energy += state.addEnergyBy;
        },
        decreaseEnergy: (state) => {
            state.energy -= state.addValueBy;
        },
    }
})

export const { increment,increaseEnergy,decreaseEnergy } = scoreSlice.actions
export default scoreSlice.reducer