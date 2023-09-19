import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import JobList from './JobList'
import JobDetail from './JobDetail'
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import {
  useGetJobsQuery,
} from '../store/apiSlice'
import {
  useGetJobSearchQuery,
} from '../store/apiSlice'
import { useParams } from 'react-router-dom';
import { setJob, setSearchJobCriteria } from '../store/postsSlice';
import { Helmet } from "react-helmet";
const JobSearch = () => {
  const navigate = useNavigate()
  let q = "", l = ""
  const { name } = useParams();
  const location = useLocation();
  //console.log(location.state.l)
  const keyWordRef = useRef('')
  const locationRef = useRef('')
  let searchTerm = '';
  if (name) {
    q = name.replace(/-/g, ' ');
  } else if (location.state?.q || location.state?.l) {
    // alert(location.state.l)
    q = location.state.q || ''
    l = location.state.l || ''
  }
  useEffect(() => {
    keyWordRef.current.value = q
    locationRef.current.value = l
    window.scrollTo(0, 0)
  }, []);
  const dispatch = useDispatch()
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetJobsQuery({ q: q || 'job', l: l || '' })
  useEffect(() => {
    if (data) dispatch(setJob(data[0]));
  }, [data, dispatch]);
  let content
  if (isLoading) {
    content = (
      <div className='flex  w-full h-screen  justify-between'>
        <div role="status" className="w-[40%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    console.log(data)
    if (data.length > 0) {
      content = (
        <div className='flex  w-full h-screen  justify-between'>
          <div className='overflow-y-auto w-[40%] h-screen' ><JobList data={data} /></div>
          <div className=' overflow-y-auto w-[60%] h-screen'><JobDetail /></div>
        </div>
      )
    } else {
      content = <p className='text-center text-2xl font-bold py-10'>Found No Job, Pls use other keyword.</p>
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    console.log(a)
    //dispatch(setSearchJobCriteria(a))
    //alert()
    navigate("/JobSearch", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
    window.location.reload();
  }
  return <div className='overflow-y w-full'>
    <Helmet>
      <title>{name}</title>
      <meta name="description" content={name} />
      <meta name="keywords" content={name} />
    </Helmet>
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex items-center space-x-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="w-[41%] px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
              defaultValue={name}
            />
            <input
              type="text"
              className="w-[41%] px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#f4a10c] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
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
