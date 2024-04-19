import { createSlice } from '@reduxjs/toolkit'
import {FrenSliceType} from "../types/store.ts";
const frenSlice = createSlice({
    name: 'fren',
    initialState: {
        haveData: false,
        list: [],
        topFrens: [],
        isTopFrenLoading: false,
    } as FrenSliceType,
    reducers: {
        setFrens: (state, action) => {
            state.list = action.payload;
            state.haveData = true;
        },
        topFrenLoading: (state) => {
            state.isTopFrenLoading = true;
        },
        topFrenLoad: (state) => {
            state.isTopFrenLoading = false;
        },
        setTopFrens: (state, action) => {
            state.topFrens = action.payload;
        }
    }
})

export const { setFrens, setTopFrens, topFrenLoading, topFrenLoad } = frenSlice.actions
export default frenSlice.reducer;