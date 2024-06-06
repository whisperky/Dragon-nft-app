import { createSlice } from '@reduxjs/toolkit'
import {EarnSliceType} from "../types/store.ts";
const earnSlice = createSlice({
    name: 'earn',
    initialState: {
        bottomSheet: false,
        status: {
            twitter: false,
            tg_channel: false,
            tg_group: false,
            medium: false
        },
        haveData: false,
        list: [],
        totalEarn: 0
    } as EarnSliceType,
    reducers: {
        setBottom: (state, action) => {
            state.bottomSheet = action.payload;
        },
        setEarns: (state, action) => {
            state.list = action.payload;
            state.haveData = true;
        },
        setStatus: (state, action) => {
            if(action.payload.type === 'twitter' && !state.status.twitter) {state.totalEarn += action.payload.value; state.status.twitter = true}
            if(action.payload.type === 'tg_channel' && !state.status.tg_channel) {state.totalEarn += action.payload.value; state.status.tg_channel = true}
            if(action.payload.type === 'tg_group' && !state.status.tg_group) {state.totalEarn += action.payload.value; state.status.tg_group = true}
            if(action.payload.type === 'medium' && !state.status.medium) {state.totalEarn += action.payload.value; state.status.medium = true}
        },
    }
})

export const { setBottom, setStatus, setEarns } = earnSlice.actions
export default earnSlice.reducer;