// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import api from '../../api/api';
// import { Status, StatusCode } from '../../constants/Status';

// const initialState = {
// 	status: 0,
// 	error: null,
// 	questsAll: [],
// 	questsAll: []
// };

// export const fetchQuests = createAsyncThunk(
// 	'quests/fetchQuests',
// 	async function(param, {rejectWithValue}) {
// 		try {
// 			const response = await api.get(`/quests${param ? '?' + param : ''}`);

// 			if(response.status < StatusCode.Successful
// 				|| response.status >= StatusCode.Redirection) {
// 				throw new Error('Error! Try later.');
// 			}

// 			return response.data;

// 		} catch (error) {
// 			return rejectWithValue(error);
// 		}
// 	}
// );

// export const questsSlice = createSlice({
// 	name: 'quests',
// 	initialState,
// 	reducers: {
// 		// saveFilterValues: (state, action) => {
// 		// 	state.leaders = action.payload;
// 		// },
// 	},
// 	extraReducers: {
// 		[fetchQuests.pending]: (state) => {
// 			state.status = Status.Loading;
// 			state.error = null;
// 		},
// 		[fetchQuests.fulfilled]: (state, action) => {
// 			state.status = Status.Resolved;
// 			state.leaders = action.payload;
// 		},
// 		[fetchQuests.rejected]: (state, action) => {
// 			state.status = Status.Rejected;
// 			state.error = action.payload.message;
// 		},
// 	}
// });

// // export const {  } = leaderboardSlice.actions;
// // export const leaders = (state) => state;

// export default questsSlice.reducer;