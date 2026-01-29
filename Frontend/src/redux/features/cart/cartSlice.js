import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
   
}

const  cartSlice = createSlice({
    name: 'cart',
    initialState : initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
                   alert('Item added to cart');
            }
        },
        removeFromCart: (state, action) =>{
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id )
        },
        clearCart: (state) =>{
             state.cartItems = []
        }
    }
})

// export const actions

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;