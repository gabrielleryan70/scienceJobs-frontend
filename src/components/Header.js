import React, { useState, useEffect, useRef } from 'react'
const Header = () => {
    return (
        <div className="  w-full  flex justify-between items-center ">
            <div className=" flex justify-between  gap-10">
                <a href="#" className="text-gray-900 hover:underline">Job Search</a>
                <a href="#" className="text-gray-900 hover:underline">Find Employers</a>
                <a href="#" className="text-gray-900 hover:underline">Career Advice</a>
                
            </div>
            <div className=' flex justify-between gap-10'>
                <a href="#" className="text-gray-900 hover:underline">Sign In</a>
                <a href="#" className="text-gray-900 hover:underline">My Account</a>
                <a href="#" className="text-[#ff9345] hover:underline font-bold">Recruiters</a>
            </div>
        </div>
    )
}
export default Header
