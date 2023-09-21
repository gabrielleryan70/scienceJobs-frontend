import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Europe = () => {
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
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/france-jobs/" >France</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3163/paris-sciences-et-lettres/">Paris

                Sciences et Lettres</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3158/ecole-polytechnique/">Ecole Polytechnique</a></li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Sweden-jobs/">Sweden</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3165/karolinska-institute/">Karolinska Institute</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Germany-jobs/">Germany</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3160/heidelberg-university/">Heidelberg
                University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3150/lmu-munich-ludwig-maximilians-universitat/">LMU
                Munich (Ludwig Maximilians Universität München)</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/10702/technische-uiniversität-münchen/">Technische Universität München</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Denmark-jobs/">Denmark</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3156/the-university-of-copenhagen/">University of
                Copenhagen</a>
              </li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Switzerland-jobs/">Switzerland</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3132/ath-zurich/">ETH
                Zurich</a></li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Belgium-jobs/">Belgium</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3159/ku-leuven/">KU Leuven</a></li>
            </ul>


            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Netherlands-jobs/">Netherlands</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3847/delft-university-of-technology/">Delft University of Technology</a>
              </li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Italy-jobs/">Italy</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12015/University-of-Bologna/">University of Bologna</a></li>

              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/Spain-jobs/">Spain</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12195/universitat-de-barcelona/">Universitat de Barcelona</a></li>

            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Europe