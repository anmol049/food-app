import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const Cartslice = createSlice({
    name: "cart",
    initialState:{
        item: []
    },
    reducers:{
        additem:(state,action)=>{
            state.item.push(action.payload)
        },
        deleteitem:(state,action)=>{
            // state.item = state.item.filter(item=>)
            state.item.splice(action.payload,1)


        },
        clearcart:(state,action)=>{
            state.item.length = 0;

        },
    }
})
export const{additem,deleteitem,clearcart} =  Cartslice.actions
export default  Cartslice.reducer;