import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const api_key = '591aed213451ce2076d82d9d5f4c8594';
export const apiSlice = createApi({
 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.academicjobs.com/',
      //'http://localhost:3500/',
    //'https://api.academicjobs.com/',
      // process.env.NODE_ENV === 'development'
      //   ? 'http://localhost:3500'
      //   : 'https://api.academicjobs.com/',

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
    getJobs: builder.query({
      query: (jobCriteria) => ({
        url: `job/`,
        method: 'POST',
        body:  jobCriteria ,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data.jobs
      },
      providesTags: ['jobs'],
      invalidatesTags: ['jobs'],
    }),
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
    getEmployer: builder.query({
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
    getSingleQA: builder.query({
      query: () => ({
        url: `employer/3739`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['employer'],
    }),
    getJobsByEmployer: builder.query({
      query: (id) => ({
        url: `job/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data.jobs
      },
      providesTags: ['jobs'],
    }),
  }),
})
export const {
  useGetSingleQAQuery,
  useGetEmployersQuery,
  useGetJobsByEmployerQuery,
  useGetJobsQuery,
  useGetEmployerQuery,
} = apiSlice





