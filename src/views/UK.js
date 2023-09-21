import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Australia = () => {
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
              <a class="footer-nav__link ddd"
                href="https://academicjobs.com/jobs/?l=Australia&state=eNGLAND">England</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12635/">University of
                Cambridge</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3099/">University of
                Oxford</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12527/">University College
                London</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3129/">Imperial College
                London</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3153/">London School of
                Economics and Political Science</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3833/">University of
                Manchester</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12614/">University of
                Birmingham</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12797/">University of
                Leeds</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/NEW-SOUTH-WALES-Jobs">Scotland</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12681/">University of
                Edinburgh</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12713/">University of
                Glasgow</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12555/">University of
                Aberdeen</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/13005/">University of St
                Andrews</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12669/">University of
                Dundee</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/VICTORIA-ACADEMIC-Jobs">Wales</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/6252/">Cardiff University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/10538/">Swansea
                University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/13115/">Aberystwyth
                University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/13116/">Bangor University</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/states/jobs-in-tasmania">Northern
                Ireland</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/10799/">Queen's University
                Belfast</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/13098/">Ulster University</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Australia