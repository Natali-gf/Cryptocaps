import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from '../../api/api';

export const partnersApi = createApi({
	reducerPath: 'partnersApi',
	baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
	endpoints: (build) => ({
		fetchPartners: build.query({
			query: ({sort, order, limit = 3, page = 1}) => ({
				url: `/partners`,
				params: {
					_sort: sort,
					_order: order,
					_page: page,
					_limit: limit,
				}
			})
		}),
		fetchPartnerById: build.query({
			query: (id) => ({
				url: `/partners`,
				params: {
					id: id,
				}
			})
		}),
	})
})