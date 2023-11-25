import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import api, { baseUrl } from '../../api/api';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
	endpoints: (build) => ({
		fetchUser: build.query({
			query: () => ({
				url: `/users`,
				params: {
					id: '2',
				}
			})
		}),
		fetchAdmin: build.query({
			query: () => ({
				url: `/users`,
				params: {
					id: '1',
				}
			})
		}),
		fetchLeaders: build.query({
			query: () => ({
				url: `/users`,
				params: {
					_page: 1,
					_limit: 10,
					_sort: 'xp',
					_order: 'desc',
					isAdmin: false,
				}
			})
		})
	})
})