import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice/cartSlice;"

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})