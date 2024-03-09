import { createSlice } from '@reduxjs/toolkit'
import {GameSliceType} from "../types/store.ts";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        item: null,
        itemType: null,
        bottomSheet: false,
        botBottomSheet: false,
        botEarn: 0,
    } as GameSliceType,
    reducers: {
        showBottomSheet: (state, action) => {
            state.bottomSheet = true;
            state.item = action.payload.item;
            state.itemType = action.payload.type;
        },
        hideBottomSheet: (state) => {
            state.bottomSheet = false;
        },
        setAutoTapEarn: (state, action) => {
            state.botEarn = action.payload;
            if (state.botEarn > 0) {
                state.botBottomSheet = true;
            }
        },
        hideBotBottomSheet: (state) => {
            state.botBottomSheet = false;
        }
    }
})

export const { showBottomSheet, hideBottomSheet, setAutoTapEarn, hideBotBottomSheet } = gameSlice.actions
export default gameSlice.reducer