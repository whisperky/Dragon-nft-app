import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        bottomSheet: false,
    },
    reducers: {
        showBottomSheet: (state) => {
            state.bottomSheet = true;
        },
        hideBottomSheet: (state) => {
            state.bottomSheet = false;
        }
    }
})

export const { showBottomSheet, hideBottomSheet } = gameSlice.actions
export default gameSlice.reducer