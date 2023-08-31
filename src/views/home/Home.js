import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MostRecentQA from './mostRecentQA/MostRecentQA'
import SingleQA from './singleQA/SingleQA'
const Home = () => {
  
  return (
    <div className='flex justify-between w-full h-full'>
      <SingleQA /> 
    </div>
  )
}
export default Home
