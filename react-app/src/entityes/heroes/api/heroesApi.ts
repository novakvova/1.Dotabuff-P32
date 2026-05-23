import {createApi} from "@reduxjs/toolkit/query/react";
import type {OpenDotaHero} from "../model/Iheroes.ts";
import {openDotaBaseQuery} from "../../../utils/api/openDotaBaseQuery.ts";


export const heroesApi= createApi({
    reducerPath: 'heroesApi',
    baseQuery: openDotaBaseQuery("heroStats"),
    endpoints: (builder) => ({

        getHeroes: builder.query<OpenDotaHero[], void>({
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
    useGetHeroesQuery,
} = heroesApi;