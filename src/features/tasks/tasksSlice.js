import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "./action";

const initialState =
{
    tasks:[],
    isLoading:false,
}


const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask: (state,action) => {
             state.tasks.push(action.payload)
        },
        deleteTask: (state,action) => {
            let id = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id);
        },
        editTask: (state,action) => {
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getTasks.fulfilled, (state,action) => {
            let tasks = action.payload.slice(0,10);
            tasks = tasks.map(task => ({
                ...task,
                done:false
            }))
            state.tasks = tasks
            state.isLoading = false;
        })
        .addCase(getTasks.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getTasks.rejected, (state,action) => {
            state.isLoading = false;
            console.error("error in getting tasks =>",action)
        })
    }
})

export const {
                 deleteTask,
                 addTask,
                 editTask
             } = tasksSlice.actions;
export default tasksSlice.reducer;