import {createSlice} from '@reduxjs/toolkit'
import {SkinSliceType} from "../types/store.ts";

const skinSlice = createSlice({
    name: 'skin',
    initialState: {
        list: [],
        userSkins: []
    } as SkinSliceType,
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