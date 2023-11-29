import {combineReducers, configureStore} from '@reduxjs/toolkit';
import quest from './slices/questSlise';
import filters from './slices/filtersSlice';
import leaderboard from './slices/leaderboard';
import user from './slices/user';
import {userApi} from './services/userApi';
import {questsApi} from './services/questsApi';
import {partnersApi} from './services/partnersApi';

export const store = configureStore({
	reducer: {
		quest,
		leaderboard,
		user,

		[userApi.reducerPath]: userApi.reducer,
		[questsApi.reducerPath]: questsApi.reducer,
		[partnersApi.reducerPath]: partnersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			userApi.middleware,
			questsApi.middleware,
			partnersApi.middleware
		),
});
