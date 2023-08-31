import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const api_key = '591aed213451ce2076d82d9d5f4c8594';
export const apiSlice = createApi({
 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://employer-api.onrender.com/',//'https://employer-api.onrender.com/',//'http://localhost:3500/',
    credentials: 'same-origin',
    mode: "cors",
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*')

      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['employers', 'employer','job','jobs'],
  endpoints: (builder) => ({
    getEmployers: builder.query({
      query: () =>
      `employer`,
      mode: "cors",
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data.employers
      },
      providesTags: ['employers'],
    }),
    getSingleQA: builder.query({
      query: (id) => ({
        url: `employer/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['employer'],
    }),
  }),
})
export const {
  useGetSingleQAQuery,
  useGetEmployersQuery,
} = apiSlice





