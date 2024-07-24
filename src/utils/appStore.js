import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
         reducer:{      //big reducer ie our app reducer
            cart:cartReducer,   //small reducers of our slices
         },
});
export default appStore;