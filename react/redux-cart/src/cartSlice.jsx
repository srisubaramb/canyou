import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cart : []
}
export const cartSlice = createSlice({
	name: 'cart',
	initialState : initialState,
	reducers: {
		addToCart : (state, action) => {
			state.cart.push(action.payload)
		} ,
		removeFromCart : () => {

		}
	}
})
export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer