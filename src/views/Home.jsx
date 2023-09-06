import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
const Home = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col items-center mt-16">
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/ScienceJobsLogo.png"
          alt="Google Logo"
          className="w-[30rem] "
        />
        <div className="flex mt-5 border rounded-lg p-2 shadow-md w-3/4">
          <input
            type="text"
            className="flex-grow px-4 py-2 focus:outline-none"
            placeholder="Jobs Search"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Search In Your Country
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col px-[10rem] ">
        <h2 className="text-xl text-orange-500 font-extrabold">REGION HOME PAGES</h2>
      
      <div className="grid grid-cols-4 gap-4 py-5 text-left">
        <a href="https://academicjobs.com/usa/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold  ">
          United States
        </a>
        <a href="https://academicjobs.com/australia/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          Australia
        </a>
        <a href="https://academicjobs.com/uk/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          United Kingdom
        </a>
        <a href="https://academicjobs.com/canada/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          Canada
        </a>
        <a href="https://academicjobs.com/newzealand/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">New Zealand
        </a>
        <a href="https://academicjobs.com/europe/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          Europe
        </a>
        <a href="https://academicjobs.com/india/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          India
        </a>
        <a href="https://academicjobs.com/asia/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          Asia
        </a>
        <a href="https://academicjobs.com/africa/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">Africa
        </a>
        <a href="https://academicjobs.com/middleeast/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          Middle East
        </a>
        <a href="https://academicjobs.com/southamerica/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          South America
        </a>
        <a href="https://academicjobs.com/jobs/other-jobs/" className="text-orange-500 hover:text-orange-600 text-lg font-semibold ">
          Other
        </a>
        </div>
      </div>
    </>
  )
}
export default Home
