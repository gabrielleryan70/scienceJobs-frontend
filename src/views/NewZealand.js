import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import SingleQA from './SingleQA'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const MiddleEast = () => {
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
              <li><a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/act-jobs/">ACT</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3739/australian-national-university-anu/">Australian
                National University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3821/University-of-Canberra/">University of Canberra</a>
              </li>
              <li><a class="footer-nav__link ddd" href="https://academicjobs.com/NEW-SOUTH-WALES-jobs/">New South
                Wales</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3171/the-university-of-sydney/">The University of
                Sydney</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3738/university-of-new-south-wales-unsw/">University of
                New South Wales</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3855/Charles-Sturt-University/">Charles Sturt
                University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3853/Australian-Catholic-University">Australian
                Catholic University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3862/Southern-Cross-University/">Southern Cross
                University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3864/University-of-Technology-Sydney/">University of
                Technology, Sydney</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3881/Macquarie-University/">Macquarie University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3209/University-of-New-England/">University of New
                England England</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3863/University-of-Newcastle/">University of
                Newcastle</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3865/University-of-Western-Sydney/">University of Western
                Sydney</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3866/University-of-Wollongong/">University of
                Wollongong</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/VICTORIA-ACADEMIC/
                                ">Victoria</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/The-University-of-Melbourne/
                                    ">The University of Melbourne</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/Monash-University/
                                    ">Monash University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3871/Victoria-University/
                                ">Victoria University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3872/University-of-Divinity/
                                ">University of Divinity</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3870/Swimburne-University-of-Technology/
                                ">Swimburne University of Technology</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3869/RMIT-University/
                                ">RMIT University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3868/La-Trobe-University/
                                ">La Trobe University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/company/3856/Deakin-University/
                                ">Deakin University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3787/Federation-University/
                                ">Federation University Australia</a></li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/states/jobs-in-tasmania
                            ">Tasmania</a>
              <li><a class="footer-nav__link" href="hhttps://academicjobs.com/company/3867/University-of-Tasmania/
                                ">The University of Tasmania</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/Queensland-jobs/
                                ">Queensland</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3785/Bond-University/
                                ">Bond University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3172/University-of-Queensland/">The University of
                Queensland</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3854/CQUniversity/">CQUniversity</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3787/Federation-University-Australia/">Federation
                University Australia</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3860/Griffith-University/">Griffith University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3857/James-Cook-University/">James Cook University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3861/University-of-Southern-Queensland/">University of
                Southern Queensland</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3786/Queensland-University-of-Technology/">Queensland
                University of Technology</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3859/University-of-Sunshine-Coast/">University of
                Sunshine Coast</a></li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/NORTHERN-TERRITORY-jobs/">Northern
                Territory</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3880/Charles-Darwin-University/">Charles Darwin
                University</a>
              </li>
            </ul>
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/states/jobs-in-south-australia/">South
                Australia</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3737/The-University-of-Adelaide/">The University of
                Adelaide</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3146/Carnegie-Mellon-University/">Carnegie Mellon
                University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3875/Torrens-University-Australia/">Torrens University
                Australia</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3874/University-of-South-Australia/">University of South
                Australia</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3873/Flinders-University/">Flinders University</a>
              </li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/WESTERN-AUSTRALIA-jobs/">Western
                Australia</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3173/University-of-Western-Australia/">The University of
                Western Australia</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3879/University-of-Notre-Dame/">University of Notre
                Dame</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3878/Murdoch-University/">Murdoch
                University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3877/Edith-Cowan-University/">Edith Cowan University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3876/Curtin-University/">Curtin
                University</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MiddleEast