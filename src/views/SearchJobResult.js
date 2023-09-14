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
  useGetSearchJobResultQuery,
} from '../store/apiSlice'
import { setSearchJobCriteria } from '../store/postsSlice';
const SearchJobResult = () => {
  const dispatch = useDispatch()
  const keyWordRef = useRef("")
  const locationRef = useRef("")
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetJobsQuery(useSelector((state) => state.posts.searchJobCriteria))

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    if (data.length > 0) {
      console.log(data)
      content = (
        <div className='flex  w-full  justify-between'>
          <div className='overflow-y w-[40%]' ><JobList data={data} /></div>
          <div className=' w-[60%]'><JobDetail /></div>
        </div>
      )
    } else {
      content = <p>Found No Job, Pls use other keyword.</p>
    }

  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default SearchJobResult
