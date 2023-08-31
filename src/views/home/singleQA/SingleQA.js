import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useGetSingleQAQuery,
} from '../../../store/apiSlice'
const SingleQA = () => {

  let content
  const id = useSelector((state) => state.posts.id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetSingleQAQuery(id)

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    console.log(data)
    const { logo, company_name, website, custom_fields,location } = data
 
    content = (
      <div className='flex w-full flex-col font-bold text-xl'>
        <div className="bg-white p-6 shadow-md rounded-md mx-auto max-w-1280">
          <div className="bg-white p-6">
            <div className="flex justify-between gap-2">
              <div className="bg-white w-36 h-36 flex items-center justify-center shadow-md rounded-lg overflow-hidden">
                <img
                  className="max-w-full max-h-full"
                  src={logo}
                  alt="Company Logo"
                />
              </div>
              <div className="w-3/4 flex flex-col">
                <h1 className="text-gray-500 text-2xl font-semibold">
                  {company_name}
                </h1>
                <ul className="mt-2 text-gray-500">
                  <li>{location} {custom_fields[4].value}</li>
                  <li>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {website}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 其他内容 */}
          </div>
        </div>
      </div >
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default SingleQA
