import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
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
      dispatch(setSearchJobCriteria(a))
      navigate(`/JobSearch`)
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
          dispatch(setRegion(countryMappings[country.toLowerCase()]))
          a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          console.log(a)
          dispatch(setSearchJobCriteria(a))
          navigate(`/JobSearch`)
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
      <div class="blurb text-center py-8">
        <h1 class="text-black font-bold text-2xl md:text-3xl lg:text-4xl">ALL YOUR BEST UNIVERSITY JOBS</h1>
        <div class="newLine mb-4">
          <p class="font-semibold">Find the best academic positions</p>
          <p class="font-semibold">and administrative jobs in higher ed.</p>
        </div>
        <div class="newLine">
          <p class="font-semibold">Search for academic jobs, college careers</p>
          <p class="font-semibold">and faculty positions online.</p>
        </div>
      </div>
      <div className="bg-white flex flex-col px-[10rem] ">
        <h2 className="text-xl text-[#f4a10c] font-extrabold">REGION HOME PAGES</h2>
        <div className="grid grid-cols-4 gap-4 py-5 text-left">
          <a href="https://academicjobs.com/usa/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold  ">
            United States
          </a>
          <a href="https://academicjobs.com/australia/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            Australia
          </a>
          <a href="https://academicjobs.com/uk/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            United Kingdom
          </a>
          <a href="https://academicjobs.com/canada/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            Canada
          </a>
          <a href="https://academicjobs.com/newzealand/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">New Zealand
          </a>
          <a href="https://academicjobs.com/europe/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            Europe
          </a>
          <a href="https://academicjobs.com/india/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            India
          </a>
          <a href="https://academicjobs.com/asia/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            Asia
          </a>
          <a href="https://academicjobs.com/africa/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">Africa
          </a>
          <a href="https://academicjobs.com/middleeast/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            Middle East
          </a>
          <a href="https://academicjobs.com/southamerica/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            South America
          </a>
          <a href="https://academicjobs.com/jobs/other-jobs/" className="text-[#f4a10c] hover:text-orange-600 text-lg font-semibold ">
            Other
          </a>
        </div>
      </div>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid grid-cols-4 gap-10 px-2 py-2">
            <div className="column">
              <ul className="myUL">
                <li><a href="https://academicjobs.com/categories/administration-support/" className='text-[#f4a10c]'>Administration & Support</a></li>
                <ul className="innerUL">
                  <li><a href="https://academicjobs.com/categories/human-resources/" >Human Resources</a></li>
                  <li><a href="https://academicjobs.com/categories/administration-support/" >Admin Other Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/agriculture/" className='text-[#f4a10c]'>Agriculture </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/agriculture/agricultural-economics-agribusiness/" className=''>Agricultural Economics and Agribusiness</a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/agriculture-extension/" className=''>Agricultural Extension </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/animal-science/" className=''>Animal Science</a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/entomology/" className=''>Entomology </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/environmental-science-ecology-forestry/" className=''>Environmental Science, Ecology, and Forestry </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/agriculture-food-science/" className=''>Food Science </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/horticulture-landscape-architecture/" className=''>Horticulture and Landscape Architecture </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/agriculture-plant-soil-science/" className=''>Plant and Soil Science </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/veterinary-science/" className=''>Veterinary Medicine </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/" className=''>Other Agriculture Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/business/" className='text-[#f4a10c]'>Business </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/business/accounting/" className=''>Business Accounting </a></li>
                  <li><a href="https://academicjobs.com/categories/business/administration/" className=''>Business Administration </a></li>
                  <li><a href="https://academicjobs.com/categories/business/law/" className=''>Business Law </a></li>
                  <li><a href="https://academicjobs.com/categories/business/entrepreneurship/" className=''>Entrepreneurship </a></li>
                  <li><a href="https://academicjobs.com/categories/business/finance/" className=''>Finance </a></li>
                  <li><a href="https://academicjobs.com/categories/business/hotel-restaurant-management/" className=''>Hotel and Restaurant Management </a></li>
                  <li><a href="https://academicjobs.com/categories/business/human-resources/" className=''>Business Human Resources </a></li>
                  <li><a href="https://academicjobs.com/categories/business/information-systems-technology/" className=''>Information Systems and Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/business/international-business/" className=''>International Business </a></li>
                  <li><a href="https://academicjobs.com/categories/business/business-management/" className=''>Business Management </a></li>
                  <li><a href="https://academicjobs.com/categories/business/marketing-sales/" className=''>Marketing and Sales </a></li>
                  <li><a href="https://academicjobs.com/categories/business/business-other-specialty/" className=''>Other Business Specialities </a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/communications/" className='text-[#f4a10c]'>Communications </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/communications/broadcast-journalism/" className=''>Broadcast Journalism </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/journalism/" className=''>Journalism </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/media-communication-studies/" className=''>Media and Communication Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/public-relations-advertising/" className=''>Public Relations and Advertising </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/faculty-communications-radio-tv-film/" className=''>Radio, Television, and Film </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/speech-public-speaking/" className=''>Speech and Public Speaking </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/communications-other-specialty/" className=''>Other Communications Specialities </a></li>
                </ul>
              </ul>
            </div>
            <div class="column">
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/faculty-executive/" className='text-[#f4a10c]'>Executive Jobs </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/executive-president-chancellor/" className=''>President & Chancellor </a></li>
                  <li><a href="https://academicjobs.com/categories/faculty-executive/" className=''>Executive In Faculty</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/engineering/" className='text-[#f4a10c]'>Engineering </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/engineering/aerospace/" className=''>Aerospace Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/engineering-agricultural/" className=''>Agricultural Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/biological-engineering/" className=''>Biological Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/chemical-engineering/" className=''>Chemical Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/civil-environmental-engineering/" className=''>Civil and Environmental Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/computer-engineering/" className=''>Computer Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/electrical-engineering/" className=''>Electrical Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/industrial-manufacturing-engineering/" className=''>Industrial and Manufacturing Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/mechanical-engineering/" className=''>Mechanical Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/engineering-other-specialty/" className=''>Other Engineering Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/education/" className='text-[#f4a10c]'>Education </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/education/adult-distance-education/" className=''>Adult and Distance Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/counselor-education/" className=''>Counselor Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/curriculum-instruction/" className=''>Curriculum and Instruction </a></li>
                  <li><a href="https://academicjobs.com/categories/education/admin-leadership-education/" className=''>Educational Administration and Leadership </a></li>
                  <li><a href="https://academicjobs.com/categories/education/educational-psychology/" className=''>Educational Psychology </a></li>
                  <li><a href="https://academicjobs.com/categories/education/higher-education/" className=''>Higher Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/education-instructional-technology-design/" className=''>Instructional Technology and Design </a></li>
                  <li><a href="https://academicjobs.com/categories/education/reading-literacy/" className=''>Reading and Literacy </a></li>
                  <li><a href="https://academicjobs.com/categories/education/school-psychology/" className=''>School Psychology </a></li>
                  <li><a href="https://academicjobs.com/categories/education/special-education/" className=''>Special Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education/" className=''>Teacher Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-early-childhood/" className=''>Teacher Education - Early Childhood </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-elementary/" className=''>Teacher Education - Elementary </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-middle/" className=''>Teacher Education - Middle School </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-secondary/" className=''>Teacher Education - Secondary Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/education-other-specialty/" className=''>Other Education Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/fine-applied-arts/" className='text-[#f4a10c]'>Fine and Applied Arts </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/architecture/" className=''>Architecture </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/art/" className=''>Art </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/art-history/" className=''>Art History </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/dance/" className=''>Dance </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/digital-arts/" className=''>Digital Arts </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/fashion-textile-design/" className=''>Fashion and Textile Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/graphic-design/" className=''>Graphic Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/industrial-design/" className=''>Industrial Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/interior-design/" className=''>Interior Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/music/" className=''>Music </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/photography/" className=''>Photography </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/theatre/" className=''>Theatre </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/fine-applied-arts-other-specialities/" className=''>Other Fine and Applied Arts Specialities </a></li>
                </ul>
              </ul>
            </div>
            <div class="column">
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/health-sciences/" className='text-[#f4a10c]'>Health Sciences </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/health-sciences/athletic-training/" className=''>Athletic Training </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/communication-sciences-disorders/" className=''>Communication Sciences and Disorders </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/health-education-promotion/" className=''>Health Education and Promotion </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/health-information-technology/" className=''>Health Information Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/healthcare-administration/" className=''>Healthcare Administration </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/kinesiology-exercise-science-phys-ed/" className=''>Kinesiology, Exercise Science, and Phys Ed </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/nursing/" className=''>Nursing </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/nutrition-dietetics/" className=''>Nutrition and Dietetics </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/occupational-therapy/" className=''>Occupational Therapy </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/physical-therapy/" className=''>Physical Therapy </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/public-environmental-health/" className=''>Public and Environmental Health </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/recreation-leisure-studies/" className=''>Recreation and Leisure Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/sport-management/" className=''>Sport Management </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/health-sciences-other-specialities/" className=''>Other Health Sciences Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/law-legal-studies/" className='text-[#f4a10c]'>Law and Legal Studies </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/law-legal-studies/" className=''>Law and Legal Studies </a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/liberal-arts/" className='text-[#f4a10c]'>Liberal Arts </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/liberal-arts/american-studies/" className=''>American Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/anthropology/" className=''>Anthropology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/criminal-justice/" className=''>Criminal Justice </a></li>
                  <li><a href="https://academicjobs.com/categories/jobs/economics" className=''>Economics </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/english-literature/" className=''>English and Literature </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/english-as-second-language/" className=''>English as a Second Language </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/ethnic-multicultural-studies/" className=''>Ethnic and Multicultural Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/foreign-languages-literatures/" className=''>Foreign Languages and Literatures </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/history/" className=''>History </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/human-development-family-studies/" className=''>Human Development and Family Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/humanities/" className=''>Humanities </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/linguistics/" className=''>Linguistics </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/philosophy/" className=''>Philosophy </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/political-science/" className=''>Political Science </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/psychology/" className=''>Psychology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/public-administration-policy/" className=''>Public Administration and Policy </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/religious-studies-theology/" className=''>Religious Studies and Theology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/security-studies/" className=''>Security Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/sign-language/" className=''>Sign Language </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/social-work/" className=''>Social Work </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/sociology/" className=''>Sociology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/urban-studies-planning/" className=''>Urban Studies and Planning </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/women-s-gender-studies/" className=''>Women's and Gender Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/liberal-arts-other-specialities/" className=''>Other Liberal Arts Specialities</a></li>
                </ul>
              </ul>
            </div>

            <div class="column">
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/industry/" className='text-[#f4a10c]'>Industry Jobs </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/industry/" className=''>Industry</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/medicine/" className='text-[#f4a10c]'>Medicine </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/medicine/chiropractic/" className=''>Chiropractic </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/dentistry/" className=''>Dentistry </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/medical-research/" className=''>Medical Research </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/pharmacy-pharmacology/" className=''>Pharmacy and Pharmacology </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/physician-assistant/" className=''>Physician Assistants </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/physicians/" className=''>Physicians </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/medicine-other-specialities/" className=''>Other Medicine Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/science/" className='text-[#f4a10c]'>Science </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/science/astronomy-astrophysics/" className=''>Astronomy and Astrophysics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/biochemistry-molecular-biology/" className=''>Biochemistry and Molecular Biology </a></li>
                  <li><a href="https://academicjobs.com/categories/science/biology/" className=''>Biology </a></li>
                  <li><a href="https://academicjobs.com/categories/science/chemistry/" className=''>Chemistry </a></li>
                  <li><a href="https://academicjobs.com/categories/science/computer-science/" className=''>Computer Science </a></li>
                  <li><a href="https://academicjobs.com/categories/science/geography/" className=''>Geography </a></li>
                  <li><a href="https://academicjobs.com/categories/science/geology-earth-sciences-oceanography/" className=''>Geology, Earth Sciences, and Oceanography </a></li>
                  <li><a href="https://academicjobs.com/categories/science/library-information-science/" className=''>Library and Information Science </a></li>
                  <li><a href="https://academicjobs.com/categories/science/mathematics/" className=''>Mathematics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/physics/" className=''>Physics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/statistics/" className=''>Statistics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/science-other-speciality/" className=''>Other Science Specialities </a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/technical-career/" className='text-[#f4a10c]'>Technical and Career </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/technical-career/automotive-technology/" className=''>Automotive Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/aviation/" className=''>Aviation </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/construction-building-trades/" className=''>Construction and Building Trades </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/cosmetology/" className=''>Cosmetology </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/culinary-arts/" className=''>Culinary Arts </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/dental-hygienists-assistants/" className=''>Dental Hygienists and Assistants </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/diagnostic-imaging-radiography/" className=''>Diagnostic Imaging and Radiography </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/electronics/" className=''>Electronics </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/fire-science/" className=''>Fire Science </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/massage-therapy/" className=''>Massage Therapy </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/medical-assistants/" className=''>Medical Assistants </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/medical-billing-coding/" className=''>Medical Billing and Coding </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/paramedics-emts/" className=''>Paramedics and EMTs </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/respiratory-care/" className=''>Respiratory Care </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/surgical-technology/" className=''>Surgical Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/telecommunications/" className=''>Telecommunications </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/tourism/" className=''>Tourism </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/" className=''>Other Technical and Career Faculty </a></li>
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
