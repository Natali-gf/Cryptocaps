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
			query: (page = 1, limit = 2) => ({
				url: `/quests`,
				params: {
					// _page: page,
					// _limit: limit,
					purpose: 1,
					difficulty: 0,
				}
			})
		}),
		fetchQuestsFirst: build.query({
			query: (page = 1, limit = 2) => ({
				url: `/quests`,
				params: {
					// _page: page,
					// _limit: limit,
					purpose: 2,
					difficulty: 0,
				}
			})
		}),
		fetchQuestsNext: build.query({
			query: (page = 1, limit = 2) => ({
				url: `/quests`,
				params: {
					// _page: page,
					// _limit: limit,
					purpose: 3,
					difficulty: 1,
				}
			})
		}),
		fetchQuestsExplore: build.query({
			query: (page = 1, limit = 2) => ({
				url: `/quests`,
				params: {
					// _page: page,
					// _limit: limit,
					purpose: 4,
					difficulty: 2,
				}
			})
		}),
	})
})