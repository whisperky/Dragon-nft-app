import { createSlice } from '@reduxjs/toolkit'
import Service from "../service/Service.ts";
import {userData} from "../types/data.ts";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        dataRequested: false,
        data: null,
        websocket: Service.Connect()
    } as {
        dataRequested: boolean,
        websocket: any,
        data: userData | null
    },
    reducers: {
        requestUserData: (state) => {
            state.dataRequested = true;
        },
        setUser: (state, action) => {
            state.data = action.payload;
        },
        setUserPurchaseReturn: (state, action) => {
            if (state.data != null) {
                state.data.tap_lvl = action.payload.tap_lvl;
                state.data.energy_lvl = action.payload.energy_lvl;
                state.data.balance = action.payload.balance;
                state.data.recharge_lvl = action.payload.recharge_lvl;
                state.data.last_energy_left = action.payload.last_energy_left;
                state.data.balance_updated_at = action.payload.balance_updated_at;
                state.data.last_energy_left = action.payload.last_energy_left;
                state.data.createdAt = action.payload.createdAt;
                state.data.updatedAt = action.payload.updatedAt;

            }
        }
    }
})

export const {requestUserData, setUser, setUserPurchaseReturn} = userSlice.actions
export default userSlice.reducer