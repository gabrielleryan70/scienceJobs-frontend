import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
import DispatchLink from '../components/DispatchLink'

const Home = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    console.log(sessionStorage.getItem("location"))
    if (sessionStorage.getItem("location")) {
      //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation

      //dispatch(setRegion(countryMappings[country.toLowerCase()]))
      //dispatch(setSearchJobCriteria(a))
      //navigate(`/find-jobs`)
      navigate("/find-jobs", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[sessionStorage.getItem("location")].searchLocation } });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66");
          const result = await response.json();
          return result.country.name
        } catch (error) {
          return ""
        }
      }
      fetchLocation1()
        .then(country => {
          sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]))
          a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          console.log(a)
          //dispatch(setSearchJobCriteria(a)) 
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate("/find-jobs", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[sessionStorage.getItem("location")].searchLocation } });
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  };
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col items-center  justify-center ">
        <div className='h-[40vh] flex flex-col items-end justify-end'>
          <Helmet>
            <title>Academic Jobs - The Number 1 job board for Higher Ed jobs, Top University Recruitment & College Jobs.</title>
            <meta name="description" content="Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily." />
            <meta name="keywords" content="Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs" />
          </Helmet>
          <img
            src="https://academicjobs.s3.amazonaws.com/img/_misc/ScienceJobsLogo.png"
            alt="Google Logo"
            className="w-[20rem] mb-[1rem] "
          />
        </div>
        <div className='w-3/5 h-[60vh] flex flex-col items-top '>
          <form className=' flex flex-col  items-end w-full' onSubmit={handleFormSubmit}>
            <div className="w-full flex mt-5 border rounded-lg p-2 shadow-md ">
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none"
                placeholder="Jobs Search"
                ref={keyWordRef}
              />
              <button className="px-4 py-2 bg-[#f4a10c] text-white rounded-md hover:bg-orange-600"
                type="submit"
              >
                Search In Your Country
              </button>
            </div>
            <h2 className='underline text-[#f4a10c]'
              onClick={() => {
                const a = {}
                if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
                dispatch(setSearchJobCriteria(a))
                dispatch(setRegion('Global'))
                navigate(`/find-jobs`)
              }}
            >Or Search Globally</h2>
          </form >
        </div>
      </div>
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
      <div className="bg-white flex flex-col  ">
        <h2 className="text-xl text-[#f4a10c] font-bold">Academic Job Regions</h2>
        <ul className=" text-left  grid grid-cols-1 md:grid-cols-4 gap-4  py-2">


          {Object.keys(countryMappings1).map((key) => (
            <li className="navbar__item" key={key}>
              <DispatchLink
                to={`/${key}`}
                region={key}
                className="navbar__link"
              >
                {countryMappings1[key].menu}
              </DispatchLink>
            </li>
          ))}


        </ul>
      </div>
      <div className="bg-white flex flex-col  ">
        <h2 className="text-xl text-[#f4a10c] font-bold mt-10">Academic Positions / Roles</h2>
        <div className=" text-left  grid grid-cols-1 md:grid-cols-4 gap-4  py-2">
          <Link to="/find-jobs/Lecturer" className=''>Lecturer</Link>
          <Link to="/find-jobs/Professor" className=''>Professor</Link>
          <Link to="/find-jobs/Researcher" className=''>Researcher</Link>
          <Link to="/find-jobs/Lab-Technician" className=''>Lab Technician</Link>
          <Link to="/find-jobs/Assistant-Professor" className=''>Assistant Professor</Link>
          <Link to="/find-jobs/Associate-Professor" className=''>Associate Professor</Link>
          <Link to="/find-jobs/Postdoctoral-Researcher" className=''>Postdoctoral Researcher</Link>
          <Link to="/find-jobs/Postdoctoral-Fellow" className=''>Postdoctoral Fellow</Link>
          <Link to="/find-jobs/Visiting-Global-Academic" className=''>Visiting Global Academic</Link>
          <Link to="/find-jobs/Visiting-Scholar-Fellow" className=''>Visiting Scholar or Fellow</Link>
          <Link to="/find-jobs/Tutor" className=''>Tutor</Link>
          <Link to="/find-jobs/Other" className=''>Other</Link>
        </div>
      </div>
      <h2 className="text-xl text-[#f4a10c] font-bold mt-10">Higher Ed Job Specialties</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid grid-cols-4 gap-4 py-2">
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/administration-support/" className='text-[#f4a10c] font-bold'>Administration & Support</Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/human-resources/" >Human Resources</Link></li>
                  <li><Link to="/find-jobs/administration-support/" >Admin Other Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Agriculture </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/agricultural-economics-agribusiness/" className=''>Agricultural Economics and Agribusiness</Link></li>
                  <li><Link to="/find-jobs/agriculture-extension/" className=''>Agricultural Extension </Link></li>
                  <li><Link to="/find-jobs/animal-science/" className=''>Animal Science</Link></li>
                  <li><Link to="/find-jobs/entomology/" className=''>Entomology </Link></li>
                  <li><Link to="/find-jobs/environmental-science-ecology-forestry/" className=''>Environmental Science, Ecology, and Forestry </Link></li>
                  <li><Link to="/find-jobs/agriculture-food-science/" className=''>Food Science </Link></li>
                  <li><Link to="/find-jobs/horticulture-landscape-architecture/" className=''>Horticulture and Landscape Architecture </Link></li>
                  <li><Link to="/find-jobs/agriculture-plant-soil-science/" className=''>Plant and Soil Science </Link></li>
                  <li><Link to="/find-jobs/veterinary-science/" className=''>Veterinary Medicine </Link></li>
                  <li><Link to="/find-jobs/" className=''>Other Agriculture Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Business </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/accounting/" className=''>Business Accounting </Link></li>
                  <li><Link to="/find-jobs/administration/" className=''>Business Administration </Link></li>
                  <li><Link to="/find-jobs/law/" className=''>Business Law </Link></li>
                  <li><Link to="/find-jobs/entrepreneurship/" className=''>Entrepreneurship </Link></li>
                  <li><Link to="/find-jobs/finance/" className=''>Finance </Link></li>
                  <li><Link to="/find-jobs/hotel-restaurant-management/" className=''>Hotel and Restaurant Management </Link></li>
                  <li><Link to="/find-jobs/human-resources/" className=''>Business Human Resources </Link></li>
                  <li><Link to="/find-jobs/information-systems-technology/" className=''>Information Systems and Technology </Link></li>
                  <li><Link to="/find-jobs/international-business/" className=''>International Business </Link></li>
                  <li><Link to="/find-jobs/business-management/" className=''>Business Management </Link></li>
                  <li><Link to="/find-jobs/marketing-sales/" className=''>Marketing and Sales </Link></li>
                  <li><Link to="/find-jobs/business-other-specialty/" className=''>Other Business Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Fine and Applied Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/architecture/" className=''>Architecture </Link></li>
                  <li><Link to="/find-jobs/art/" className=''>Art </Link></li>
                  <li><Link to="/find-jobs/art-history/" className=''>Art History </Link></li>
                  <li><Link to="/find-jobs/dance/" className=''>Dance </Link></li>
                  <li><Link to="/find-jobs/digital-arts/" className=''>Digital Arts </Link></li>
                  <li><Link to="/find-jobs/fashion-textile-design/" className=''>Fashion and Textile Design </Link></li>
                  <li><Link to="/find-jobs/graphic-design/" className=''>Graphic Design </Link></li>
                  <li><Link to="/find-jobs/industrial-design/" className=''>Industrial Design </Link></li>
                  <li><Link to="/find-jobs/interior-design/" className=''>Interior Design </Link></li>
                  <li><Link to="/find-jobs/music/" className=''>Music </Link></li>
                  <li><Link to="/find-jobs/photography/" className=''>Photography </Link></li>
                  <li><Link to="/find-jobs/theatre/" className=''>Theatre </Link></li>
                  <li><Link to="/find-jobs/fine-applied-arts-other-specialities/" className=''>Other Fine and Applied Arts Specialities </Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/faculty-executive/" className='text-[#f4a10c] font-bold'>
                  Executive Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/executive-president-chancellor/" className=''>President & Chancellor </Link></li>
                  <li><Link to="/find-jobs/faculty-executive/" className=''>Executive In Faculty</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Communications </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/broadcast-journalism/" className=''>Broadcast Journalism </Link></li>
                  <li><Link to="/find-jobs/journalism/" className=''>Journalism </Link></li>
                  <li><Link to="/find-jobs/media-communication-studies/" className=''>Media and Communication Studies </Link></li>
                  <li><Link to="/find-jobs/public-relations-advertising/" className=''>Public Relations and Advertising </Link></li>
                  <li><Link to="/find-jobs/faculty-communications-radio-tv-film/" className=''>Radio, Television, and Film </Link></li>
                  <li><Link to="/find-jobs/speech-public-speaking/" className=''>Speech and Public Speaking </Link></li>
                  <li><Link to="/find-jobs/communications-other-specialty/" className=''>Other Communications Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Engineering </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/aerospace/" className=''>Aerospace Engineering </Link></li>
                  <li><Link to="/find-jobs/engineering-agricultural/" className=''>Agricultural Engineering </Link></li>
                  <li><Link to="/find-jobs/biological-engineering/" className=''>Biological Engineering </Link></li>
                  <li><Link to="/find-jobs/chemical-engineering/" className=''>Chemical Engineering </Link></li>
                  <li><Link to="/find-jobs/civil-environmental-engineering/" className=''>Civil and Environmental Engineering </Link></li>
                  <li><Link to="/find-jobs/computer-engineering/" className=''>Computer Engineering </Link></li>
                  <li><Link to="/find-jobs/electrical-engineering/" className=''>Electrical Engineering </Link></li>
                  <li><Link to="/find-jobs/industrial-manufacturing-engineering/" className=''>Industrial and Manufacturing Engineering </Link></li>
                  <li><Link to="/find-jobs/mechanical-engineering/" className=''>Mechanical Engineering </Link></li>
                  <li><Link to="/find-jobs/engineering-other-specialty/" className=''>Other Engineering Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Education </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/adult-distance-education/" className=''>Adult and Distance Education </Link></li>
                  <li><Link to="/find-jobs/counselor-education/" className=''>Counselor Education </Link></li>
                  <li><Link to="/find-jobs/curriculum-instruction/" className=''>Curriculum and Instruction </Link></li>
                  <li><Link to="/find-jobs/admin-leadership-education/" className=''>Educational Administration and Leadership </Link></li>
                  <li><Link to="/find-jobs/educational-psychology/" className=''>Educational Psychology </Link></li>
                  <li><Link to="/find-jobs/higher-education/" className=''>Higher Education </Link></li>
                  <li><Link to="/find-jobs/education-instructional-technology-design/" className=''>Instructional Technology and Design </Link></li>
                  <li><Link to="/find-jobs/reading-literacy/" className=''>Reading and Literacy </Link></li>
                  <li><Link to="/find-jobs/school-psychology/" className=''>School Psychology </Link></li>
                  <li><Link to="/find-jobs/special-education/" className=''>Special Education </Link></li>
                  <li><Link to="/find-jobs/teacher-education/" className=''>Teacher Education </Link></li>
                  <li><Link to="/find-jobs/teacher-education-early-childhood/" className=''>Teacher Education - Early Childhood </Link></li>
                  <li><Link to="/find-jobs/teacher-education-elementary/" className=''>Teacher Education - Elementary </Link></li>
                  <li><Link to="/find-jobs/teacher-education-middle/" className=''>Teacher Education - Middle School </Link></li>
                  <li><Link to="/find-jobs/teacher-education-secondary/" className=''>Teacher Education - Secondary Education </Link></li>
                  <li><Link to="/find-jobs/education-other-specialty/" className=''>Other Education Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/industry/" className='text-[#f4a10c] font-bold'>Industry Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/industry/" className=''>Industry</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Health Sciences </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/athletic-training/" className=''>Athletic Training </Link></li>
                  <li><Link to="/find-jobs/communication-sciences-disorders/" className=''>Communication Sciences and Disorders </Link></li>
                  <li><Link to="/find-jobs/health-education-promotion/" className=''>Health Education and Promotion </Link></li>
                  <li><Link to="/find-jobs/health-information-technology/" className=''>Health Information Technology </Link></li>
                  <li><Link to="/find-jobs/healthcare-administration/" className=''>Healthcare Administration </Link></li>
                  <li><Link to="/find-jobs/kinesiology-exercise-science-phys-ed/" className=''>Kinesiology, Exercise Science, and Phys Ed </Link></li>
                  <li><Link to="/find-jobs/nursing/" className=''>Nursing </Link></li>
                  <li><Link to="/find-jobs/nutrition-dietetics/" className=''>Nutrition and Dietetics </Link></li>
                  <li><Link to="/find-jobs/occupational-therapy/" className=''>Occupational Therapy </Link></li>
                  <li><Link to="/find-jobs/physical-therapy/" className=''>Physical Therapy </Link></li>
                  <li><Link to="/find-jobs/public-environmental-health/" className=''>Public and Environmental Health </Link></li>
                  <li><Link to="/find-jobs/recreation-leisure-studies/" className=''>Recreation and Leisure Studies </Link></li>
                  <li><Link to="/find-jobs/sport-management/" className=''>Sport Management </Link></li>
                  <li><Link to="/find-jobs/health-sciences-other-specialities/" className=''>Other Health Sciences Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Law and Legal Studies </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/law-legal-studies/" className=''>Law and Legal Studies </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Liberal Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/american-studies/" className=''>American Studies </Link></li>
                  <li><Link to="/find-jobs/anthropology/" className=''>Anthropology </Link></li>
                  <li><Link to="/find-jobs/criminal-justice/" className=''>Criminal Justice </Link></li>
                  <li><Link to="/find-jobs/economics" className=''>Economics </Link></li>
                  <li><Link to="/find-jobs/english-literature/" className=''>English and Literature </Link></li>
                  <li><Link to="/find-jobs/english-as-second-language/" className=''>English as a Second Language </Link></li>
                  <li><Link to="/find-jobs/ethnic-multicultural-studies/" className=''>Ethnic and Multicultural Studies </Link></li>
                  <li><Link to="/find-jobs/foreign-languages-literatures/" className=''>Foreign Languages and Literatures </Link></li>
                  <li><Link to="/find-jobs/history/" className=''>History </Link></li>
                  <li><Link to="/find-jobs/human-development-family-studies/" className=''>Human Development and Family Studies </Link></li>
                  <li><Link to="/find-jobs/humanities/" className=''>Humanities </Link></li>
                  <li><Link to="/find-jobs/linguistics/" className=''>Linguistics </Link></li>
                  <li><Link to="/find-jobs/philosophy/" className=''>Philosophy </Link></li>
                  <li><Link to="/find-jobs/political-science/" className=''>Political Science </Link></li>
                  <li><Link to="/find-jobs/psychology/" className=''>Psychology </Link></li>
                  <li><Link to="/find-jobs/public-administration-policy/" className=''>Public Administration and Policy </Link></li>
                  <li><Link to="/find-jobs/religious-studies-theology/" className=''>Religious Studies and Theology </Link></li>
                  <li><Link to="/find-jobs/security-studies/" className=''>Security Studies </Link></li>
                  <li><Link to="/find-jobs/sign-language/" className=''>Sign Language </Link></li>
                  <li><Link to="/find-jobs/social-work/" className=''>Social Work </Link></li>
                  <li><Link to="/find-jobs/sociology/" className=''>Sociology </Link></li>
                  <li><Link to="/find-jobs/urban-studies-planning/" className=''>Urban Studies and Planning </Link></li>
                  <li><Link to="/find-jobs/women-s-gender-studies/" className=''>Women's and Gender Studies </Link></li>
                  <li><Link to="/find-jobs/liberal-arts-other-specialities/" className=''>Other Liberal Arts Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/find-jobs/industry/" className='text-[#f4a10c] font-bold'></Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/industry/" className=''></Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Medicine </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/chiropractic/" className=''>Chiropractic </Link></li>
                  <li><Link to="/find-jobs/dentistry/" className=''>Dentistry </Link></li>
                  <li><Link to="/find-jobs/medical-research/" className=''>Medical Research </Link></li>
                  <li><Link to="/find-jobs/pharmacy-pharmacology/" className=''>Pharmacy and Pharmacology </Link></li>
                  <li><Link to="/find-jobs/physician-assistant/" className=''>Physician Assistants </Link></li>
                  <li><Link to="/find-jobs/physicians/" className=''>Physicians </Link></li>
                  <li><Link to="/find-jobs/medicine-other-specialities/" className=''>Other Medicine Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Science </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/astronomy-astrophysics/" className=''>Astronomy and Astrophysics </Link></li>
                  <li><Link to="/find-jobs/biochemistry-molecular-biology/" className=''>Biochemistry and Molecular Biology </Link></li>
                  <li><Link to="/find-jobs/biology/" className=''>Biology </Link></li>
                  <li><Link to="/find-jobs/chemistry/" className=''>Chemistry </Link></li>
                  <li><Link to="/find-jobs/computer-science/" className=''>Computer Science </Link></li>
                  <li><Link to="/find-jobs/geography/" className=''>Geography </Link></li>
                  <li><Link to="/find-jobs/geology-earth-sciences-oceanography/" className=''>Geology, Earth Sciences, and Oceanography </Link></li>
                  <li><Link to="/find-jobs/library-information-science/" className=''>Library and Information Science </Link></li>
                  <li><Link to="/find-jobs/mathematics/" className=''>Mathematics </Link></li>
                  <li><Link to="/find-jobs/physics/" className=''>Physics </Link></li>
                  <li><Link to="/find-jobs/statistics/" className=''>Statistics </Link></li>
                  <li><Link to="/find-jobs/science-other-speciality/" className=''>Other Science Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/find-jobs/" className='text-[#f4a10c] font-bold'>Technical and Career </Link></li>
                <ul className="innerUL">
                  <li><Link to="/find-jobs/automotive-technology/" className=''>Automotive Technology </Link></li>
                  <li><Link to="/find-jobs/aviation/" className=''>Aviation </Link></li>
                  <li><Link to="/find-jobs/construction-building-trades/" className=''>Construction and Building Trades </Link></li>
                  <li><Link to="/find-jobs/cosmetology/" className=''>Cosmetology </Link></li>
                  <li><Link to="/find-jobs/culinary-arts/" className=''>Culinary Arts </Link></li>
                  <li><Link to="/find-jobs/dental-hygienists-assistants/" className=''>Dental Hygienists and Assistants </Link></li>
                  <li><Link to="/find-jobs/diagnostic-imaging-radiography/" className=''>Diagnostic Imaging and Radiography </Link></li>
                  <li><Link to="/find-jobs/electronics/" className=''>Electronics </Link></li>
                  <li><Link to="/find-jobs/fire-science/" className=''>Fire Science </Link></li>
                  <li><Link to="/find-jobs/massage-therapy/" className=''>Massage Therapy </Link></li>
                  <li><Link to="/find-jobs/medical-assistants/" className=''>Medical Assistants </Link></li>
                  <li><Link to="/find-jobs/medical-billing-coding/" className=''>Medical Billing and Coding </Link></li>
                  <li><Link to="/find-jobs/paramedics-emts/" className=''>Paramedics and EMTs </Link></li>
                  <li><Link to="/find-jobs/respiratory-care/" className=''>Respiratory Care </Link></li>
                  <li><Link to="/find-jobs/surgical-technology/" className=''>Surgical Technology </Link></li>
                  <li><Link to="/find-jobs/telecommunications/" className=''>Telecommunications </Link></li>
                  <li><Link to="/find-jobs/tourism/" className=''>Tourism </Link></li>
                  <li><Link to="/find-jobs/" className=''>Other Technical and Career Faculty </Link></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home