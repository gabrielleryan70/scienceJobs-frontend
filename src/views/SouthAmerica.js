import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import SingleQA from './SingleQA'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const SouthAmerica = () => {
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
              <a class="footer-nav__link ddd" href="#">Brazil</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11463/">University of São Paulo</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11490/">University of Campinas</a>
              </li>

              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11544/">Universidade Federal do Rio Grande do Sul</a>
              </li>

              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11526/">Universidade Federal de São Paulo (UNIFESP)</a>
              </li>



            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="#">Argentina</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11196/">Universidad de Buenos
                Aires</a>
              </li>

              <a class="footer-nav__link ddd" href="#">Colombia</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11308/">Universidad de los
                Andes</a></li>

              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11648/">Icesi University</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="#">Chile</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/9739/">Pontificia Universidad
                Catolica de Chile</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11012/">Universidad Alberto
                Hurtado</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11384/">Universidad de
                Santiago de Chile</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11189/">University of Antofagasta</a></li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="#">Peru</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11010/">Universidad Alas
                Peruanas</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/11856/">Universidad Peruana Cayetano Heredia</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SouthAmerica