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
        <h2 className="text-2xl font-bold py-6 px-28 bg-orange-500 text-black">UNITED STATES</h2>
        <div className="container1a grid grid-cols-4 gap-10 p-7">
          <ul>
            <Link to="https://academicjobs.com/jobs/california-jobs/">California</Link>
            <li><Link to="/jobSearch1/stanford-University/">Stanford University</Link></li>
            <li><Link to="/jobSearch1/california-institute/">California Institute
              of Technology</Link></li>
            <li><Link to="/jobSearch1/university-of-california-san-francisco/">University
              of California - San Francisco</Link></li>
            <li><Link to="/jobSearch1/university-of-southern-california/">University
              of Southern California</Link></li>
            <li><Link to="/jobSearch1/university-of-california-berkeley/">University
              of California - Berkeley</Link></li>
            <li><Link to="/jobSearch1/university-of-california-los-angeles/">University
              of California - Los Angeles</Link></li>
            <li><Link to="/jobSearch1/university-of-california-san-diego/">University
              of California - San Diego</Link></li>
            <li><Link to="/jobSearch1/university-of-california-davis/">University
              of California - Davis</Link></li>
            <li><Link to="/jobSearch1/university-of-california-irvine">University
              of California - Irvine</Link></li>
            <li><Link to="/jobSearch1/university-of-california-santa-barbara/">University
              of California - Santa Barbara</Link></li>
            <li><Link to="/jobSearch1/university-of-california-santa-cruz/">University
              of California - Santa Cruz</Link></li>
            <li><Link to="/jobSearch1/university-of-california-Rrverside/">University
              of California - Riverside</Link></li>
            <li><Link to="/jobSearch1/california-state-university-stanislaus/">California
              State University Stanislaus</Link></li>
            <li><Link to="/jobSearch1/cal-poly-pomona/">Cal Poly Pomona</Link></li>
            <li><Link to="/jobSearch1/california-state-university-monterey-bay/">California
              State University, Monterey Bay</Link></li>
            <li><Link to="/jobSearch1/caltech/">Caltech</Link>
            </li>
            <li><Link to="/jobSearch1/grossmont-cuyamaca-community-college-district/">Grossmont–Cuyamaca
              Community College District</Link></li>
            <li><Link to="/jobSearch1/northeastern-university/">Northeastern
              University</Link>
            </li>
            <li><Link to="/jobSearch1/loyola-marymount-university/">Loyola
              Marymount University</Link></li>
            <li><Link to="/jobSearch1/palomar-college/">Palomar College</Link></li>
            <li><Link to="/jobSearch1/san-diego-state-university/">San Diego State
              University</Link></li>
            <li><Link to="/jobSearch1/saint-mary-s-college-of-california/">Saint
              Mary's College of California</Link></li>
            <li><Link to="/jobSearch1/university-of-california-office-of-the-president/">University
              of California Office of the President</Link></li>
          </ul>
          <ul>
            <Link to="https://academicjobs.com/jobs/massachusetts-jobs/">Massachusetts</Link>
            <li><Link to="/jobSearch1/massachusetts-institute-of-technology/">Massachusetts
              Institute of Technology</Link></li>
            <li><Link to="/jobSearch1/harvard-university/">Harvard University</Link>
            </li>
            <li><Link to="/jobSearch1/boston-university/">Boston University</Link>
            </li>
            <li><Link to="/jobSearch1/boston-college/">Boston College</Link>
            </li>
            <li><Link to="/jobSearch1/tufts-university/">Tufts University</Link>
            </li>
            <li><Link to="/jobSearch1/northeastern-university/">Northeastern
              University</Link>
            </li>
            <li><Link to="/jobSearch1/brandeis-university/">Brandeis
              University</Link></li>
            <li><Link to="/jobSearch1/anna-jaques-hospital/">Anna Jaques
              Hospital</Link></li>
            <li><Link to="/jobSearch1/dana-farber-cancer-institute/">Dana-Farber
              Cancer Institute</Link></li>
            <Link to="https://academicjobs.com/jobs/Georgia-jobs/">Georgia</Link>
            <li><Link to="/jobSearch1/emory-university/">Emory University</Link>
            </li>
            <li><Link to="/jobSearch1/georgia-institute-of-technology/">Georgia
              Institute of Technology</Link></li>
            <Link to="https://academicjobs.com/florida-Jobs/">Florida</Link>
            <li><Link to="/jobSearch1/university-of-miami/">University of
              Miami</Link>
            </li>
            <li><Link to="/jobSearch1/miami-university/">Miami University</Link>
            </li>
            <li><Link to="/jobSearch1/university-of-florida/">University of
              Florida</Link>
            </li>
            <Link to="https://academicjobs.com/north-carolina-jobs/">North
              Carolina</Link>
            <li><Link to="/jobSearch1/duke-university/">Duke University</Link>
            </li>
            <li><Link to="/jobSearch1/university-of-north-carolina/">University of
              North Carolina</Link>
            </li>
            <li><Link to="/jobSearch1/the-university-of-north-carolina-at-chapel-hill/">University
              of North Carolina at Chapel Hill</Link>
            </li>
            <li><Link to="/jobSearch1/university-of-north-carolina-wilmington/">University
              of North Carolina Wilmington</Link>
            </li>
          </ul>
          <ul>
            <Link to="https://academicjobs.com/jobs/new-york-jobs/">New york</Link>
            <li><Link to="/jobSearch1/columbia-university/">Columbia University</Link></li>
            <li><Link to="/jobSearch1/new-york-university-nyu/">New York
              University NYU</Link></li>
            <li><Link to="/jobSearch1/Cornell-University/">Cornell University</Link>
            </li>
            <li><Link to="/jobSearch1/Brown-University">Brown University</Link>
            </li>
            <li><Link to="/jobSearch1/University-of-Rochester
                                                            ">University of Rochester</Link></li>
            <li><Link to="/jobSearch1/fordham-university/">Fordham University</Link>
            </li>
            <li><Link to="/jobSearch1/hofstra-university/">Hofstra University</Link>
            </li>
            <li><Link to="/jobSearch1/princeton-university/">Princeton
              University</Link>
            </li>
            <li><Link to="/jobSearch1/rutgers-the-state-university-of-new-jersey/">Rutgers,
              The State University of New Jersey</Link>
            </li>
            <li><Link to="/jobSearch1/st-john-s-university/">St. John's
              University</Link>
            </li>
            <li><Link to="/jobSearch1/stony-brook-university/">Stony Brook
              University</Link>
            </li>
            <li><Link to="/jobSearch1/university-at-buffalo/
                                        "> University at Buffalo</Link></li>
            <Link to="https://academicjobs.com/jobs/pennsylvania-Jobs/">Pennsylvania</Link>
            <li><Link to="/jobSearch1/university-of-pennsylvania/
                                                            ">University of Pennsylvania</Link>
            </li>
            <li><Link to="/jobSearch1/carnegie-mellon-university/
                                                            ">Carnegie Mellon University</Link>
            </li>
            <li><Link to="/jobSearch1/bucknell-university/
                                            ">Bucknell University</Link>
            </li>
            <li><Link to="/jobSearch1/duquesne-university/
                            ">Duquesne University</Link>
            </li>
            <Link to="https://academicjobs.com/jobs/illinois-jobs/">Illinois</Link>
            <li><Link to="/jobSearch1/University-of-Chicago
                                                            ">University of Chicago</Link></li>
            <li><Link to="/jobSearch1/Northwestern-University
                                                            ">Northwestern University</Link></li>
            <li><Link to="/jobSearch1/northern-illinois-university/
                                                                ">Northern Illinois University</Link></li>
            <li><Link to="/jobSearch1/university-of-illinois-at-urbana-champaign/
                                                                ">University of Illinois at Urbana-Champaign</Link></li>
            <Link to="https://academicjobs.com/jobs/michigan-jobs/">Michigan</Link>
            <li><Link to="/jobSearch1/university-of-michigan/
                                                                    ">University of Michigan</Link></li>
            <li><Link to="/jobSearch1/michigan-state-university/
                                                                        ">Michigan State University</Link></li>
            <li><Link to="/jobSearch1/wayne-state-university/
                                                                            "> Wayne State University</Link></li>
          </ul>
          <ul>
            <Link to="https://academicjobs.com/jobs/us-jobs/">All States</Link>
            <li><Link to="/jobSearch1/yale-university">Yale University</Link>
            </li>
            <li><Link to="/jobSearch1/university-of-washington/
                                            ">University of Washington</Link></li>
            <li><Link to="/jobSearch1/johns-hopkins-university/
                                                            ">Johns Hopkins University</Link></li>
            <li><Link to="/jobSearch1/dartmouth-college">Dartmouth College</Link>
            </li>
            <li><Link to="/jobSearch1/rice-university">Rice University</Link>
            </li>
            <li><Link to="/jobSearch1/vanderbilt-university
                                                            University">Vanderbilt University</Link></li>
            <li><Link to="/jobSearch1/washington-university-in-st-louis/
                                                            ">Washington University in St. Louis</Link></li>
            <li><Link to="/jobSearch1/university-of-notre-dame
                                                            ">University of Notre Dame</Link></li>
            <li><Link to="/jobSearch1/university-of-virginia
                                                            ">University of Virginia</Link></li>
            <li><Link to="/jobSearch1/georgetown-University
                                                            ">Georgetown University</Link></li>
            <li><Link to="/jobSearch1/university-of-texas-at-austin/
                                                            ">University of Texas at Austin</Link></li>
            <li><Link to="/jobSearch1/university-of-wisconsin-madison/
                                                            ">University of Wisconsin - Madison</Link></li>
            <li><Link to="/jobSearch1/university-of-mississippi-medical-center
                                                            ">University of Mississippi Medical Center</Link></li>
            <li><Link to="/jobSearch1/university-of-minnesota-twin-cities/
                                                                ">University of Minnesota Twin Cities</Link></li>
            <li><Link to="/jobSearch1/the-ohio-state-university/
                                                                    "> The Ohio State University</Link></li>
            <li><Link to="/jobSearch1/university-of-cincinnati/
                                                                        "> University of Cincinnati</Link></li>
            <li><Link to="/jobSearch1/university-of-tennessee-knoxville/
                                                                        "> University of Tennessee, Knoxville</Link></li>
            <li><Link to="/jobSearch1/university-of-alabama-at-birmingham/
                                                                                "> University of Alabama at
              Birmingham</Link></li>
            <li><Link to="/jobSearch1/indiana-university-purdue-university-indianapolis/
                                                                                            "> Indiana University
              Purdue University Indianapolis</Link></li>
            <li><Link to="/jobSearch1/the-university-of-iowa/
                                                                                                "> The University of
              Iowa</Link></li>
            <li><Link to="/jobSearch1/university-of-kentucky/
                                                                                                    "> University of
              Kentucky</Link></li>
            <li><Link to="/jobSearch1/oregon-state-university/
                                                                                                        "> Oregon State
              University</Link>
            </li>
            <li><Link to="/jobSearch1/university-of-nebraska-medical-center/
                                                                                                            ">
              University of Nebraska Medical Center</Link></li>
            <li><Link to="/jobSearch1/washington-state-university/
                                                                                                                ">
              Washington State University</Link></li>
            <li><Link to="/jobSearch1/university-of-maryland-baltimore-county/
                                                                                                                    ">
              University of Maryland, Baltimore County</Link></li>
          </ul>
        </div>
      </div>
    </div >
  )
}
export default FindEmployers