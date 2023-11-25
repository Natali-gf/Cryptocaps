import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from '../../api/api';

export const questsApi = createApi({
	reducerPath: 'questsApi',
	baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
	endpoints: (build) => ({
		fetchQuests: build.query({
			query: (page = 1 ,limit = 11) => ({
				url: `/quests`,
				params: {
					_page: page,
					_limit: limit,
				}
			})
		}),
		fetchQuestById: build.query({
			query: (id) => ({
				url: `/quests`,
				params: {
					id: id,
				}
			})
		})
	})
})