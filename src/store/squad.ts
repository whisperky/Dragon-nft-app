import {createSlice} from '@reduxjs/toolkit'
import {BoostSliceType, SquadSliceType} from "../types/store.ts";

const squadSlice = createSlice({
    name: 'squad',
    initialState: {
        userSquad: null,
        squad: null,
        topSquad: [],
        topSquadUsers: [],
        isLoading: false,
    } as SquadSliceType,
    reducers: {
        setUserSquad: (state, action) => {
            state.userSquad = action.payload;
        },
        setTopSquad: (state, action) => {
            state.topSquad = action.payload;
            state.isLoading = false;
        },
        selectSquad: (state, action) => {
            state.squad = action.payload;
            state.isLoading = false;
        },
        setTopSquadUsers: (state, action) => {
            state.topSquadUsers = action.payload;
        },
        squadLoading: (state) => {
            state.isLoading = true;
        },
        squadLoaded: (state) => {
            state.isLoading = false;
        },
        setSquadLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const {
    setUserSquad,
    setTopSquad,
    selectSquad,
    setTopSquadUsers,
    setSquadLoading,
    squadLoading,
    squadLoaded
} = squadSlice.actions
export default squadSlice.reducer;