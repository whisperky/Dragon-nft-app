import {createSlice} from "@reduxjs/toolkit";

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        isPurchasing: false,
        toast: 'DragonDaoPurchaseToast',
        item: null,
        status: null
    } as {
        isPurchasing: boolean,
        toast: string,
        item: string | null,
        status: 'success' | 'error' | null
    },
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