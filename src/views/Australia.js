import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
// import ReactPlayer from 'react-player/lazy'

const Australia = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full'>
      <h1 className='text-9xl'>Australia Page</h1>
    </div>
  )
}
export default Australia
