import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { countryMappings, countryMappings1 } from "../utils/data";
import DispatchLink from './DispatchLink'
const Header = () => {
    const [dropdown, setDropdown] = useState(false)
    const region = useSelector((state) => state.posts.region)
    const ref = useRef(null)
    const onMouseEnter = (e) => {
        setDropdown(true)
    }
    const onMouseLeave = () => {
        setDropdown(false)
    }
    const closeDropdown = () => {
        dropdown && setDropdown(false)
    }
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
                <div className={` p-2  w-52   } `}
                >
                    <div className="text-[#f4a10c]  font-bold relative"
                        onMouseEnter={onMouseEnter}
                    >
                        {countryMappings1[region].hasPic
                            ? <img
                                src={`https://academicjobs.s3.amazonaws.com/icon/countryFlag/${region}.svg`}
                                alt={region}
                                style={{ height: '20px' }}
                            />
                            : <span className="" style={{ height: '20px' }}> {region} </span>
                        }
                        <ul
                            onMouseLeave={onMouseLeave}
                            className={`${dropdown ? 'block' : 'hidden'} absolute  left-0 text-[0.875rem] z-99  min-w-[10rem] py-1 bg-white rounded-lg shadow-lg shadow-indigo-500/40`} ref={ref}>
                            {Object.keys(countryMappings1).map((key) => (
                                <li className="navbar__item" key={key}>
                                    <DispatchLink
                                        to={`/${key}`}
                                        region={key}
                                        setDropdown={setDropdown} // 传递setDropdown给子组件
                                        className="navbar__link"
                                    >
                                        {countryMappings1[key].menu}
                                    </DispatchLink>
                                </li>
                            ))}
                        </ul>
                    </div>
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
