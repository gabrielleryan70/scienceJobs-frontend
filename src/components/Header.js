import React, { useState, useEffect, useRef } from 'react'
const Header = () => {
    return (
        <div className="  w-full  p-4 flex justify-evenly items-center ">
            <a href="#" className="text-gray-900 hover:underline">Job Search</a>
            <a href="#" className="text-gray-900 hover:underline">Find Employers</a>
            <a href="#" className="text-gray-900 hover:underline">Career Advice</a>
            <a href="#" className="text-gray-900 hover:underline">Recruiters</a>
            <a href="#" className="text-gray-900 hover:underline">Sign In</a>
            <a href="#" className="text-gray-900 hover:underline">My Account</a>
        </div>
    )
}
export default Header
