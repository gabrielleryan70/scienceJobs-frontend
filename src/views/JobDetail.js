import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const JobDetail = () => {
  const quillModules = {
    toolbar: false, // Set this to false to remove the toolbar
  };
  let content = <div className=''>Job Description is comming soon .... </div >
  const job = useSelector((state) => state.posts.job)
  console.log(job)

  if (job) {
    const { description } = job
 
    content = (
      <div className=''>
        
        <ReactQuill value={description} modules={quillModules} />
      </div >
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default JobDetail
