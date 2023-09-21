import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const USA = () => {
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
      <div className="container1a grid grid-cols-4 gap-10 p-7">
        <ul>
          <Link to="https://academicjobs.com/jobs/california-jobs/">California</Link>
          <li><Link to="/JobSearch/stanford-University/">Stanford University</Link></li>
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
  )
}
export default USA