import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	authorization: false,
}

export const statePopupWindow = createSlice({
	name: 'statePopupWindow',
	initialState,
	reducers: {
		showAuthorization(state, action) {
			state.authorization = action.payload;
		},
	},
})

export const { showAuthorization } = statePopupWindow.actions

export default statePopupWindow.reducer