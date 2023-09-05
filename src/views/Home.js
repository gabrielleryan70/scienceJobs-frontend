import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
// import ReactPlayer from 'react-player/lazy'
const Home = () => {
  return (
    <div className='w-full h-full'>
      <div className="flex justify-between  h-[600px]">
        <div className="bg-gray-800 w-[40%] relative z-10">
          <div className="left absolute top-0 left-0 flex flex-col gap-10 p-8 text-white">
            <div className="caption">
              <div className="heading text-5xl font-bold">ALL YOUR BEST</div>
              <div className="heading text-5xl font-bold">UNIVERSITY JOBS</div>
            </div>
            <p className="Text__StyledText-sc-19efksu-0 pages__Description-e0fmos-2 dGrteI">
              <span className="meet font-bold text-orange">Find the best academic positions and administrative jobs in higher ed. </span>
              Search for academic jobs, college careers, and faculty positions online. Jobs in higher ed, research, and science.
            </p>
            <div className="button-list flex">
              <div id="redirect" className="button fRVdno">
                Go to your country's Site
              </div>
            </div>
          </div>
        </div>
        <div className="w-[59%]">
          {/* <ReactPlayer
            url='https://player.vimeo.com/video/827136257?h=de24582070&badge=0&autoplay=1&loop=1&autopause=0&background=1&muted=1&poster=https://f000.backblazeb2.com/file/academicjobs1/homeVideoPic.png&player_id=0&app_id=58479'
            playing // This prop enables autoplay
            loop
            muted
            controls // You can include controls if needed
            width="100%"
            height="100%"
          /> */}
        </div>
      </div>

      <SingleQA />
    </div>
  )
}
export default Home
