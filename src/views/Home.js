import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { setSearchJobCriteria } from '../store/postsSlice';
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
      navigate(`/searchJobResult`)
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
          //ar newUrl = `https://academicjobs.com/`
          sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          console.log(a)
          dispatch(setSearchJobCriteria(a))
          navigate(`/searchJobResult`)
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
                navigate(`/searchJobResult`)
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
      <div className="cate-group section23 bg-gray-700">
        <div className="widget__text-block">
          <div className="faculty-container grid grid-cols-4 gap-10 px-2 py-2">
            <div className="column">
              <ul className="myUL">
                <li><a href="https://academicjobs.com/categories/administration-support/" className="text-orange-500">Administration & Support</a></li>
                <ul className="innerUL">
                  <li><a href="https://academicjobs.com/categories/human-resources/" className="text-white">Human Resources</a></li>
                  <li><a href="https://academicjobs.com/categories/administration-support/" className="text-white">Admin Other Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/agriculture/" class="text-orange-500">Agriculture </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/agriculture/agricultural-economics-agribusiness/" class="text-white">Agricultural Economics and Agribusiness</a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/agriculture-extension/" class="text-white">Agricultural Extension </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/animal-science/" class="text-white">Animal Science</a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/entomology/" class="text-white">Entomology </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/environmental-science-ecology-forestry/" class="text-white">Environmental Science, Ecology, and Forestry </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/agriculture-food-science/" class="text-white">Food Science </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/horticulture-landscape-architecture/" class="text-white">Horticulture and Landscape Architecture </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/agriculture-plant-soil-science/" class="text-white">Plant and Soil Science </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/veterinary-science/" class="text-white">Veterinary Medicine </a></li>
                  <li><a href="https://academicjobs.com/categories/agriculture/" class="text-white">Other Agriculture Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/business/" class="text-orange-500">Business </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/business/accounting/" class="text-white">Business Accounting </a></li>
                  <li><a href="https://academicjobs.com/categories/business/administration/" class="text-white">Business Administration </a></li>
                  <li><a href="https://academicjobs.com/categories/business/law/" class="text-white">Business Law </a></li>
                  <li><a href="https://academicjobs.com/categories/business/entrepreneurship/" class="text-white">Entrepreneurship </a></li>
                  <li><a href="https://academicjobs.com/categories/business/finance/" class="text-white">Finance </a></li>
                  <li><a href="https://academicjobs.com/categories/business/hotel-restaurant-management/" class="text-white">Hotel and Restaurant Management </a></li>
                  <li><a href="https://academicjobs.com/categories/business/human-resources/" class="text-white">Business Human Resources </a></li>
                  <li><a href="https://academicjobs.com/categories/business/information-systems-technology/" class="text-white">Information Systems and Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/business/international-business/" class="text-white">International Business </a></li>
                  <li><a href="https://academicjobs.com/categories/business/business-management/" class="text-white">Business Management </a></li>
                  <li><a href="https://academicjobs.com/categories/business/marketing-sales/" class="text-white">Marketing and Sales </a></li>
                  <li><a href="https://academicjobs.com/categories/business/business-other-specialty/" class="text-white">Other Business Specialities </a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/communications/" class="text-orange-500">Communications </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/communications/broadcast-journalism/" class="text-white">Broadcast Journalism </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/journalism/" class="text-white">Journalism </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/media-communication-studies/" class="text-white">Media and Communication Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/public-relations-advertising/" class="text-white">Public Relations and Advertising </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/faculty-communications-radio-tv-film/" class="text-white">Radio, Television, and Film </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/speech-public-speaking/" class="text-white">Speech and Public Speaking </a></li>
                  <li><a href="https://academicjobs.com/categories/communications/communications-other-specialty/" class="text-white">Other Communications Specialities </a></li>
                </ul>
              </ul>
            </div>
            <div class="column">
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/faculty-executive/" class="text-orange-500">Executive Jobs </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/executive-president-chancellor/" class="text-white">President & Chancellor </a></li>
                  <li><a href="https://academicjobs.com/categories/faculty-executive/" class="text-white">Executive In Faculty</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/engineering/" class="text-orange-500">Engineering </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/engineering/aerospace/" class="text-white">Aerospace Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/engineering-agricultural/" class="text-white">Agricultural Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/biological-engineering/" class="text-white">Biological Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/chemical-engineering/" class="text-white">Chemical Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/civil-environmental-engineering/" class="text-white">Civil and Environmental Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/computer-engineering/" class="text-white">Computer Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/electrical-engineering/" class="text-white">Electrical Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/industrial-manufacturing-engineering/" class="text-white">Industrial and Manufacturing Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/mechanical-engineering/" class="text-white">Mechanical Engineering </a></li>
                  <li><a href="https://academicjobs.com/categories/engineering/engineering-other-specialty/" class="text-white">Other Engineering Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/education/" class="text-orange-500">Education </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/education/adult-distance-education/" class="text-white">Adult and Distance Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/counselor-education/" class="text-white">Counselor Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/curriculum-instruction/" class="text-white">Curriculum and Instruction </a></li>
                  <li><a href="https://academicjobs.com/categories/education/admin-leadership-education/" class="text-white">Educational Administration and Leadership </a></li>
                  <li><a href="https://academicjobs.com/categories/education/educational-psychology/" class="text-white">Educational Psychology </a></li>
                  <li><a href="https://academicjobs.com/categories/education/higher-education/" class="text-white">Higher Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/education-instructional-technology-design/" class="text-white">Instructional Technology and Design </a></li>
                  <li><a href="https://academicjobs.com/categories/education/reading-literacy/" class="text-white">Reading and Literacy </a></li>
                  <li><a href="https://academicjobs.com/categories/education/school-psychology/" class="text-white">School Psychology </a></li>
                  <li><a href="https://academicjobs.com/categories/education/special-education/" class="text-white">Special Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education/" class="text-white">Teacher Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-early-childhood/" class="text-white">Teacher Education - Early Childhood </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-elementary/" class="text-white">Teacher Education - Elementary </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-middle/" class="text-white">Teacher Education - Middle School </a></li>
                  <li><a href="https://academicjobs.com/categories/education/teacher-education-secondary/" class="text-white">Teacher Education - Secondary Education </a></li>
                  <li><a href="https://academicjobs.com/categories/education/education-other-specialty/" class="text-white">Other Education Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/fine-applied-arts/" class="text-orange-500">Fine and Applied Arts </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/architecture/" class="text-white">Architecture </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/art/" class="text-white">Art </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/art-history/" class="text-white">Art History </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/dance/" class="text-white">Dance </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/digital-arts/" class="text-white">Digital Arts </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/fashion-textile-design/" class="text-white">Fashion and Textile Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/graphic-design/" class="text-white">Graphic Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/industrial-design/" class="text-white">Industrial Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/interior-design/" class="text-white">Interior Design </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/music/" class="text-white">Music </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/photography/" class="text-white">Photography </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/theatre/" class="text-white">Theatre </a></li>
                  <li><a href="https://academicjobs.com/categories/fine-applied-arts/fine-applied-arts-other-specialities/" class="text-white">Other Fine and Applied Arts Specialities </a></li>
                </ul>
              </ul>
            </div>
            <div class="column">
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/health-sciences/" class="text-orange-500">Health Sciences </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/health-sciences/athletic-training/" class="text-white">Athletic Training </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/communication-sciences-disorders/" class="text-white">Communication Sciences and Disorders </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/health-education-promotion/" class="text-white">Health Education and Promotion </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/health-information-technology/" class="text-white">Health Information Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/healthcare-administration/" class="text-white">Healthcare Administration </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/kinesiology-exercise-science-phys-ed/" class="text-white">Kinesiology, Exercise Science, and Phys Ed </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/nursing/" class="text-white">Nursing </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/nutrition-dietetics/" class="text-white">Nutrition and Dietetics </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/occupational-therapy/" class="text-white">Occupational Therapy </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/physical-therapy/" class="text-white">Physical Therapy </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/public-environmental-health/" class="text-white">Public and Environmental Health </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/recreation-leisure-studies/" class="text-white">Recreation and Leisure Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/sport-management/" class="text-white">Sport Management </a></li>
                  <li><a href="https://academicjobs.com/categories/health-sciences/health-sciences-other-specialities/" class="text-white">Other Health Sciences Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/law-legal-studies/" class="text-orange-500">Law and Legal Studies </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/law-legal-studies/" class="text-white">Law and Legal Studies </a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/liberal-arts/" class="text-orange-500">Liberal Arts </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/liberal-arts/american-studies/" class="text-white">American Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/anthropology/" class="text-white">Anthropology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/criminal-justice/" class="text-white">Criminal Justice </a></li>
                  <li><a href="https://academicjobs.com/categories/jobs/economics" class="text-white">Economics </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/english-literature/" class="text-white">English and Literature </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/english-as-second-language/" class="text-white">English as a Second Language </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/ethnic-multicultural-studies/" class="text-white">Ethnic and Multicultural Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/foreign-languages-literatures/" class="text-white">Foreign Languages and Literatures </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/history/" class="text-white">History </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/human-development-family-studies/" class="text-white">Human Development and Family Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/humanities/" class="text-white">Humanities </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/linguistics/" class="text-white">Linguistics </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/philosophy/" class="text-white">Philosophy </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/political-science/" class="text-white">Political Science </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/psychology/" class="text-white">Psychology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/public-administration-policy/" class="text-white">Public Administration and Policy </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/religious-studies-theology/" class="text-white">Religious Studies and Theology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/security-studies/" class="text-white">Security Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/sign-language/" class="text-white">Sign Language </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/social-work/" class="text-white">Social Work </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/sociology/" class="text-white">Sociology </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/urban-studies-planning/" class="text-white">Urban Studies and Planning </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/women-s-gender-studies/" class="text-white">Women's and Gender Studies </a></li>
                  <li><a href="https://academicjobs.com/categories/liberal-arts/liberal-arts-other-specialities/" class="text-white">Other Liberal Arts Specialities</a></li>
                </ul>
              </ul>
            </div>

            <div class="column">
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/industry/" class="text-orange-500">Industry Jobs </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/industry/" class="text-white">Industry</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/medicine/" class="text-orange-500">Medicine </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/medicine/chiropractic/" class="text-white">Chiropractic </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/dentistry/" class="text-white">Dentistry </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/medical-research/" class="text-white">Medical Research </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/pharmacy-pharmacology/" class="text-white">Pharmacy and Pharmacology </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/physician-assistant/" class="text-white">Physician Assistants </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/physicians/" class="text-white">Physicians </a></li>
                  <li><a href="https://academicjobs.com/categories/medicine/medicine-other-specialities/" class="text-white">Other Medicine Specialities</a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/science/" class="text-orange-500">Science </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/science/astronomy-astrophysics/" class="text-white">Astronomy and Astrophysics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/biochemistry-molecular-biology/" class="text-white">Biochemistry and Molecular Biology </a></li>
                  <li><a href="https://academicjobs.com/categories/science/biology/" class="text-white">Biology </a></li>
                  <li><a href="https://academicjobs.com/categories/science/chemistry/" class="text-white">Chemistry </a></li>
                  <li><a href="https://academicjobs.com/categories/science/computer-science/" class="text-white">Computer Science </a></li>
                  <li><a href="https://academicjobs.com/categories/science/geography/" class="text-white">Geography </a></li>
                  <li><a href="https://academicjobs.com/categories/science/geology-earth-sciences-oceanography/" class="text-white">Geology, Earth Sciences, and Oceanography </a></li>
                  <li><a href="https://academicjobs.com/categories/science/library-information-science/" class="text-white">Library and Information Science </a></li>
                  <li><a href="https://academicjobs.com/categories/science/mathematics/" class="text-white">Mathematics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/physics/" class="text-white">Physics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/statistics/" class="text-white">Statistics </a></li>
                  <li><a href="https://academicjobs.com/categories/science/science-other-speciality/" class="text-white">Other Science Specialities </a></li>
                </ul>
              </ul>
              <ul class="myUL">
                <li><a href="https://academicjobs.com/categories/technical-career/" class="text-orange-500">Technical and Career </a></li>
                <ul class="innerUL">
                  <li><a href="https://academicjobs.com/categories/technical-career/automotive-technology/" class="text-white">Automotive Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/aviation/" class="text-white">Aviation </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/construction-building-trades/" class="text-white">Construction and Building Trades </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/cosmetology/" class="text-white">Cosmetology </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/culinary-arts/" class="text-white">Culinary Arts </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/dental-hygienists-assistants/" class="text-white">Dental Hygienists and Assistants </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/diagnostic-imaging-radiography/" class="text-white">Diagnostic Imaging and Radiography </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/electronics/" class="text-white">Electronics </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/fire-science/" class="text-white">Fire Science </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/massage-therapy/" class="text-white">Massage Therapy </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/medical-assistants/" class="text-white">Medical Assistants </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/medical-billing-coding/" class="text-white">Medical Billing and Coding </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/paramedics-emts/" class="text-white">Paramedics and EMTs </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/respiratory-care/" class="text-white">Respiratory Care </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/surgical-technology/" class="text-white">Surgical Technology </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/telecommunications/" class="text-white">Telecommunications </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/tourism/" class="text-white">Tourism </a></li>
                  <li><a href="https://academicjobs.com/categories/technical-career/" class="text-white">Other Technical and Career Faculty </a></li>
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
