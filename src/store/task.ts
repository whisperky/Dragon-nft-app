import { createSlice } from '@reduxjs/toolkit'
import {taskSliceType} from "../types/store.ts";
const taskSlice = createSlice({
    name: 'task',
    initialState: {
        haveData: false,
        haveFinishData: false,
        list: [],
        finishedTask: [],
        isTask: false,
        totalEarn: 0,
        isFinished: false
    } as taskSliceType,
    reducers: {
        setTasks: (state, action) => {
            state.list = action.payload;
            state.haveData = true;
            if(action.payload && !action.payload.length) {
                state.isFinished = true;
            }
        },
        setFinishedTasks: (state, action) => {
            if(!action.payload.length) {
                state.isTask = true;
            }
            state.list = action.payload;
        },
        setTotalEarn: (state, action) => {
            state.totalEarn = action.payload
        },
        setUserFinishTask: (state, action) => {
            console.log(action.payload)
            state.isFinished = action.payload
        }
    }
})

export const { setTasks, setFinishedTasks,setTotalEarn, setUserFinishTask } = taskSlice.actions
export default taskSlice.reducer;