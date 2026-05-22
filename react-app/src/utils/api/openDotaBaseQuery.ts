import {fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APP_ENV from "../../env";

export const openDotaBaseQuery = (endpoint: string) => {
    return fetchBaseQuery({
        baseUrl: `${APP_ENV.OPEN_DOTA_BASE_URL}/api/${endpoint}`,
    });
}