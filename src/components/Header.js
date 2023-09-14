import React, { useState, useEffect, useRef } from 'react'
const Header = () => {
    return (
        <div className="  w-full  flex justify-between items-center ">
            <div className=" flex justify-between items-center gap-10">
                <img
                    className='w-20'
                    src="https://academicjobs.s3.amazonaws.com/icon/ACjobsIcon-min.png" alt="" />
                <a href="https://academicjobs.com/jobs/" className="text-gray-900 hover:underline">Job Search</a>
                <a href="https://academicjobs.com/find-employers/" className="text-gray-900 hover:underline">Find Employers</a>
                <a href="https://academicjobs.com/career-advice/" className="text-gray-900 hover:underline">Career Advice</a>
            </div>
            <div className=' flex justify-between gap-10'>
                {/* <a href="#" className="text-[#f4a10c] hover:underline font-bold">Global</a> */}
                {/* <div class="group inline-block relative">
                    <a href="#" class="text-[#f4a10c] hover:underline font-bold">Global</a>
                    <ul class="hidden absolute mt-2 bg-white border border-gray-300 p-2 space-y-2 group-hover:block">
                        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">选项 1</a></li>
                        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">选项 2</a></li>
                        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">选项 3</a></li>
                    </ul>
                </div> */}
                <div class="group inline-block relative">
                    <a class="text-[#f4a10c] hover:underline font-bold" href="https://academicjobs.com"><object style={{ height: '20px' }} data="https://academicjobs.s3.amazonaws.com/icon/countryFlag/global.svg" type="image/svg+xml"><p>Global</p></object></a>
                    <ul class="hidden absolute mt-2 bg-white border border-gray-300 p-2 space-y-2 group-hover:bloc">
                        <li class="navbar__item ">
                            <a id="a-global" class="navbar__link" href="https://academicjobs.com"><span>Global</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/africa"><span>Africa</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/asia"><span>Asia</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/australia"><span>Australia</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/canada"><span>Canada</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/europe"><span>Europe</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/india"><span>India</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/middleeast"><span>Middle East</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/newzealand"><span>New Zealand</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/southamerica"><span>South America</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/uk"><span>United Kingdom</span></a>
                        </li>
                        <li class="navbar__item ">
                            <a class="navbar__link" href="https://academicjobs.com/usa"><span>USA</span></a>
                        </li>
                    </ul>
                </div>
                <a href="https://academicjobs.com/recruitment" className="text-[#f4a10c] hover:underline font-bold">Recruiters</a>
            </div>
        </div>
    )
}
export default Header
