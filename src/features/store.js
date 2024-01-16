import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/tasksSlice";


const store = configureStore({
    reducer:{
        tasks : tasksSlice,
    }
})

export default store;