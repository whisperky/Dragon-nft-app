import { createSlice } from '@reduxjs/toolkit'
import {taskSliceType} from "../types/store.ts";
const taskSlice = createSlice({
    name: 'task',
    initialState: {
        haveData: false,
        haveFinishData: false,
        list: [],
        selectedTask: [],
        selectedTitle: '',
        finishedTask: [],
        isTask: false,
        totalEarn: 0,
        isFinished: false
    } as taskSliceType,
    reducers: {
        setTasks: (state, action) => {
            // console.log(action.payload)
            state.list = [...action.payload];
            state.haveData = true;
        },
        setFinishedTasks: (state, action) => {
            console.log(state.list)
            
            if(!action.payload.length) {
                state.isTask = true;
            }
            // state.list = action.payload;
        },
        setTotalEarn: (state, action) => {
            state.totalEarn = action.payload
        },
        setUserFinishTask: (state, action) => {
            state.isFinished = action.payload
        },
        setSelectedTasks: (state, action) => {
            state.selectedTask = [...action.payload.tasks]
            state.selectedTitle = action.payload.title
        }
    }
})

export const { setTasks, setFinishedTasks,setTotalEarn, setUserFinishTask, setSelectedTasks } = taskSlice.actions
export default taskSlice.reducer;