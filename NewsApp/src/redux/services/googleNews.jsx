import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const googleNewsApi = createApi({
  reducerPath: 'googleNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getGoogleNews: builder.query({
      query: (keyword) => `news?keyword=${encodeURIComponent(keyword)}`,
    }),
  }),
});

export const { useGetGoogleNewsQuery } = googleNewsApi;
