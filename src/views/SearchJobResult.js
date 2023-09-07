import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import JobList from './JobList'
import JobDetail from './JobDetail'
import {
  useGetSearchJobResultQuery,
} from '../store/apiSlice'
import { setSearchJobCriteria } from '../store/postsSlice';
const SearchJobResult = () => {
  const dispatch = useDispatch()
  const keyWordRef = useRef("")
  const locationRef = useRef("")
  let content
  content = (
    <div className='flex  w-full  justify-between'>
      <div className='overflow-y w-[40%]'><JobList /></div>
      <div className=' w-[60%]'><JobDetail /></div>
    </div>
  )
  return <div className='overflow-y w-full'>{content}</div>
}
export default SearchJobResult
