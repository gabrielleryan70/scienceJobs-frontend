import React, { useState, useEffect, useRef } from 'react'


const Header = () => {
    return (
    <div className="w-full bg-blue-500 p-4 flex justify-start items-center">
    
        <div className="text-white font-bold text-xl w-[300px]">Logo</div>

   
            <nav className="space-x-4 flex justify-around items-center">
            <a href="#" className="text-white hover:underline">Job Search</a>
            <a href="#" className="text-white hover:underline">Find Employers</a>
            <a href="#" className="text-white hover:underline">Career Advice</a>
            <a href="#" className="text-white hover:underline">Recruiters</a>
            <a href="#" className="text-white hover:underline">Sign In</a>
            <a href="#" className="text-white hover:underline">My Account</a>
        </nav>
        </div>
    )
  
}
export default Header
