import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useGetEmployerQuery,
} from '../store/apiSlice'
const Job = ({job}) => {
  const { employer_id, title } = job
  console.log(employer_id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetEmployerQuery(employer_id)

  let content 

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    console.log(data)
    const { logo, company_name, website, custom_fields, location } = data
    content = (
      <article className="media bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-lg" data-id="59972">
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 mr-4">
            <img src={logo} alt="Catholic Education Services – Diocese of Cairns" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <a href="https://teachingjobs.com.au/job/59972/teacher-design-industrial-technologies-mount-st-bernard-college-herberton/" className="block text-blue-500 text-lg font-bold leading-tight hover:underline">Teacher - Design &amp; Industrial Technologies - Mount St Bernard College, Herberton</a>
            <div className="hidden-xs mt-2">
              <span className="inline-block bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">Catholic Education Services – Diocese of Cairns</div>
            <div className="text-gray-700">Mount St Bernard College - Herberton, QLD | Far North Queensland Tableland Region</div>
          </div>
          <div className="text-gray-700 text-sm">11 Sep, 2023</div>
        </div>
      </article>

    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default Job
