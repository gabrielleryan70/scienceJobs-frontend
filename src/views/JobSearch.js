import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import JobList from './JobList'
import JobDetail from './JobDetail'
import {
  useGetJobsQuery,
} from '../store/apiSlice'
import {
  useGetJobSearchQuery,
} from '../store/apiSlice'
import { setJob, setSearchJobCriteria } from '../store/postsSlice';
const JobSearch = () => {
  const searchJobCriteria = useSelector((state) => state.posts.searchJobCriteria)
  const dispatch = useDispatch()
  const keyWordRef = useRef("")
  const locationRef = useRef("")
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetJobsQuery(searchJobCriteria)
  useEffect(() => {
    if (data) dispatch(setJob(data[0]));
  }, [data, dispatch]);
  let content
  if (isLoading) {
    content = (
      <div className='flex  w-full h-screen  justify-between'>
        <div role="status" class="w-[40%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
        <div role="status" class="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    if (data.length > 0) {
      console.log(data)
      content = (
        <div className='flex  w-full h-screen  justify-between'>
          <div className='overflow-y-auto w-[40%] h-screen' ><JobList data={data} /></div>
          <div className=' overflow-y-auto w-[60%] h-screen'><JobDetail /></div>
        </div>
      )
    } else {
      content = <p className='text-center text-2xl font-extrabold py-10'>Found No Job, Pls use other keyword.</p>
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    console.log(a)
    dispatch(setSearchJobCriteria(a))
  }
  return <div className='overflow-y w-full'>
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex items-center space-x-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="w-[41%] px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
              defaultValue={searchJobCriteria.q}
            />
            <input
              type="text"
              className="w-[41%] px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
              defaultValue={searchJobCriteria.l}
            />
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
              type="submit"
            >
              FIND JOBS
            </button>
          </form>
        </div>
      </div>
    </div>
    {content}
  </div>
}
export default JobSearch
