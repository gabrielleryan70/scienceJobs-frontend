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
                <a href="#" className="text-[#f4a10c] hover:underline font-bold">Global</a>
                <a href="https://academicjobs.com/recruitment" className="text-[#f4a10c] hover:underline font-bold">Recruiters</a>
            </div>
        </div>
    )
}
export default Header
