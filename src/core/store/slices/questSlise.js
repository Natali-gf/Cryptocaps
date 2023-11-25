import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	questId: ''
};

export const questSlise = createSlice({
	name: 'quest',
	initialState,
	reducers: {
		setQuestId: (state, action) => {
			state.questId = action.payload;
		},
	},
});

export const { setQuestId } = questSlise.actions;

export default questSlise.reducer;