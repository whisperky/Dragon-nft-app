import {createSlice} from "@reduxjs/toolkit";

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        isPurchasing: false,
        toast: null,
        item: null,
        status: null
    } as {
        isPurchasing: boolean,
        toast: any,
        item: string | null,
        status: 'success' | 'error' | null
    },
    reducers: {
        setToast: (state, action) => {
            state.toast = action.payload;
        },
        setPurchaseItem: (state, action) => {
            state.item = action.payload;
            state.isPurchasing = true;
        },
        completeItemPurchase: (state, action) => {
            state.status = action.payload;
            state.isPurchasing = false;
            state.item = null;
            state.toast = null;
        }
    }
})

export const {setToast, setPurchaseItem, completeItemPurchase} = purchaseSlice.actions;
export default purchaseSlice.reducer;