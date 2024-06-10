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
      
    }
})

export const { setBottom, setEarns } = earnSlice.actions
export default earnSlice.reducer;