import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const JobDetail = () => {
  const employer= useSelector((state) => state.posts.employer)
  const quillModules = {
    toolbar: false, // Set this to false to remove the toolbar
  };
  let content = <div className=''>Job Description is comming soon .... </div >
  const job = useSelector((state) => state.posts.job)
  console.log(job)
  console.log(employer)
  if (job) {
    
    const { logo, company_name, website, custom_fields } = employer
    const { title, location, activation_date, description, how_to_apply } = job
    content = (
      <div className=''>
        <div className="flex items-center p-4">
          <div className="w-1/4 pr-4">
            <img className="w-full" src={logo} alt={company_name} />
          </div>

          <div className="w-3/4">
            <h1 className="text-2xl font-bold mb-2">
              {title}
            </h1>

            <div className="mb-4">
              <a className="text-blue-500" href="https://teachingjobs.com.au/company/35/townsville-catholic-education-office/">{location}</a>
            </div>

            <div className="flex items-center">
              <a className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full" href={how_to_apply} data-toggle="modal" data-target="#apply-modal" data-href={how_to_apply} data-title="Apply to Specialist Teacher at Townsville Catholic Education Office" rel="nofollow">
                Apply Now
              </a>

              <div className="ml-4">
                <a className="text-blue-500" data-toggle="modal" data-target="#apply-modal" data-id="60078" title="Save" data-href="/saved-jobs/?id=60078&amp;action=save&amp;reload=✓" rel="nofollow" href="#"></a>
                <a tabIndex="-1" className="text-blue-500" role="button" rel="nofollow" aria-label="Share this job" data-original-title="" title=""></a>

              
              </div>
            </div>
          </div>
        </div>


        <ReactQuill value={description} modules={quillModules} />
      </div >
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default JobDetail
