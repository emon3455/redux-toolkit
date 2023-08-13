/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts= createAsyncThunk("posts/fetchPost", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data;
})

export const postsSlice = createSlice({
    name: "post",
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchPosts.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        })
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        })

    }
})

export default postsSlice.reducer;