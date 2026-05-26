import {createApi} from "@reduxjs/toolkit/query/react";
import type {INews} from "../model/INews.ts";
import {apiBaseQuery} from "../../../utils/api/apiBaseQuery.ts";


export const newsApi= createApi({
    reducerPath: 'newsApi',
    baseQuery: apiBaseQuery("news"),
    endpoints: (builder) => ({

        getNews: builder.query<INews[], void>({
            query: () => {
                return {
                    url: '',
                    method: 'GET',
                }
            },
        }),

    })
});

export const {
    useGetNewsQuery,
} = newsApi;