import { createSlice } from '@reduxjs/toolkit'
import {LoadingSliceType} from "../types/store.ts";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        coreLoaded: false,
        coinLoadedImg: [],
        allLoaded: false,
        allLoadedImg: [],
        coinLoaded: false,
        userLoaded: false,
    } as LoadingSliceType,
    reducers: {
        loadCoin: (state) => {
            state.coinLoaded = true;
            if (state.userLoaded && state.coinLoaded) {
                state.coreLoaded = true;
            }
        },
        coinLoaded: (state) => {
            state.coinLoaded = true;
        },
        addCoinLoadedImg: (state, action) => {
            if (!state.coinLoadedImg.includes(action.payload)) {
                state.coinLoadedImg.push(action.payload);
            }
        },
        loadUser: (state) => {
            state.userLoaded = true;
            if (state.userLoaded && state.coinLoaded) {
                state.coreLoaded = true;
            }
        },
        allImagesLoaded: (state) => {
            state.allLoaded = true;
        },
        addAllLoadedImg: (state, action) => {
            if (!state.allLoadedImg.includes(action.payload)) {
                state.allLoadedImg.push(action.payload);
            }
        }
    }
})

export const { loadCoin, addCoinLoadedImg,loadUser, allImagesLoaded, addAllLoadedImg } = loadingSlice.actions
export default loadingSlice.reducer