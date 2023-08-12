/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {count: 0},
    reducers:{
        increment: (state, action)=>{
            state.count = state.count + 1;
        },
        decrement: (state, action)=>{
            state.count = state.count - 1;
        },
        reset: (state, action)=>{
            state.count = 0;
        },
        increaseByNumber: (state, action)=>{
            state.count = state.count + action.payload;
        },
    }
})


export const {increment, decrement, reset, increaseByNumber} = counterSlice.actions;

export default counterSlice.reducer;