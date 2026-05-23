import {configureStore} from "@reduxjs/toolkit";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {heroesApi} from "../entityes/heroes/api/heroesApi.ts";
import {proMatchesApi} from "../entityes/proMatches/api/proMatchesApi.ts";


export const store = configureStore({
    reducer: {
        [heroesApi.reducerPath]: heroesApi.reducer,
        [proMatchesApi.reducerPath]: proMatchesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(heroesApi.middleware)
        .concat(proMatchesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;