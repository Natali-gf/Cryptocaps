import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from '../../api/api';

export const questsApi = createApi({
	reducerPath: 'questsApi',
	baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
	endpoints: (build) => ({
		fetchQuests: build.query({
			query: (status) => ({
				url: `/quests`,
				params: {
					status: status
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
		}),
		fetchQuestsBeginner: build.query({
			query: (page = 1, limit = 10) => ({
				url: `/quests`,
				params: {
					difficulty: 0,
					status: 1,
					_page: page,
					_limit: limit,
				}
			})
		}),
		fetchQuestsFirst: build.query({
			query: () => ({
				url: `/quests`,
				params: {
					difficulty: 0,
					status: 1
				}
			})
		}),
		fetchQuestsNext: build.query({
			query: () => ({
				url: `/quests`,
				params: {
					difficulty: 1,
					status: 1
				}
			})
		}),
		fetchQuestsExplore: build.query({
			query: () => ({
				url: `/quests`,
				params: {
					difficulty: 2,
					status: 1
				}
			})
		}),
	})
})