import {createApi} from "@reduxjs/toolkit/query/react";
import {openDotaBaseQuery} from "../../../utils/api/openDotaBaseQuery.ts";
import type {IProMatches} from "../model/IProMatches.tsx";


export const proMatchesApi= createApi({
    reducerPath: 'matchesApi',
    baseQuery: openDotaBaseQuery("proMatches"),
    endpoints: (builder) => ({

        getProMatches: builder.query<IProMatches[], void>({
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
    useGetProMatchesQuery,
} = proMatchesApi;