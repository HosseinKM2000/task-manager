import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const  getTasks = createAsyncThunk('tasks/getTasks', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = response;
    return data;
})