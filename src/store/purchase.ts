import {createSlice} from "@reduxjs/toolkit";
import {PurchaseSliceType} from "../types/store.ts";

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        isPurchasing: false,
        toast: 'DragonDaoPurchaseToast',
        item: null,
        status: null
    } as PurchaseSliceType,
    reducers: {
        setPurchaseItem: (state, action) => {
            state.item = action.payload;
            state.isPurchasing = true;
        },
        completeItemPurchase: (state, action) => {
            state.status = action.payload;
            state.isPurchasing = false;
            state.item = null;
        }
    }
})

export const {setPurchaseItem, completeItemPurchase} = purchaseSlice.actions;
export default purchaseSlice.reducer;