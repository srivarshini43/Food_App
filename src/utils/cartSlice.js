import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({     // createSlice returns an object taht has actions and reducers and stored inside cartSlice.
    name:"cart",
    initialState:{
        items:[], //initially the cart is empty so empty array
    },
    reducers:{                             // this is a reducer object, takes actions and reducer functions
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0; //make the array as zero
        },
    }
});

export const{addItem,removeItem,clearCart}=cartSlice.actions; //taking out the action individually and exporting
export default cartSlice.reducer;