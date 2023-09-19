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
      navigate("/JobSearch", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[sessionStorage.getItem("location")].searchLocation } });
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
          navigate("/JobSearch", { state: { q: keyWordRef.current.value.trim(), l: countryMappings1[sessionStorage.getItem("location")].searchLocation } });
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
          <a href="https://academicjobs.com/australia/" className="">
            Australia
          </a>
          <a href="https://academicjobs.com/uk/" className="">
            United Kingdom
          </a>
          <a href="https://academicjobs.com/canada/" className="">
            Canada
          </a>
          <a href="https://academicjobs.com/newzealand/" className="">New Zealand
          </a>
          <a href="https://academicjobs.com/europe/" className="">
            Europe
          </a>
          <a href="https://academicjobs.com/india/" className="">
            India
          </a>
          <a href="https://academicjobs.com/asia/" className="">
            Asia
          </a>
          <a href="https://academicjobs.com/africa/" className="">Africa
          </a>
          <a href="https://academicjobs.com/middleeast/" className="">
            Middle East
          </a>
          <a href="https://academicjobs.com/southamerica/" className="">
            South America
          </a>
          <a href="https://academicjobs.com/jobs/other-jobs/" className="">
            Other
          </a>
        </div>
      </div>
      <div className="bg-white flex flex-col  ">
        <h2 className="text-xl text-[#f4a10c] font-bold mt-10">Academic Positions / Roles</h2>
        <div className=" text-left  grid grid-cols-1 md:grid-cols-4 gap-4  py-2">
          <Link to="/JobSearch/Lecturer" className=''>Lecturer</Link>
          <Link to="/JobSearch/Professor" className=''>Professor</Link>
          <Link to="/JobSearch/Researcher" className=''>Researcher</Link>
          <Link to="/JobSearch/Lab-Technician" className=''>Lab Technician</Link>
          <Link to="/JobSearch/Assistant-Professor" className=''>Assistant Professor</Link>
          <Link to="/JobSearch/Associate-Professor" className=''>Associate Professor</Link>
          <Link to="/JobSearch/Postdoctoral-Researcher" className=''>Postdoctoral Researcher</Link>
          <Link to="/JobSearch/Postdoctoral-Fellow" className=''>Postdoctoral Fellow</Link>
          <Link to="/JobSearch/Visiting-Global-Academic" className=''>Visiting Global Academic</Link>
          <Link to="/JobSearch/Visiting-Scholar-Fellow" className=''>Visiting Scholar or Fellow</Link>
          <Link to="/JobSearch/Tutor" className=''>Tutor</Link>
          <Link to="/JobSearch/Other" className=''>Other</Link>
        </div>
      </div>
      <h2 className="text-xl text-[#f4a10c] font-bold mt-10">Higher Ed Job Specialties</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid grid-cols-4 gap-4 py-2">
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/JobSearch/administration-support/" className='text-[#f4a10c] font-bold'>Administration & Support</Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/human-resources/" >Human Resources</Link></li>
                  <li><Link to="/JobSearch/administration-support/" >Admin Other Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Agriculture </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/agricultural-economics-agribusiness/" className=''>Agricultural Economics and Agribusiness</Link></li>
                  <li><Link to="/JobSearch/agriculture-extension/" className=''>Agricultural Extension </Link></li>
                  <li><Link to="/JobSearch/animal-science/" className=''>Animal Science</Link></li>
                  <li><Link to="/JobSearch/entomology/" className=''>Entomology </Link></li>
                  <li><Link to="/JobSearch/environmental-science-ecology-forestry/" className=''>Environmental Science, Ecology, and Forestry </Link></li>
                  <li><Link to="/JobSearch/agriculture-food-science/" className=''>Food Science </Link></li>
                  <li><Link to="/JobSearch/horticulture-landscape-architecture/" className=''>Horticulture and Landscape Architecture </Link></li>
                  <li><Link to="/JobSearch/agriculture-plant-soil-science/" className=''>Plant and Soil Science </Link></li>
                  <li><Link to="/JobSearch/veterinary-science/" className=''>Veterinary Medicine </Link></li>
                  <li><Link to="/JobSearch/" className=''>Other Agriculture Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Business </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/accounting/" className=''>Business Accounting </Link></li>
                  <li><Link to="/JobSearch/administration/" className=''>Business Administration </Link></li>
                  <li><Link to="/JobSearch/law/" className=''>Business Law </Link></li>
                  <li><Link to="/JobSearch/entrepreneurship/" className=''>Entrepreneurship </Link></li>
                  <li><Link to="/JobSearch/finance/" className=''>Finance </Link></li>
                  <li><Link to="/JobSearch/hotel-restaurant-management/" className=''>Hotel and Restaurant Management </Link></li>
                  <li><Link to="/JobSearch/human-resources/" className=''>Business Human Resources </Link></li>
                  <li><Link to="/JobSearch/information-systems-technology/" className=''>Information Systems and Technology </Link></li>
                  <li><Link to="/JobSearch/international-business/" className=''>International Business </Link></li>
                  <li><Link to="/JobSearch/business-management/" className=''>Business Management </Link></li>
                  <li><Link to="/JobSearch/marketing-sales/" className=''>Marketing and Sales </Link></li>
                  <li><Link to="/JobSearch/business-other-specialty/" className=''>Other Business Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Fine and Applied Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/architecture/" className=''>Architecture </Link></li>
                  <li><Link to="/JobSearch/art/" className=''>Art </Link></li>
                  <li><Link to="/JobSearch/art-history/" className=''>Art History </Link></li>
                  <li><Link to="/JobSearch/dance/" className=''>Dance </Link></li>
                  <li><Link to="/JobSearch/digital-arts/" className=''>Digital Arts </Link></li>
                  <li><Link to="/JobSearch/fashion-textile-design/" className=''>Fashion and Textile Design </Link></li>
                  <li><Link to="/JobSearch/graphic-design/" className=''>Graphic Design </Link></li>
                  <li><Link to="/JobSearch/industrial-design/" className=''>Industrial Design </Link></li>
                  <li><Link to="/JobSearch/interior-design/" className=''>Interior Design </Link></li>
                  <li><Link to="/JobSearch/music/" className=''>Music </Link></li>
                  <li><Link to="/JobSearch/photography/" className=''>Photography </Link></li>
                  <li><Link to="/JobSearch/theatre/" className=''>Theatre </Link></li>
                  <li><Link to="/JobSearch/fine-applied-arts-other-specialities/" className=''>Other Fine and Applied Arts Specialities </Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/JobSearch/faculty-executive/" className='text-[#f4a10c] font-bold'>
                  Executive Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/executive-president-chancellor/" className=''>President & Chancellor </Link></li>
                  <li><Link to="/JobSearch/faculty-executive/" className=''>Executive In Faculty</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Communications </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/broadcast-journalism/" className=''>Broadcast Journalism </Link></li>
                  <li><Link to="/JobSearch/journalism/" className=''>Journalism </Link></li>
                  <li><Link to="/JobSearch/media-communication-studies/" className=''>Media and Communication Studies </Link></li>
                  <li><Link to="/JobSearch/public-relations-advertising/" className=''>Public Relations and Advertising </Link></li>
                  <li><Link to="/JobSearch/faculty-communications-radio-tv-film/" className=''>Radio, Television, and Film </Link></li>
                  <li><Link to="/JobSearch/speech-public-speaking/" className=''>Speech and Public Speaking </Link></li>
                  <li><Link to="/JobSearch/communications-other-specialty/" className=''>Other Communications Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Engineering </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/aerospace/" className=''>Aerospace Engineering </Link></li>
                  <li><Link to="/JobSearch/engineering-agricultural/" className=''>Agricultural Engineering </Link></li>
                  <li><Link to="/JobSearch/biological-engineering/" className=''>Biological Engineering </Link></li>
                  <li><Link to="/JobSearch/chemical-engineering/" className=''>Chemical Engineering </Link></li>
                  <li><Link to="/JobSearch/civil-environmental-engineering/" className=''>Civil and Environmental Engineering </Link></li>
                  <li><Link to="/JobSearch/computer-engineering/" className=''>Computer Engineering </Link></li>
                  <li><Link to="/JobSearch/electrical-engineering/" className=''>Electrical Engineering </Link></li>
                  <li><Link to="/JobSearch/industrial-manufacturing-engineering/" className=''>Industrial and Manufacturing Engineering </Link></li>
                  <li><Link to="/JobSearch/mechanical-engineering/" className=''>Mechanical Engineering </Link></li>
                  <li><Link to="/JobSearch/engineering-other-specialty/" className=''>Other Engineering Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Education </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/adult-distance-education/" className=''>Adult and Distance Education </Link></li>
                  <li><Link to="/JobSearch/counselor-education/" className=''>Counselor Education </Link></li>
                  <li><Link to="/JobSearch/curriculum-instruction/" className=''>Curriculum and Instruction </Link></li>
                  <li><Link to="/JobSearch/admin-leadership-education/" className=''>Educational Administration and Leadership </Link></li>
                  <li><Link to="/JobSearch/educational-psychology/" className=''>Educational Psychology </Link></li>
                  <li><Link to="/JobSearch/higher-education/" className=''>Higher Education </Link></li>
                  <li><Link to="/JobSearch/education-instructional-technology-design/" className=''>Instructional Technology and Design </Link></li>
                  <li><Link to="/JobSearch/reading-literacy/" className=''>Reading and Literacy </Link></li>
                  <li><Link to="/JobSearch/school-psychology/" className=''>School Psychology </Link></li>
                  <li><Link to="/JobSearch/special-education/" className=''>Special Education </Link></li>
                  <li><Link to="/JobSearch/teacher-education/" className=''>Teacher Education </Link></li>
                  <li><Link to="/JobSearch/teacher-education-early-childhood/" className=''>Teacher Education - Early Childhood </Link></li>
                  <li><Link to="/JobSearch/teacher-education-elementary/" className=''>Teacher Education - Elementary </Link></li>
                  <li><Link to="/JobSearch/teacher-education-middle/" className=''>Teacher Education - Middle School </Link></li>
                  <li><Link to="/JobSearch/teacher-education-secondary/" className=''>Teacher Education - Secondary Education </Link></li>
                  <li><Link to="/JobSearch/education-other-specialty/" className=''>Other Education Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/JobSearch/industry/" className='text-[#f4a10c] font-bold'>Industry Jobs </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/industry/" className=''>Industry</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Health Sciences </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/athletic-training/" className=''>Athletic Training </Link></li>
                  <li><Link to="/JobSearch/communication-sciences-disorders/" className=''>Communication Sciences and Disorders </Link></li>
                  <li><Link to="/JobSearch/health-education-promotion/" className=''>Health Education and Promotion </Link></li>
                  <li><Link to="/JobSearch/health-information-technology/" className=''>Health Information Technology </Link></li>
                  <li><Link to="/JobSearch/healthcare-administration/" className=''>Healthcare Administration </Link></li>
                  <li><Link to="/JobSearch/kinesiology-exercise-science-phys-ed/" className=''>Kinesiology, Exercise Science, and Phys Ed </Link></li>
                  <li><Link to="/JobSearch/nursing/" className=''>Nursing </Link></li>
                  <li><Link to="/JobSearch/nutrition-dietetics/" className=''>Nutrition and Dietetics </Link></li>
                  <li><Link to="/JobSearch/occupational-therapy/" className=''>Occupational Therapy </Link></li>
                  <li><Link to="/JobSearch/physical-therapy/" className=''>Physical Therapy </Link></li>
                  <li><Link to="/JobSearch/public-environmental-health/" className=''>Public and Environmental Health </Link></li>
                  <li><Link to="/JobSearch/recreation-leisure-studies/" className=''>Recreation and Leisure Studies </Link></li>
                  <li><Link to="/JobSearch/sport-management/" className=''>Sport Management </Link></li>
                  <li><Link to="/JobSearch/health-sciences-other-specialities/" className=''>Other Health Sciences Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Law and Legal Studies </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/law-legal-studies/" className=''>Law and Legal Studies </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Liberal Arts </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/american-studies/" className=''>American Studies </Link></li>
                  <li><Link to="/JobSearch/anthropology/" className=''>Anthropology </Link></li>
                  <li><Link to="/JobSearch/criminal-justice/" className=''>Criminal Justice </Link></li>
                  <li><Link to="/JobSearch/economics" className=''>Economics </Link></li>
                  <li><Link to="/JobSearch/english-literature/" className=''>English and Literature </Link></li>
                  <li><Link to="/JobSearch/english-as-second-language/" className=''>English as a Second Language </Link></li>
                  <li><Link to="/JobSearch/ethnic-multicultural-studies/" className=''>Ethnic and Multicultural Studies </Link></li>
                  <li><Link to="/JobSearch/foreign-languages-literatures/" className=''>Foreign Languages and Literatures </Link></li>
                  <li><Link to="/JobSearch/history/" className=''>History </Link></li>
                  <li><Link to="/JobSearch/human-development-family-studies/" className=''>Human Development and Family Studies </Link></li>
                  <li><Link to="/JobSearch/humanities/" className=''>Humanities </Link></li>
                  <li><Link to="/JobSearch/linguistics/" className=''>Linguistics </Link></li>
                  <li><Link to="/JobSearch/philosophy/" className=''>Philosophy </Link></li>
                  <li><Link to="/JobSearch/political-science/" className=''>Political Science </Link></li>
                  <li><Link to="/JobSearch/psychology/" className=''>Psychology </Link></li>
                  <li><Link to="/JobSearch/public-administration-policy/" className=''>Public Administration and Policy </Link></li>
                  <li><Link to="/JobSearch/religious-studies-theology/" className=''>Religious Studies and Theology </Link></li>
                  <li><Link to="/JobSearch/security-studies/" className=''>Security Studies </Link></li>
                  <li><Link to="/JobSearch/sign-language/" className=''>Sign Language </Link></li>
                  <li><Link to="/JobSearch/social-work/" className=''>Social Work </Link></li>
                  <li><Link to="/JobSearch/sociology/" className=''>Sociology </Link></li>
                  <li><Link to="/JobSearch/urban-studies-planning/" className=''>Urban Studies and Planning </Link></li>
                  <li><Link to="/JobSearch/women-s-gender-studies/" className=''>Women's and Gender Studies </Link></li>
                  <li><Link to="/JobSearch/liberal-arts-other-specialities/" className=''>Other Liberal Arts Specialities</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="h-[100px]">
                <li className='mb-1 mt-4'><Link to="/JobSearch/industry/" className='text-[#f4a10c] font-bold'></Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/industry/" className=''></Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Medicine </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/chiropractic/" className=''>Chiropractic </Link></li>
                  <li><Link to="/JobSearch/dentistry/" className=''>Dentistry </Link></li>
                  <li><Link to="/JobSearch/medical-research/" className=''>Medical Research </Link></li>
                  <li><Link to="/JobSearch/pharmacy-pharmacology/" className=''>Pharmacy and Pharmacology </Link></li>
                  <li><Link to="/JobSearch/physician-assistant/" className=''>Physician Assistants </Link></li>
                  <li><Link to="/JobSearch/physicians/" className=''>Physicians </Link></li>
                  <li><Link to="/JobSearch/medicine-other-specialities/" className=''>Other Medicine Specialities</Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Science </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/astronomy-astrophysics/" className=''>Astronomy and Astrophysics </Link></li>
                  <li><Link to="/JobSearch/biochemistry-molecular-biology/" className=''>Biochemistry and Molecular Biology </Link></li>
                  <li><Link to="/JobSearch/biology/" className=''>Biology </Link></li>
                  <li><Link to="/JobSearch/chemistry/" className=''>Chemistry </Link></li>
                  <li><Link to="/JobSearch/computer-science/" className=''>Computer Science </Link></li>
                  <li><Link to="/JobSearch/geography/" className=''>Geography </Link></li>
                  <li><Link to="/JobSearch/geology-earth-sciences-oceanography/" className=''>Geology, Earth Sciences, and Oceanography </Link></li>
                  <li><Link to="/JobSearch/library-information-science/" className=''>Library and Information Science </Link></li>
                  <li><Link to="/JobSearch/mathematics/" className=''>Mathematics </Link></li>
                  <li><Link to="/JobSearch/physics/" className=''>Physics </Link></li>
                  <li><Link to="/JobSearch/statistics/" className=''>Statistics </Link></li>
                  <li><Link to="/JobSearch/science-other-speciality/" className=''>Other Science Specialities </Link></li>
                </ul>
              </ul>
              <ul className="myUL">
                <li className='mb-1 mt-4'><Link to="/JobSearch/" className='text-[#f4a10c] font-bold'>Technical and Career </Link></li>
                <ul className="innerUL">
                  <li><Link to="/JobSearch/automotive-technology/" className=''>Automotive Technology </Link></li>
                  <li><Link to="/JobSearch/aviation/" className=''>Aviation </Link></li>
                  <li><Link to="/JobSearch/construction-building-trades/" className=''>Construction and Building Trades </Link></li>
                  <li><Link to="/JobSearch/cosmetology/" className=''>Cosmetology </Link></li>
                  <li><Link to="/JobSearch/culinary-arts/" className=''>Culinary Arts </Link></li>
                  <li><Link to="/JobSearch/dental-hygienists-assistants/" className=''>Dental Hygienists and Assistants </Link></li>
                  <li><Link to="/JobSearch/diagnostic-imaging-radiography/" className=''>Diagnostic Imaging and Radiography </Link></li>
                  <li><Link to="/JobSearch/electronics/" className=''>Electronics </Link></li>
                  <li><Link to="/JobSearch/fire-science/" className=''>Fire Science </Link></li>
                  <li><Link to="/JobSearch/massage-therapy/" className=''>Massage Therapy </Link></li>
                  <li><Link to="/JobSearch/medical-assistants/" className=''>Medical Assistants </Link></li>
                  <li><Link to="/JobSearch/medical-billing-coding/" className=''>Medical Billing and Coding </Link></li>
                  <li><Link to="/JobSearch/paramedics-emts/" className=''>Paramedics and EMTs </Link></li>
                  <li><Link to="/JobSearch/respiratory-care/" className=''>Respiratory Care </Link></li>
                  <li><Link to="/JobSearch/surgical-technology/" className=''>Surgical Technology </Link></li>
                  <li><Link to="/JobSearch/telecommunications/" className=''>Telecommunications </Link></li>
                  <li><Link to="/JobSearch/tourism/" className=''>Tourism </Link></li>
                  <li><Link to="/JobSearch/" className=''>Other Technical and Career Faculty </Link></li>
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