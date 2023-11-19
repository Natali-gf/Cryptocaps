import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filters: {
		filters: [],
	},
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
			saveFilterValues: (state, action) => {
				state.filters = action.payload;
			},
    },
});

export const { saveFilterValues } = filtersSlice.actions;

export default filtersSlice.reducer;