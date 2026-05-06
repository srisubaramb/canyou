import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users : []
}
const userSlice = createSlice({
	name : 'users',
	initialState :  initialState,
	reducers : {
		addUsers : (state, action ) => {
			state.users.push(action.payload)
		},
		updateUsers : (state, action) => {
			state.users = state.users.map(user => action.payload.id === user.id ? action.payload.userDetails : user)
		},
		deleteUsers : (state, action) => {
			state.users = state.users.filter(user => user.id != action.payload.id)
		}
	}
})

export const {addUsers , updateUsers , deleteUsers} = userSlice.actions
export default userSlice.reducer