import { createSlice } from '@reduxjs/toolkit'
import {BoostSliceType} from "../types/store.ts";
const skinSlice = createSlice({
    name: 'boost',
    initialState: {
        haveData: false,
        dailyBoosts: [],
        boosts: [],
        leftDailyBoosts: [],
        images: []
    } as BoostSliceType,
    reducers: {
        setBoost: (state, action) => {
            state.dailyBoosts = action.payload.dailyBoosts;
            state.boosts = action.payload.boosts;
            state.leftDailyBoosts = action.payload.leftDailyBoosts;
            state.haveData = true;
        },
        setLeftDailyBoosts: (state, action) => {
            state.leftDailyBoosts = action.payload;
        },
        addBoosterImage: (state, action) => {
            state.images.push(action.payload);
        }
    }
})

export const { setBoost, setLeftDailyBoosts, addBoosterImage} = skinSlice.actions
export default skinSlice.reducer;