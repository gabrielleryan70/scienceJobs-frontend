import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { setJob, setId, setEmployer } from '../store/postsSlice'
import {
  useGetEmployerQuery,
} from '../store/apiSlice'
const Job = ({ job }) => {
  const dispatch = useDispatch()
  const { employer_id, title } = job
  console.log(employer_id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetEmployerQuery(employer_id)
  const myId= useSelector((state) => state.posts.job.employer_id)

 
  let content 

  if (isLoading) {
    content = (

      <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[400px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[440px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[360px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>


    )
  } else if (isSuccess) {
    console.log(data)
    console.log(job)
    if (employer_id == myId) {
       dispatch(setEmployer(data));
    }
    const { logo, company_name, website, custom_fields } = data
    const { title, location, activation_date, how_to_apply } = job

    content = (
      <article className="media bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" data-id="59972"
        onClick={() => {
          dispatch(setEmployer(data))
          dispatch(setJob(job))
        }}
      >
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 mr-4">
            <img src={logo} alt="Catholic Education Services – Diocese of Cairns" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <a href="#" className="block text-blue-500 text-lg font-bold leading-tight hover:underline">{title}</a>
            <div className="hidden-xs mt-2">
              <span className="inline-block bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">{company_name}</div>
            <div className="text-gray-700">{location}</div>
          </div>
          <div className="text-gray-700 text-sm">{activation_date}</div>
        </div>
      </article>

    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default Job
