import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { setSearchJobCriteria } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
const Home = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (sessionStorage.getItem("location")) {
      a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
      console.log(a)
      dispatch(setSearchJobCriteria(a))
      navigate(`/searchJobResult`)
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66");
          const result = await response.json();
          return result.country.name
        } catch (error) {
          return ""
        }
      }
      fetchLocation1()
        .then(country => {
          //ar newUrl = `https://academicjobs.com/`
          sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          console.log(a)
          dispatch(setSearchJobCriteria(a))
          navigate(`/searchJobResult`)
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  };
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col items-center  justify-center ">
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/ScienceJobsLogo.png"
          alt="Google Logo"
          className="w-[20rem] mb-[1rem] "
        />
        <div className='w-full flex justify-center'>
          <form className=' flex flex-col  items-end w-full' onSubmit={handleFormSubmit}>
            <div className="w-full flex mt-5 border rounded-lg p-2 shadow-md ">
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none"
                placeholder="Jobs Search"
                ref={keyWordRef}
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                type="submit"
              >
                Search In Your Country
              </button>
            </div>
            <h2 className='underline text-blue-500'
              onClick={() => {
                const a = {}
                if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
                dispatch(setSearchJobCriteria(a))
                navigate(`/searchJobResult`)
              }}
            >Or Search Globally</h2>
          </form >
        </div>
      </div>
      <div className="bg-white flex flex-col px-[10rem] ">
        <h2 className="text-xl text-blue-500 font-extrabold">REGION HOME PAGES</h2>
        <div className="grid grid-cols-4 gap-4 py-5 text-left">
          <a href="https://academicjobs.com/usa/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold  ">
            United States
          </a>
          <a href="https://academicjobs.com/australia/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            Australia
          </a>
          <a href="https://academicjobs.com/uk/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            United Kingdom
          </a>
          <a href="https://academicjobs.com/canada/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            Canada
          </a>
          <a href="https://academicjobs.com/newzealand/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">New Zealand
          </a>
          <a href="https://academicjobs.com/europe/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            Europe
          </a>
          <a href="https://academicjobs.com/india/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            India
          </a>
          <a href="https://academicjobs.com/asia/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            Asia
          </a>
          <a href="https://academicjobs.com/africa/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">Africa
          </a>
          <a href="https://academicjobs.com/middleeast/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            Middle East
          </a>
          <a href="https://academicjobs.com/southamerica/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            South America
          </a>
          <a href="https://academicjobs.com/jobs/other-jobs/" className="text-blue-500 hover:text-blue-600 text-lg font-semibold ">
            Other
          </a>
        </div>
      </div>
    </>
  )
}
export default Home
