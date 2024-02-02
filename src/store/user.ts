import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        dataRequested: false,
        data: null,
    },
    reducers: {
        requestUserData: (state) => {
            state.dataRequested = true;
        },
        setUser: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {requestUserData, setUser} = userSlice.actions
export default userSlice.reducer