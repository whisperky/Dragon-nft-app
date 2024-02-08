import {createSlice} from '@reduxjs/toolkit'

const skinSlice = createSlice({
    name: 'skin',
    initialState: {
        list: [],
        userSkins: []
    },
    reducers: {
        setSkins: (state, action) => {
            state.list = action.payload.list;
            state.userSkins = action.payload.userSkins;
        },
        setUserSkins: (state, action) => {
            state.userSkins = action.payload;
        }
    }
})

export const {setSkins, setUserSkins} = skinSlice.actions
export default skinSlice.reducer;