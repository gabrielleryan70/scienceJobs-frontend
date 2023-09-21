import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import {
  useGetEmployerQuery,
} from '../store/apiSlice'
const Employer = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetEmployerQuery(id)
  let content
  if (isLoading) {
    content = (
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full space-x-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[440px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[360px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  } else if (isSuccess) {
    console.log(data)
    const { logo, company_name, website, custom_fields } = data
    content = (
      <article className="media bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" data-id="59972"
      >
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 mr-4">
            <img src={logo} alt="Catholic Education Services – Diocese of Cairns" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <a href="#" className="block text-blue-500 text-lg font-bold leading-tight hover:underline">hahaaaaaaaaa</a>
            <div className="hidden-xs mt-2">
              <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">{company_name}</div>
            <div className="text-gray-700">hahaaaaaa</div>
          </div>
          <div className="text-gray-700 text-sm">hahaaaaaaaaa</div>
        </div>
      </article>
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default Employer
