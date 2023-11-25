import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { Status, StatusCode } from '../../constants/Status';

const initialState = {
	status: 0,
	error: null,
	leaders: []
};

export const fetchLeaderboard = createAsyncThunk(
	'leaderboard/fetchLeaderboard',
	async function(_, {rejectWithValue}) {
		try {
			const response = await api.get(`/users?_sort=xp&_order=desc`);

			if(response.status < StatusCode.Successful
				|| response.status >= StatusCode.Redirection) {
				throw new Error('Error! Try later.');
			}

			return response.data;

		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const leaderboardSlice = createSlice({
	name: 'leaderboard',
	initialState,
	reducers: {
		// saveFilterValues: (state, action) => {
		// 	state.leaders = action.payload;
		// },
	},
	extraReducers: {
		[fetchLeaderboard.pending]: (state) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchLeaderboard.fulfilled]: (state, action) => {
			state.status = Status.Resolved;
			state.leaders = action.payload;
		},
		[fetchLeaderboard.rejected]: (state, action) => {
			state.status = Status.Rejected;
			state.error = action.payload.message;
		},
	}
});

// export const {  } = leaderboardSlice.actions;
export const leaders = (state) => state;

export default leaderboardSlice.reducer;