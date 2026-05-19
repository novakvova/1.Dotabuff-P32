import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../../../utils/api/createBaseQuery.ts";
import type {IBook} from "../model/IBook.ts";

export const bookApi= createApi({
    reducerPath: 'bookApi',
    baseQuery: createBaseQuery("books"),
    tagTypes: ['Books'],
    endpoints: (builder) => ({

        getBooks: builder.query<IBook[], void>({
            query: () => {
                return {
                    url: '',
                    method: 'GET',
                }
            },
            providesTags: ["Books"]
        }),

    })
});

export const {
    useGetBooksQuery,
} = bookApi;