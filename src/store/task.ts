import { createSlice } from '@reduxjs/toolkit'
import {taskSliceType} from "../types/store.ts";
const taskSlice = createSlice({
    name: 'task',
    initialState: {
        haveData: false,
        list: [],
    } as taskSliceType,
    reducers: {
        setTasks: (state, action) => {
            state.list = action.payload;
            state.haveData = true;
        },
    }
})

export const { setTasks } = taskSlice.actions
export default taskSlice.reducer;