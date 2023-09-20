import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { countryMappings, countryMappings1 } from "../utils/data";

import DispatchLink from './DispatchLink'
const Header = () => {
    const region = useSelector((state) => state.posts.region)
    console.log(region)
    return (
        <div className=" w-full  flex justify-between items-center py-3">
            <div className=" flex justify-between items-center gap-10">
                <a href="/" className="">
                    <img
                        className='w-20'
                        src="https://academicjobs.s3.amazonaws.com/icon/ACjobsIcon-min.png" alt="" />
                </a>
                <Link to="/jobSearch" className="text-gray-900 hover:underline">Job Search</Link>
                <Link to="/findEmployers" className="text-gray-900 hover:underline">Find Employers</Link>
                <div className="dropdown dropdown-hover">
                    <a className="text-[#f4a10c] hover:underline font-bold" href="https://academicjobs.com">
                        <img
                            src={`https://academicjobs.s3.amazonaws.com/icon/countryFlag/${region}.svg`}
                            alt={region}
                            style={{ height: '20px' }}
                            onError={(e) => {
                                e.target.style.display = 'none'; // 隐藏图片
                                e.target.insertAdjacentHTML('afterend', `<p>${region}</p>`); // 插入文本
                            }}
                        />                    </a>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

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
                {/* <a href="/career-advice/" className="text-gray-900 hover:underline">Career Advice</a> */}
            </div>
            <div className=' flex justify-between gap-10'>
           
             
                <a href="/recruitment" className="text-[#f4a10c] hover:underline font-bold">Recruiters</a>
            </div>
        </div>
    )
}
export default Header
