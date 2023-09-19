import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Home = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (sessionStorage.getItem("location")) {
      a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
      console.log(a)
      //dispatch(setSearchJobCriteria(a))
      //navigate(`/JobSearch`)
      navigate("/JobSearch1", { state: { q: keyWordRef.current.value.trim() , l: countryMappings1[sessionStorage.getItem("location")].searchLocation } });
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
          navigate("/JobSearch1", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[sessionStorage.getItem("location")].searchLocation } });
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
                navigate(`/JobSearch`)
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
        <div className=" text-left  grid grid-cols-1 md:grid-cols-4 gap-4  py-2">
          <a href="https://academicjobs.com/usa/" className="\    ">
            United States
          </a>
          <a href="https://academicjobs.com/australia/" className="\   ">
            Australia
          </a>
          <a href="https://academicjobs.com/uk/" className="\   ">
            United Kingdom
          </a>
          <a href="https://academicjobs.com/canada/" className="\   ">
            Canada
          </a>
          <a href="https://academicjobs.com/newzealand/" className="\   ">New Zealand
          </a>
          <a href="https://academicjobs.com/europe/" className="\   ">
            Europe
          </a>
          <a href="https://academicjobs.com/india/" className="\   ">
            India
          </a>
          <a href="https://academicjobs.com/asia/" className="\   ">
            Asia
          </a>
          <a href="https://academicjobs.com/africa/" className="\   ">Africa
          </a>
          <a href="https://academicjobs.com/middleeast/" className="\   ">
            Middle East
          </a>
          <a href="https://academicjobs.com/southamerica/" className="\   ">
            South America
          </a>
          <a href="https://academicjobs.com/jobs/other-jobs/" className="\   ">
            Other
          </a>
        </div>
      </div>
      <div className="bg-white flex flex-col  ">
        <h2 className="text-xl text-[#f4a10c] font-bold mt-10">Academic Positions / Roles</h2>
        <div className=" text-left  grid grid-cols-1 md:grid-cols-4 gap-4  py-2">
          <a href="https://academicjobs.com/jobs/lecturer-jobs/" className="    ">
            Lecturer
          </a>
          <a href="https://academicjobs.com/jobs/professor-jobs/" className="   ">
            Professor
          </a>
          <a href="https://academicjobs.com/jobs/researcher-jobs/" className="   ">
            Researcher
          </a>
          <a href="https://academicjobs.com/jobs/lab-technician-jobs/" className="   ">
            Lab Technician
          </a>
          <a href="https://academicjobs.com/jobs/assistant-professor-jobs/" className="   ">Assistant Professor
          </a>
          <a href="https://academicjobs.com/jobs/associate-professor-jobs/" className="]   ">
            Associate Professor
          </a>
          <a href="https://academicjobs.com/jobs/postdoctoral-researcher-jobs/" className="   ">
            Postdoctoral Researcher
          </a>
          <a href="https://academicjobs.com/jobs/postdoctoral-fellow-jobs/" className="   ">
            Postdoctoral Fellow
          </a>
          <a href="https://academicjobs.com/jobs/visiting-global-academic-jobs/" className="   ">Visiting Global Academic
          </a>
          <a href="https://academicjobs.com/jobs/visiting-scholar-Fellow-jobs/" className="   ">Visiting Scholar or Fellow
          </a>
          <a href="https://academicjobs.com/jobs/tutor-jobs/" className="   ">
            Tutor
          </a>
          <a href="https://academicjobs.com/jobs/other-jobs/" className="   ">
            Other
          </a>
        </div>
      </div>
      <h2 className="text-xl text-[#f4a10c] font-bold mt-10">Higher Ed Job Specialties</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid grid-cols-4 gap-4 py-2">
            <div className="column">
              <ul className="h-[100px]">
                  <li className='mb-1 mt-4'><Link to="/jobSearch1/administration-support/" className='text-[#f4a10c] font-bold'>Administration & Support</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/human-resources/" >Human Resources</Link></li>
                  <li><Link to="/jobSearch1/administration-support/" >Admin Other Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Agriculture </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/agricultural-economics-agribusiness/" className=''>Agricultural Economics and Agribusiness</Link></li>
                  <li><Link to="/jobSearch1/agriculture-extension/" className=''>Agricultural Extension </Link></li>
                  <li><Link to="/jobSearch1/animal-science/" className=''>Animal Science</Link></li>
                  <li><Link to="/jobSearch1/entomology/" className=''>Entomology </Link></li>
                  <li><Link to="/jobSearch1/environmental-science-ecology-forestry/" className=''>Environmental Science, Ecology, and Forestry </Link></li>
                  <li><Link to="/jobSearch1/agriculture-food-science/" className=''>Food Science </Link></li>
                  <li><Link to="/jobSearch1/horticulture-landscape-architecture/" className=''>Horticulture and Landscape Architecture </Link></li>
                  <li><Link to="/jobSearch1/agriculture-plant-soil-science/" className=''>Plant and Soil Science </Link></li>
                  <li><Link to="/jobSearch1/veterinary-science/" className=''>Veterinary Medicine </Link></li>
                  <li><Link to="/jobSearch1/" className=''>Other Agriculture Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Business </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/accounting/" className=''>Business Accounting </Link></li>
                  <li><Link to="/jobSearch1/administration/" className=''>Business Administration </Link></li>
                  <li><Link to="/jobSearch1/law/" className=''>Business Law </Link></li>
                  <li><Link to="/jobSearch1/entrepreneurship/" className=''>Entrepreneurship </Link></li>
                  <li><Link to="/jobSearch1/finance/" className=''>Finance </Link></li>
                  <li><Link to="/jobSearch1/hotel-restaurant-management/" className=''>Hotel and Restaurant Management </Link></li>
                  <li><Link to="/jobSearch1/human-resources/" className=''>Business Human Resources </Link></li>
                  <li><Link to="/jobSearch1/information-systems-technology/" className=''>Information Systems and Technology </Link></li>
                  <li><Link to="/jobSearch1/international-business/" className=''>International Business </Link></li>
                  <li><Link to="/jobSearch1/business-management/" className=''>Business Management </Link></li>
                  <li><Link to="/jobSearch1/marketing-sales/" className=''>Marketing and Sales </Link></li>
                  <li><Link to="/jobSearch1/business-other-specialty/" className=''>Other Business Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Fine and Applied Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/architecture/" className=''>Architecture </Link></li>
                  <li><Link to="/jobSearch1/art/" className=''>Art </Link></li>
                  <li><Link to="/jobSearch1/art-history/" className=''>Art History </Link></li>
                  <li><Link to="/jobSearch1/dance/" className=''>Dance </Link></li>
                  <li><Link to="/jobSearch1/digital-arts/" className=''>Digital Arts </Link></li>
                  <li><Link to="/jobSearch1/fashion-textile-design/" className=''>Fashion and Textile Design </Link></li>
                  <li><Link to="/jobSearch1/graphic-design/" className=''>Graphic Design </Link></li>
                  <li><Link to="/jobSearch1/industrial-design/" className=''>Industrial Design </Link></li>
                  <li><Link to="/jobSearch1/interior-design/" className=''>Interior Design </Link></li>
                  <li><Link to="/jobSearch1/music/" className=''>Music </Link></li>
                  <li><Link to="/jobSearch1/photography/" className=''>Photography </Link></li>
                  <li><Link to="/jobSearch1/theatre/" className=''>Theatre </Link></li>
                  <li><Link to="/jobSearch1/fine-applied-arts-other-specialities/" className=''>Other Fine and Applied Arts Specialities </Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/faculty-executive/" className='text-[#f4a10c] font-bold'>
       Executive Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/executive-president-chancellor/" className=''>President & Chancellor </Link></li>
                  <li><Link to="/jobSearch1/faculty-executive/" className=''>Executive In Faculty</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Communications </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/broadcast-journalism/" className=''>Broadcast Journalism </Link></li>
                  <li><Link to="/jobSearch1/journalism/" className=''>Journalism </Link></li>
                  <li><Link to="/jobSearch1/media-communication-studies/" className=''>Media and Communication Studies </Link></li>
                  <li><Link to="/jobSearch1/public-relations-advertising/" className=''>Public Relations and Advertising </Link></li>
                  <li><Link to="/jobSearch1/faculty-communications-radio-tv-film/" className=''>Radio, Television, and Film </Link></li>
                  <li><Link to="/jobSearch1/speech-public-speaking/" className=''>Speech and Public Speaking </Link></li>
                  <li><Link to="/jobSearch1/communications-other-specialty/" className=''>Other Communications Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Engineering </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/aerospace/" className=''>Aerospace Engineering </Link></li>
                  <li><Link to="/jobSearch1/engineering-agricultural/" className=''>Agricultural Engineering </Link></li>
                  <li><Link to="/jobSearch1/biological-engineering/" className=''>Biological Engineering </Link></li>
                  <li><Link to="/jobSearch1/chemical-engineering/" className=''>Chemical Engineering </Link></li>
                  <li><Link to="/jobSearch1/civil-environmental-engineering/" className=''>Civil and Environmental Engineering </Link></li>
                  <li><Link to="/jobSearch1/computer-engineering/" className=''>Computer Engineering </Link></li>
                  <li><Link to="/jobSearch1/electrical-engineering/" className=''>Electrical Engineering </Link></li>
                  <li><Link to="/jobSearch1/industrial-manufacturing-engineering/" className=''>Industrial and Manufacturing Engineering </Link></li>
                  <li><Link to="/jobSearch1/mechanical-engineering/" className=''>Mechanical Engineering </Link></li>
                  <li><Link to="/jobSearch1/engineering-other-specialty/" className=''>Other Engineering Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Education </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/adult-distance-education/" className=''>Adult and Distance Education </Link></li>
                  <li><Link to="/jobSearch1/counselor-education/" className=''>Counselor Education </Link></li>
                  <li><Link to="/jobSearch1/curriculum-instruction/" className=''>Curriculum and Instruction </Link></li>
                  <li><Link to="/jobSearch1/admin-leadership-education/" className=''>Educational Administration and Leadership </Link></li>
                  <li><Link to="/jobSearch1/educational-psychology/" className=''>Educational Psychology </Link></li>
                  <li><Link to="/jobSearch1/higher-education/" className=''>Higher Education </Link></li>
                  <li><Link to="/jobSearch1/education-instructional-technology-design/" className=''>Instructional Technology and Design </Link></li>
                  <li><Link to="/jobSearch1/reading-literacy/" className=''>Reading and Literacy </Link></li>
                  <li><Link to="/jobSearch1/school-psychology/" className=''>School Psychology </Link></li>
                  <li><Link to="/jobSearch1/special-education/" className=''>Special Education </Link></li>
                  <li><Link to="/jobSearch1/teacher-education/" className=''>Teacher Education </Link></li>
                  <li><Link to="/jobSearch1/teacher-education-early-childhood/" className=''>Teacher Education - Early Childhood </Link></li>
                  <li><Link to="/jobSearch1/teacher-education-elementary/" className=''>Teacher Education - Elementary </Link></li>
                  <li><Link to="/jobSearch1/teacher-education-middle/" className=''>Teacher Education - Middle School </Link></li>
                  <li><Link to="/jobSearch1/teacher-education-secondary/" className=''>Teacher Education - Secondary Education </Link></li>
                  <li><Link to="/jobSearch1/education-other-specialty/" className=''>Other Education Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/industry/" className='text-[#f4a10c] font-bold'>Industry Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/industry/" className=''>Industry</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Health Sciences </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/athletic-training/" className=''>Athletic Training </Link></li>
                  <li><Link to="/jobSearch1/communication-sciences-disorders/" className=''>Communication Sciences and Disorders </Link></li>
                  <li><Link to="/jobSearch1/health-education-promotion/" className=''>Health Education and Promotion </Link></li>
                  <li><Link to="/jobSearch1/health-information-technology/" className=''>Health Information Technology </Link></li>
                  <li><Link to="/jobSearch1/healthcare-administration/" className=''>Healthcare Administration </Link></li>
                  <li><Link to="/jobSearch1/kinesiology-exercise-science-phys-ed/" className=''>Kinesiology, Exercise Science, and Phys Ed </Link></li>
                  <li><Link to="/jobSearch1/nursing/" className=''>Nursing </Link></li>
                  <li><Link to="/jobSearch1/nutrition-dietetics/" className=''>Nutrition and Dietetics </Link></li>
                  <li><Link to="/jobSearch1/occupational-therapy/" className=''>Occupational Therapy </Link></li>
                  <li><Link to="/jobSearch1/physical-therapy/" className=''>Physical Therapy </Link></li>
                  <li><Link to="/jobSearch1/public-environmental-health/" className=''>Public and Environmental Health </Link></li>
                  <li><Link to="/jobSearch1/recreation-leisure-studies/" className=''>Recreation and Leisure Studies </Link></li>
                  <li><Link to="/jobSearch1/sport-management/" className=''>Sport Management </Link></li>
                  <li><Link to="/jobSearch1/health-sciences-other-specialities/" className=''>Other Health Sciences Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Law and Legal Studies </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/law-legal-studies/" className=''>Law and Legal Studies </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Liberal Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/american-studies/" className=''>American Studies </Link></li>
                  <li><Link to="/jobSearch1/anthropology/" className=''>Anthropology </Link></li>
                  <li><Link to="/jobSearch1/criminal-justice/" className=''>Criminal Justice </Link></li>
                  <li><Link to="/jobSearch1/economics" className=''>Economics </Link></li>
                  <li><Link to="/jobSearch1/english-literature/" className=''>English and Literature </Link></li>
                  <li><Link to="/jobSearch1/english-as-second-language/" className=''>English as a Second Language </Link></li>
                  <li><Link to="/jobSearch1/ethnic-multicultural-studies/" className=''>Ethnic and Multicultural Studies </Link></li>
                  <li><Link to="/jobSearch1/foreign-languages-literatures/" className=''>Foreign Languages and Literatures </Link></li>
                  <li><Link to="/jobSearch1/history/" className=''>History </Link></li>
                  <li><Link to="/jobSearch1/human-development-family-studies/" className=''>Human Development and Family Studies </Link></li>
                  <li><Link to="/jobSearch1/humanities/" className=''>Humanities </Link></li>
                  <li><Link to="/jobSearch1/linguistics/" className=''>Linguistics </Link></li>
                  <li><Link to="/jobSearch1/philosophy/" className=''>Philosophy </Link></li>
                  <li><Link to="/jobSearch1/political-science/" className=''>Political Science </Link></li>
                  <li><Link to="/jobSearch1/psychology/" className=''>Psychology </Link></li>
                  <li><Link to="/jobSearch1/public-administration-policy/" className=''>Public Administration and Policy </Link></li>
                  <li><Link to="/jobSearch1/religious-studies-theology/" className=''>Religious Studies and Theology </Link></li>
                  <li><Link to="/jobSearch1/security-studies/" className=''>Security Studies </Link></li>
                  <li><Link to="/jobSearch1/sign-language/" className=''>Sign Language </Link></li>
                  <li><Link to="/jobSearch1/social-work/" className=''>Social Work </Link></li>
                  <li><Link to="/jobSearch1/sociology/" className=''>Sociology </Link></li>
                  <li><Link to="/jobSearch1/urban-studies-planning/" className=''>Urban Studies and Planning </Link></li>
                  <li><Link to="/jobSearch1/women-s-gender-studies/" className=''>Women's and Gender Studies </Link></li>
                  <li><Link to="/jobSearch1/liberal-arts-other-specialities/" className=''>Other Liberal Arts Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Medicine </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/chiropractic/" className=''>Chiropractic </Link></li>
                  <li><Link to="/jobSearch1/dentistry/" className=''>Dentistry </Link></li>
                  <li><Link to="/jobSearch1/medical-research/" className=''>Medical Research </Link></li>
                  <li><Link to="/jobSearch1/pharmacy-pharmacology/" className=''>Pharmacy and Pharmacology </Link></li>
                  <li><Link to="/jobSearch1/physician-assistant/" className=''>Physician Assistants </Link></li>
                  <li><Link to="/jobSearch1/physicians/" className=''>Physicians </Link></li>
                  <li><Link to="/jobSearch1/medicine-other-specialities/" className=''>Other Medicine Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Science </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/astronomy-astrophysics/" className=''>Astronomy and Astrophysics </Link></li>
                  <li><Link to="/jobSearch1/biochemistry-molecular-biology/" className=''>Biochemistry and Molecular Biology </Link></li>
                  <li><Link to="/jobSearch1/biology/" className=''>Biology </Link></li>
                  <li><Link to="/jobSearch1/chemistry/" className=''>Chemistry </Link></li>
                  <li><Link to="/jobSearch1/computer-science/" className=''>Computer Science </Link></li>
                  <li><Link to="/jobSearch1/geography/" className=''>Geography </Link></li>
                  <li><Link to="/jobSearch1/geology-earth-sciences-oceanography/" className=''>Geology, Earth Sciences, and Oceanography </Link></li>
                  <li><Link to="/jobSearch1/library-information-science/" className=''>Library and Information Science </Link></li>
                  <li><Link to="/jobSearch1/mathematics/" className=''>Mathematics </Link></li>
                  <li><Link to="/jobSearch1/physics/" className=''>Physics </Link></li>
                  <li><Link to="/jobSearch1/statistics/" className=''>Statistics </Link></li>
                  <li><Link to="/jobSearch1/science-other-speciality/" className=''>Other Science Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/jobSearch1/" className='text-[#f4a10c] font-bold'>Technical and Career </Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobSearch1/automotive-technology/" className=''>Automotive Technology </Link></li>
                  <li><Link to="/jobSearch1/aviation/" className=''>Aviation </Link></li>
                  <li><Link to="/jobSearch1/construction-building-trades/" className=''>Construction and Building Trades </Link></li>
                  <li><Link to="/jobSearch1/cosmetology/" className=''>Cosmetology </Link></li>
                  <li><Link to="/jobSearch1/culinary-arts/" className=''>Culinary Arts </Link></li>
                  <li><Link to="/jobSearch1/dental-hygienists-assistants/" className=''>Dental Hygienists and Assistants </Link></li>
                  <li><Link to="/jobSearch1/diagnostic-imaging-radiography/" className=''>Diagnostic Imaging and Radiography </Link></li>
                  <li><Link to="/jobSearch1/electronics/" className=''>Electronics </Link></li>
                  <li><Link to="/jobSearch1/fire-science/" className=''>Fire Science </Link></li>
                  <li><Link to="/jobSearch1/massage-therapy/" className=''>Massage Therapy </Link></li>
                  <li><Link to="/jobSearch1/medical-assistants/" className=''>Medical Assistants </Link></li>
                  <li><Link to="/jobSearch1/medical-billing-coding/" className=''>Medical Billing and Coding </Link></li>
                  <li><Link to="/jobSearch1/paramedics-emts/" className=''>Paramedics and EMTs </Link></li>
                  <li><Link to="/jobSearch1/respiratory-care/" className=''>Respiratory Care </Link></li>
                  <li><Link to="/jobSearch1/surgical-technology/" className=''>Surgical Technology </Link></li>
                  <li><Link to="/jobSearch1/telecommunications/" className=''>Telecommunications </Link></li>
                  <li><Link to="/jobSearch1/tourism/" className=''>Tourism </Link></li>
                  <li><Link to="/jobSearch1/" className=''>Other Technical and Career Faculty </Link></li>
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