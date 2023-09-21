import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
// import ReactPlayer from 'react-player/lazy'
const FindEmployers = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full'>
      <div className="region-container bg-white">
        <h2 className="text-2xl font-bold py-6 px-28 bg-[#f4a10c] text-black">UNITED STATES</h2>
        <div className=" grid grid-cols-4 gap-10 p-7">
          <ul>
            <Link to="https://academicjobs.com/jobs/california-jobs/">California</Link>
            <li><Link to="/Employer/3101">Stanford University</Link></li>
            <li><Link to="/JobSearch/california-institute/">California Institute
              of Technology</Link></li>
            <li><Link to="/JobSearch/university-of-california-san-francisco/">University
              of California - San Francisco</Link></li>
            <li><Link to="/JobSearch/university-of-southern-california/">University
              of Southern California</Link></li>
            <li><Link to="/JobSearch/university-of-california-berkeley/">University
              of California - Berkeley</Link></li>
            <li><Link to="/JobSearch/university-of-california-los-angeles/">University
              of California - Los Angeles</Link></li>
            <li><Link to="/JobSearch/university-of-california-san-diego/">University
              of California - San Diego</Link></li>
            <li><Link to="/JobSearch/university-of-california-davis/">University
              of California - Davis</Link></li>
            <li><Link to="/JobSearch/university-of-california-irvine">University
              of California - Irvine</Link></li>
            <li><Link to="/JobSearch/university-of-california-santa-barbara/">University
              of California - Santa Barbara</Link></li>
            <li><Link to="/JobSearch/university-of-california-santa-cruz/">University
              of California - Santa Cruz</Link></li>
            <li><Link to="/JobSearch/university-of-california-Rrverside/">University
              of California - Riverside</Link></li>
            <li><Link to="/JobSearch/california-state-university-stanislaus/">California
              State University Stanislaus</Link></li>
            <li><Link to="/JobSearch/cal-poly-pomona/">Cal Poly Pomona</Link></li>
            <li><Link to="/JobSearch/california-state-university-monterey-bay/">California
              State University, Monterey Bay</Link></li>
            <li><Link to="/JobSearch/caltech/">Caltech</Link>
            </li>
            <li><Link to="/JobSearch/grossmont-cuyamaca-community-college-district/">Grossmont–Cuyamaca
              Community College District</Link></li>
            <li><Link to="/JobSearch/northeastern-university/">Northeastern
              University</Link>
            </li>
            <li><Link to="/JobSearch/loyola-marymount-university/">Loyola
              Marymount University</Link></li>
            <li><Link to="/JobSearch/palomar-college/">Palomar College</Link></li>
            <li><Link to="/JobSearch/san-diego-state-university/">San Diego State
              University</Link></li>
            <li><Link to="/JobSearch/saint-mary-s-college-of-california/">Saint
              Mary's College of California</Link></li>
            <li><Link to="/JobSearch/university-of-california-office-of-the-president/">University
              of California Office of the President</Link></li>
          </ul>
          <ul>
            <Link to="https://academicjobs.com/jobs/massachusetts-jobs/">Massachusetts</Link>
            <li><Link to="/JobSearch/massachusetts-institute-of-technology/">Massachusetts
              Institute of Technology</Link></li>
            <li><Link to="/JobSearch/harvard-university/">Harvard University</Link>
            </li>
            <li><Link to="/JobSearch/boston-university/">Boston University</Link>
            </li>
            <li><Link to="/JobSearch/boston-college/">Boston College</Link>
            </li>
            <li><Link to="/JobSearch/tufts-university/">Tufts University</Link>
            </li>
            <li><Link to="/JobSearch/northeastern-university/">Northeastern
              University</Link>
            </li>
            <li><Link to="/JobSearch/brandeis-university/">Brandeis
              University</Link></li>
            <li><Link to="/JobSearch/anna-jaques-hospital/">Anna Jaques
              Hospital</Link></li>
            <li><Link to="/JobSearch/dana-farber-cancer-institute/">Dana-Farber
              Cancer Institute</Link></li>
            <Link to="https://academicjobs.com/jobs/Georgia-jobs/">Georgia</Link>
            <li><Link to="/JobSearch/emory-university/">Emory University</Link>
            </li>
            <li><Link to="/JobSearch/georgia-institute-of-technology/">Georgia
              Institute of Technology</Link></li>
            <Link to="https://academicjobs.com/florida-Jobs/">Florida</Link>
            <li><Link to="/JobSearch/university-of-miami/">University of
              Miami</Link>
            </li>
            <li><Link to="/JobSearch/miami-university/">Miami University</Link>
            </li>
            <li><Link to="/JobSearch/university-of-florida/">University of
              Florida</Link>
            </li>
            <Link to="https://academicjobs.com/north-carolina-jobs/">North
              Carolina</Link>
            <li><Link to="/JobSearch/duke-university/">Duke University</Link>
            </li>
            <li><Link to="/JobSearch/university-of-north-carolina/">University of
              North Carolina</Link>
            </li>
            <li><Link to="/JobSearch/the-university-of-north-carolina-at-chapel-hill/">University
              of North Carolina at Chapel Hill</Link>
            </li>
            <li><Link to="/JobSearch/university-of-north-carolina-wilmington/">University
              of North Carolina Wilmington</Link>
            </li>
          </ul>
          <ul>
            <Link to="https://academicjobs.com/jobs/new-york-jobs/">New york</Link>
            <li><Link to="/JobSearch/columbia-university/">Columbia University</Link></li>
            <li><Link to="/JobSearch/new-york-university-nyu/">New York
              University NYU</Link></li>
            <li><Link to="/JobSearch/Cornell-University/">Cornell University</Link>
            </li>
            <li><Link to="/JobSearch/Brown-University">Brown University</Link>
            </li>
            <li><Link to="/JobSearch/University-of-Rochester
                                                            ">University of Rochester</Link></li>
            <li><Link to="/JobSearch/fordham-university/">Fordham University</Link>
            </li>
            <li><Link to="/JobSearch/hofstra-university/">Hofstra University</Link>
            </li>
            <li><Link to="/JobSearch/princeton-university/">Princeton
              University</Link>
            </li>
            <li><Link to="/JobSearch/rutgers-the-state-university-of-new-jersey/">Rutgers,
              The State University of New Jersey</Link>
            </li>
            <li><Link to="/JobSearch/st-john-s-university/">St. John's
              University</Link>
            </li>
            <li><Link to="/JobSearch/stony-brook-university/">Stony Brook
              University</Link>
            </li>
            <li><Link to="/JobSearch/university-at-buffalo/
                                        "> University at Buffalo</Link></li>
            <Link to="https://academicjobs.com/jobs/pennsylvania-Jobs/">Pennsylvania</Link>
            <li><Link to="/JobSearch/university-of-pennsylvania/
                                                            ">University of Pennsylvania</Link>
            </li>
            <li><Link to="/JobSearch/carnegie-mellon-university/
                                                            ">Carnegie Mellon University</Link>
            </li>
            <li><Link to="/JobSearch/bucknell-university/
                                            ">Bucknell University</Link>
            </li>
            <li><Link to="/JobSearch/duquesne-university/
                            ">Duquesne University</Link>
            </li>
            <Link to="https://academicjobs.com/jobs/illinois-jobs/">Illinois</Link>
            <li><Link to="/JobSearch/University-of-Chicago
                                                            ">University of Chicago</Link></li>
            <li><Link to="/JobSearch/Northwestern-University
                                                            ">Northwestern University</Link></li>
            <li><Link to="/JobSearch/northern-illinois-university/
                                                                ">Northern Illinois University</Link></li>
            <li><Link to="/JobSearch/university-of-illinois-at-urbana-champaign/
                                                                ">University of Illinois at Urbana-Champaign</Link></li>
            <Link to="https://academicjobs.com/jobs/michigan-jobs/">Michigan</Link>
            <li><Link to="/JobSearch/university-of-michigan/
                                                                    ">University of Michigan</Link></li>
            <li><Link to="/JobSearch/michigan-state-university/
                                                                        ">Michigan State University</Link></li>
            <li><Link to="/JobSearch/wayne-state-university/
                                                                            "> Wayne State University</Link></li>
          </ul>
          <ul>
            <Link to="https://academicjobs.com/jobs/us-jobs/">All States</Link>
            <li><Link to="/JobSearch/yale-university">Yale University</Link>
            </li>
            <li><Link to="/JobSearch/university-of-washington/
                                            ">University of Washington</Link></li>
            <li><Link to="/JobSearch/johns-hopkins-university/
                                                            ">Johns Hopkins University</Link></li>
            <li><Link to="/JobSearch/dartmouth-college">Dartmouth College</Link>
            </li>
            <li><Link to="/JobSearch/rice-university">Rice University</Link>
            </li>
            <li><Link to="/JobSearch/vanderbilt-university
                                                            University">Vanderbilt University</Link></li>
            <li><Link to="/JobSearch/washington-university-in-st-louis/
                                                            ">Washington University in St. Louis</Link></li>
            <li><Link to="/JobSearch/university-of-notre-dame
                                                            ">University of Notre Dame</Link></li>
            <li><Link to="/JobSearch/university-of-virginia
                                                            ">University of Virginia</Link></li>
            <li><Link to="/JobSearch/georgetown-University
                                                            ">Georgetown University</Link></li>
            <li><Link to="/JobSearch/university-of-texas-at-austin/
                                                            ">University of Texas at Austin</Link></li>
            <li><Link to="/JobSearch/university-of-wisconsin-madison/
                                                            ">University of Wisconsin - Madison</Link></li>
            <li><Link to="/JobSearch/university-of-mississippi-medical-center
                                                            ">University of Mississippi Medical Center</Link></li>
            <li><Link to="/JobSearch/university-of-minnesota-twin-cities/
                                                                ">University of Minnesota Twin Cities</Link></li>
            <li><Link to="/JobSearch/the-ohio-state-university/
                                                                    "> The Ohio State University</Link></li>
            <li><Link to="/JobSearch/university-of-cincinnati/
                                                                        "> University of Cincinnati</Link></li>
            <li><Link to="/JobSearch/university-of-tennessee-knoxville/
                                                                        "> University of Tennessee, Knoxville</Link></li>
            <li><Link to="/JobSearch/university-of-alabama-at-birmingham/
                                                                                "> University of Alabama at
              Birmingham</Link></li>
            <li><Link to="/JobSearch/indiana-university-purdue-university-indianapolis/
                                                                                            "> Indiana University
              Purdue University Indianapolis</Link></li>
            <li><Link to="/JobSearch/the-university-of-iowa/
                                                                                                "> The University of
              Iowa</Link></li>
            <li><Link to="/JobSearch/university-of-kentucky/
                                                                                                    "> University of
              Kentucky</Link></li>
            <li><Link to="/JobSearch/oregon-state-university/
                                                                                                        "> Oregon State
              University</Link>
            </li>
            <li><Link to="/JobSearch/university-of-nebraska-medical-center/
                                                                                                            ">
              University of Nebraska Medical Center</Link></li>
            <li><Link to="/JobSearch/washington-state-university/
                                                                                                                ">
              Washington State University</Link></li>
            <li><Link to="/JobSearch/university-of-maryland-baltimore-county/
                                                                                                                    ">
              University of Maryland, Baltimore County</Link></li>
          </ul>
        </div>
      </div>
      <div class="region-container">
        <div>
          <h2>AUSTRALIA</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ul>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/jobs/act-jobs/">ACT</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3739/australian-national-university-anu/">Australian National
                University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3821/University-of-Canberra/">University of Canberra</a>
              </li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/NEW-SOUTH-WALES-jobs/">New South Wales</a>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3171/the-university-of-sydney/">The
                University of Sydney</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3738/university-of-new-south-wales-unsw/">University of New
                South Wales</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3855/Charles-Sturt-University/">Charles Sturt University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3853/Australian-Catholic-University" >Australian Catholic
                University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3862/Southern-Cross-University/">Southern Cross
                University</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3864/University-of-Technology-Sydney/">University of
                Technology, Sydney</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3881/Macquarie-University/">Macquarie
                University</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3209/University-of-New-England/">University of New England
                England</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3863/University-of-Newcastle/">University of Newcastle</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3865/University-of-Western-Sydney/">University of Western
                Sydney</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3866/University-of-Wollongong/">University of Wollongong</a>
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
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3172/University-of-Queensland/">The
                University of Queensland</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3854/CQUniversity/">CQUniversity</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3787/Federation-University-Australia/">Federation University
                Australia</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3860/Griffith-University/">Griffith
                University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3857/James-Cook-University/">James
                Cook University</a>
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
                href="https://academicjobs.com/company/3859/University-of-Sunshine-Coast/">University of Sunshine
                Coast</a></li>
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
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3737/The-University-of-Adelaide/">The
                University of Adelaide</a>
              </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3146/Carnegie-Mellon-University/">Carnegie Mellon
                University</a> </li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3875/Torrens-University-Australia/">Torrens University
                Australia</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3874/University-of-South-Australia/">University of South
                Australia</a></li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3873/Flinders-University/">Flinders
                University</a>
              </li>
              <a class="footer-nav__link ddd" href="https://academicjobs.com/WESTERN-AUSTRALIA-jobs/">Western
                Australia</a>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3173/University-of-Western-Australia/">The University of
                Western Australia</a></li>
              <li><a class="footer-nav__link"
                href="https://academicjobs.com/company/3879/University-of-Notre-Dame/">University of Notre Dame</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3878/Murdoch-University/">Murdoch
                University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3877/Edith-Cowan-University/">Edith
                Cowan University</a>
              </li>
              <li><a class="footer-nav__link" href="https://academicjobs.com/company/3876/Curtin-University/">Curtin
                University</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2>AFRICA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=EGYPT">Egypt</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/6226/">Cairo
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/5798/">American
              University in Cairo</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/5713/">Alexandria
              University</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=SOUTH%20AFRICA">South Africa</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12637/">University of
              Cape Town</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/13133/">University of
              the Witwatersrand</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/13008/">Stellenbosch
              University</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12935/">University of
              Pretoria</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12787/">University of
              KwaZulu-Natal</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=NIGERIA">Nigeria</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12743/">University of
              Ibadan</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/6388/">Ahmadu Bello
              University</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12789/">University of
              Lagos</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/9482/">Obafemi
              Awolowo University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12881/">University of
              Nigeria, Nsukka</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=KENYA">Kenya</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12866/">University of
              Nairobi</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/8470/">Kenyatta
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/10485/">Strathmore
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/9051/">Moi
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/7048/">Egerton
              University</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=MOROCCO">Morocco</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12453/">University
              Mohammed V of Rabat</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12262/">Cadi Ayyad
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12426/">Hassan II
              University of Casablanca</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=GHANA">Ghana</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12711/">University of
              Ghana</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/8649/">Kwame Nkrumah
              University of Science and Technology</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12636/">University of
              Cape Coast</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=SENEGAL">Senegal</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12272/">Cheikh Anta
              Diop University</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=TUNISIA">Tunisia</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12393/">University of
              Tunis El Manar</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12370/">University of
              Sfax</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12303/">University of
              Carthage</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=UGANDA">Uganda</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/8875/">Makerere
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/10962/">Uganda
              Martyrs University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/8660/">Kyambogo
              University</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>ASIA</h2>
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
      <div>
        <h2>CANADA</h2>
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
      <div>
        <h2>UNITED KINGDOM</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/jobs/?l=Australia&state=eNGLAND">England</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12635/">University of
              Cambridge</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/3099/">University of
              Oxford</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12527/">University
              College London</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/3129/">Imperial
              College London</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/3153/">London School
              of Economics and Political Science</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/3833/">University of
              Manchester</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12614/">University of
              Birmingham</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12797/">University of
              Leeds</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/NEW-SOUTH-WALES-Jobs">Scotland</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12681/">University of
              Edinburgh</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12713/">University of
              Glasgow</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12555/">University of
              Aberdeen</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/13005/">University of
              St Andrews</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/12669/">University of
              Dundee</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/VICTORIA-ACADEMIC-Jobs">Wales</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/6252/">Cardiff
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/10538/">Swansea
              University</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/13115/">Aberystwyth
              University</a></li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/13116/">Bangor
              University</a>
            </li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd"
              href="https://academicjobs.com/states/jobs-in-tasmania">Northern Ireland</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/10799/">Queen's
              University Belfast</a>
            </li>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/13098/">Ulster
              University</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>SOUTH AMERICA</h2>
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
      <div>
        <h2>NEW ZEALAND</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ul>
            <a class="footer-nav__link ddd" href="#">North Island</a>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3809/the-university-of-auckland">The
              University of Auckland</a></li>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3807/Victoria-University-of-Wellington">Victoria
              University of Wellington</a></li>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3806/Waikato-University">Waikato
              University</a>
            </li>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3804/Auckland-University-of-Technology-AUT">Auckland
              University of Technology (AUT)</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd" href="#">South Island</a>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3805/University-of-Otago">University of
              Otago</a>
            </li>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3808/Lincoln-University">Lincoln
              University</a>
            </li>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3810/massey-university">Massey University</a>
            </li>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3811/university-of-canterbury/">University of
              Canterbury</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h2>MIDDLE EAST</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ul>
            <a class="footer-nav__link ddd" href="#">Saudi Arabia</a>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/8522/king-saud-university-saudi-arabia/">King
              Saud University</a>
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
              href="https://academicjobs.com/company/8481/khalifa-university-uae/">Khalifa
              University</a>
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
              href="https://academicjobs.com/company/12763/university-of-jordan-jordan/">University
              of Jordan</a></li>
            <a class="footer-nav__link ddd" href="#">Qatar</a>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/12944/qatar-university-qatar/">Qatar
              University</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>INDIA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ul>
            <a class="footer-nav__link ddd" href="#">Mumbai</a>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3844/indian-institute-of-technology-bombay/">Indian
              Institute of Technology Bombay</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd" href="#">Chennai</a>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3845/indian-institute-of-technology-madras/">Indian
              Institute of Technology Madras</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd" href="#">Vellore</a>
            <li><a class="footer-nav__link"
              href="https://academicjobs.com/company/3846/vellore-institute-of-technology/">Vellore
              Institute of Technology</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd" href="#">Bangalore</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/7818/">Indian
              Institute of Science (IISc)</a></li>
          </ul>
          <ul>
            <a class="footer-nav__link ddd" href="#">Delhi</a>
            <li><a class="footer-nav__link" href="https://academicjobs.com/company/7822/">Indian
              Institute of Technology Delhi</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h2>EUROPE</h2>
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
  )
}
export default FindEmployers