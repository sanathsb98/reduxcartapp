import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartItems : [],
   cartTotalQuantity : 0,
   cartTotalAmount : 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                state.cartTotalAmount += action.payload.product_price
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                state.cartTotalAmount += action.payload.product_price
            }
        },
        removeFromCart(state, action){
            
            const itemIdToRemove = action.payload.id;
            const updatedCartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);
            state.cartItems = updatedCartItems;
            const amount = state.cartTotalAmount - action.payload.price;
            state.cartTotalAmount =  amount;
       
        }
    }
})

export const { addToCart } = cartSlice.actions;
export const {removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;