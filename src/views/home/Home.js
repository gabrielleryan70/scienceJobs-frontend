import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MostRecentQA from './mostRecentQA/MostRecentQA'
import SingleQA from './singleQA/SingleQA'
const Home = () => {
  
  return (
    <div className='flex justify-between w-full h-full'>
      <SingleQA /> 
   
      <div className='w-4/12 border-solid border border-black-900 max-h-screen overflow-y'>
        <MostRecentQA />
      </div>
    </div>
  )
}
export default Home
