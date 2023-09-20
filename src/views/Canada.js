import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import SingleQA from './SingleQA'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Canada = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs - The Number 1 job board for Higher Ed jobs, Top University Recruitment & College Jobs.</title>
        <meta name="description" content="Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily." />
        <meta name="keywords" content="Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs" />
      </Helmet>
      <SearchBox />
      <div className="blurb text-center py-8">
        <h1 className="text-[#f4a10c] font-bold text-2xl md:text-3xl lg:text-4xl">ALL YOUR BEST UNIVERSITY JOBS</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="font-semibold">Find the best academic positions and administrative jobs in higher ed. Search for academic jobs, college careers and faculty positions online.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
            <h2 class="text-2xl font-bold mb-5">All Higher Ed Jobs in Australia by University</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Alberta-jobs/">Alberta</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3837/university-of-alberta/">University of Alberta</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/12631/university-of-calgary/">University of Calgary</a></li>

            </ul>

            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Quebec-jobs/">Quebec</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3162/mcgill-university/">McGill University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3836/">Universite De
                Montreal</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3838/">University of
                Waterloo</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/12443/Laval-University/">Laval University</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Ontario-jobs/">Ontario</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3134/university-of-toronto/">University of
                Toronto</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3157/university-of-british-columbia/">University of
                British Columbia</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/10280/Simon-Fraser-University/">Simon Fraser University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3835/McMaster-University/">McMaster University</a></li>
            </ul>

            <ul>
              <a class="footer-nav__link ddd" href="#"></a>
              <a class="footer-nav__link ddd" href="#"></a>
              <a class="footer-nav__link ddd" href="#"></a>

              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/12910/university-of-Ottawa/">University of Ottawa</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/13421/York-University/">York University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/9836/Queens-University/">Queen's University</a></li>


            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Canada