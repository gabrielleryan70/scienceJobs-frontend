import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useGetJobsQuery,
} from '../store/apiSlice'
import { setJob, setId, setStatusId } from '../store/postsSlice'
const JobList = () => {
  console.log('JobList')
  const dispatch = useDispatch()

  const {
    data,
    isLoading,
    isSuccess,
  } = useGetJobsQuery(useSelector((state) => state.posts.searchJobCriteria))
  useEffect(() => {
    if(data)   dispatch(setJob(data[0]));
  }, [data, dispatch]);
  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    console.log(data)
    content = data.map((job, index) => {
      const { id, title } = job;
      return (
        <div
          className={`font-bold ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
          onClick={() => dispatch(setJob(job))}
          key={id}
        >
          {title}
        </div>
      );
    });
   // dispatch(setJob(data[0]))
  }
  return <div className='overflow-y'>{content}</div>
}
export default JobList
