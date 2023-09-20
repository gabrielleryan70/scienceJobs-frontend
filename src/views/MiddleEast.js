import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import SingleQA from './SingleQA'
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
              <a class="footer-nav__link ddd" href="#">Saudi Arabia</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/8522/king-saud-university-saudi-arabia/">King Saud
                University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/8513/king-abdullah-university-of-science-and-technology-saudi-arabia/">King
                Abdullah University of Science and Technology</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/8512/king-abdul-aziz-university-saudi-arabia/">King
                Abdul Aziz University</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="#">UAE</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/8481/khalifa-university-uae/">Khalifa University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/10985/united-arab-emirates-university-uae/">United
                Arab Emirates University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/5799/american-university-in-dubai-uae/">American
                University in Dubai</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/5815/american-university-of-sharjah-uae/">American
                University of Sharjah</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="#">Lebanon</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/5804/american-university-of-beirut-lebanon/">American
                University of Beirut</a></li>
              <a class="footer-nav__link ddd" href="#">Jordan</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/12763/university-of-jordan-jordan/">University of
                Jordan</a></li>
              <a class="footer-nav__link ddd" href="#">Qatar</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/12944/qatar-university-qatar/">Qatar University</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Australia