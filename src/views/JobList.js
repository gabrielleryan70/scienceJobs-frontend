import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setJob, setId, setStatusId } from '../store/postsSlice'
import Job from './Job'
const JobList = ({ data }) => {
  console.log('JobList')
  const dispatch = useDispatch()
  let content
  console.log(data)
  content =
    <div className='overflow-y w-full'>
      {data.map((job, index) => {
        const { id, title } = job;
        console.log(job)
        return (
          <div
            className={`font-bold ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
            onClick={() => dispatch(setJob(job))}
            key={id}
          >
            <Job job={job} />
          </div>
        );
      })}
      {/* < button type="button" className="load-more bg-white py-2 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100">
        Load more
      </button > */}
    </div>
  return  content 
}
export default JobList
