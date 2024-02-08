import { createSlice } from '@reduxjs/toolkit'
const skinSlice = createSlice({
    name: 'boost',
    initialState: {
        haveData: false,
        dailyBoosts: [],
        boosts: [],
        leftDailyBoosts: [],
    },
    reducers: {
        setBoost: (state, action) => {
            state.dailyBoosts = action.payload.dailyBoosts;
            state.boosts = action.payload.boosts;
            state.leftDailyBoosts = action.payload.leftDailyBoosts;
            state.haveData = true;
        },
        setLeftDailyBoosts: (state, action) => {
            state.leftDailyBoosts = action.payload;
        }
    }
})

export const { setBoost, setLeftDailyBoosts} = skinSlice.actions
export default skinSlice.reducer;