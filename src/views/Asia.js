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
              <a class="footer-nav__link ddd" href="#">Singapore</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3152/nanyang-technological-university-singapore/">Nanyang
                Technological University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3137/national-university-of-singapore/">National University of Singapore</a></li>
              <a class="footer-nav__link ddd" href="#">Malaysia</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/12499/Universiti-Malaya/">Universiti Malaya (UM)</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="#">China</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3133/peking-university/">Peking
                University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3840/tsinghua-university/">Tsinghua University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/7289/fudan-university/">Fudan University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/6876/shanghai-jiao Tong-university/">Shanghai Jiao Tong University</a></li>
            </ul>


            <ul>
              <a class="footer-nav__link ddd" href="#">Japan</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3155/university-of-tokyo/">University of Tokyo</a></li>



              <a class="footer-nav__link ddd" href="#">Indonesia</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/12068/the-university-of-indonesia/">The University of Indonesia</a></li>

              <a class="footer-nav__link ddd" href="#">Thailand</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/6615/chulalongkorn-university/">Chulalongkorn University</a></li>

            </ul>

            <ul>
              <a class="footer-nav__link ddd" href="#">Hong Kong</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3148/university-of-hong-kong/">University of Hong Kong</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3161/chinese-university-of-hong-kong/">Chinese University of
                Hong Kong</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3843/the-hong-kong-university-of-science-and-technology/">The Hong Kong University of Science and Technology</a></li>

              <a class="footer-nav__link ddd" href="#">South Korea</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/10119/seoul-national-university/">Seoul National University</a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Australia