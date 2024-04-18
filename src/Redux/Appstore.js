import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import Cartslice from "./Slices/Cartslice";
// import App from "../App";

const Appstore = configureStore({
    reducer: {
        cartlist:Cartslice
    }
})
export default Appstore