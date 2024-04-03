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
        totalEarned: '0',
        totalSpent: '0',
        totalPlayers: '0',
        dailyUser: '0',
        onlineUsers: '0'
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
        },
        setTotals: (state, action) => {
            state.totalEarned = action.payload.totalEarned;
            state.totalSpent = action.payload.totalSpent;
            state.totalPlayers = action.payload.totalPlayers;
            state.dailyUser = action.payload.dailyUser;
            state.onlineUsers = action.payload.onlineUsers;
        }
    }
})

export const { showBottomSheet, hideBottomSheet, setAutoTapEarn, hideBotBottomSheet, setTotals } = gameSlice.actions
export default gameSlice.reducer