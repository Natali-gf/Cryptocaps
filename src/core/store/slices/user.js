import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { Status, StatusCode } from '../../constants/Status';

const initialState = {
	status: 0,
	error: null,
	user: '',
	isAdmin: null
};

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async function(_, {rejectWithValue, getState}) {
		// const user = getState().leaderboard.leaders;

		// return user[2]
		try {
			const response = await api.get(`/users?limit=1/`);

			if(response.status < StatusCode.Successful
				|| response.status >= StatusCode.Redirection) {
				throw new Error('Error! Try later.');
			}

			return response.data[0];

		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// saveFilterValues: (state, action) => {
		// 	state.leaders = action.payload;
		// },
	},
	extraReducers: {
		[fetchUser.pending]: (state) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchUser.fulfilled]: (state, action) => {
			state.status = Status.Resolved;
			state.user = action.payload;
			state.isAdmin = action.payload.isAdmin;
		},
		[fetchUser.rejected]: (state, action) => {
			state.status = Status.Rejected;
			state.error = action.payload.message;
		},
	}
});

// export const {  } = leaderboardSlice.actions;
// export const leaders = (state) => state;

export default userSlice.reducer;