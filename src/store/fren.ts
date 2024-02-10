import { createSlice } from '@reduxjs/toolkit'
const frenSlice = createSlice({
    name: 'fren',
    initialState: {
        haveData: false,
        list: [],
    },
    reducers: {
        setFrens: (state, action) => {
            console.log(action.payload);
            state.list = action.payload;
            state.haveData = true;
        },
    }
})

export const { setFrens } = frenSlice.actions
export default frenSlice.reducer;