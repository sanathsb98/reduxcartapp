import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userName";
import searchSlice from "./features/searchSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        username : userReducer,
        search : searchSlice,
    }
})