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
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=EGYPT">Egypt</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/6226/">Cairo University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/5798/">American University in Cairo</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/5713/">Alexandria University</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=SOUTH%20AFRICA">South
                Africa</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12637/">University of Cape Town</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/13133/">University of the
                Witwatersrand</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/13008/">Stellenbosch University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12935/">University of Pretoria</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12787/">University of KwaZulu-Natal</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=NIGERIA">Nigeria</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12743/">University of Ibadan</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/6388/">Ahmadu Bello University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12789/">University of Lagos</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/9482/">Obafemi Awolowo University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12881/">University of Nigeria, Nsukka</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=KENYA">Kenya</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12866/">University of Nairobi</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/8470/">Kenyatta University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/10485/">Strathmore University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/9051/">Moi University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/7048/">Egerton University</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=MOROCCO">Morocco</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12453/">University Mohammed V of
                Rabat</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12262/">Cadi Ayyad University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12426/">Hassan II University of
                Casablanca</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=GHANA">Ghana</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12711/">University of Ghana</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/8649/">Kwame Nkrumah University of
                Science and Technology</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12636/">University of Cape Coast</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=SENEGAL">Senegal</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12272/">Cheikh Anta Diop University</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=TUNISIA">Tunisia</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12393/">University of Tunis El Manar</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12370/">University of Sfax</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/12303/">University of Carthage</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/?l=Australia&state=UGANDA">Uganda</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/8875/">Makerere University</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/10962/">Uganda Martyrs University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/8660/">Kyambogo University</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Australia