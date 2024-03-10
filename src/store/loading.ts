import { createSlice } from '@reduxjs/toolkit'
import {LoadingSliceType} from "../types/store.ts";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        allLoaded: false,
        coinLoaded: false,
        userLoaded: false,
    } as LoadingSliceType,
    reducers: {
        loadCoin: (state) => {
            state.coinLoaded = true;
            if (state.userLoaded && state.coinLoaded) {
                state.allLoaded = true;
            }
        },
        loadUser: (state) => {
            state.userLoaded = true;
            if (state.userLoaded && state.coinLoaded) {
                state.allLoaded = true;
            }
        }
    }
})

export const { loadCoin,loadUser } = loadingSlice.actions
export default loadingSlice.reducer