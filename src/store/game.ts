import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        item: null,
        itemType: null,
        bottomSheet: false,
    },
    reducers: {
        showBottomSheet: (state, action) => {
            state.bottomSheet = true;
            state.item = action.payload.item;
            state.itemType = action.payload.type;
        },
        hideBottomSheet: (state) => {
            state.bottomSheet = false;
        }
    }
})

export const { showBottomSheet, hideBottomSheet } = gameSlice.actions
export default gameSlice.reducer