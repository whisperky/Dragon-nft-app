import { createSlice } from '@reduxjs/toolkit'
import {FrenSliceType} from "../types/store.ts";
const frenSlice = createSlice({
    name: 'fren',
    initialState: {
        haveData: false,
        list: [],
    } as FrenSliceType,
    reducers: {
        setFrens: (state, action) => {
            state.list = action.payload;
            state.haveData = true;
        },
    }
})

export const { setFrens } = frenSlice.actions
export default frenSlice.reducer;