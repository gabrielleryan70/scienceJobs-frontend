import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="mt-10 mb-10" >
            <hr className="w-ful h-2 mx-auto my-4 bg-[#f4a10c] border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <div className="bg-white text-black font-open-sans grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white text-black font-open-sans">
                    <ul>
                        <li className='text-[#f4a10c]'>Navigation</li>
                        {/* <li><a className="footer-nav__link" href="/">Home</a></li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/about-academic-jobs">About AJ</Link></li>
                        <li><Link to="/site-map">Site Map</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-[#f4a10c]'>Recruiters</li>
                        <li><a href="https://academicjobs.com/login/">Sign in</a></li>
                        <li><a className="footer-nav__link" href="https://academicjobs.com/post-a-job/">Post a Job</a></li>
                        <li><Link to="/term-of-use">Terms & Conditions</Link></li>
                        <li><Link to="/university-partners">Our Partners</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-[#f4a10c]'>Job Seekers</li>
                        <li><Link to="/find-jobs">Find Jobs</Link></li>
                        <li><Link to="/find-employers">Find Employers</Link></li>
                        <li><Link to="/diversity-statement">Diversity Statement</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-[#f4a10c]'>Socials</li>
                        {/* <li><a href="https://academicjobs.com/career-advice">Career Advice</a></li> */}
                        <li><a className="footer-nav__link" href="https://www.facebook.com/profile.php?id=100088232015128" target="_blank" rel="noopener">Facebook</a></li>
                        <li><a className="footer-nav__link" href="https://www.instagram.com/AcademicJobs22/" target="_blank" rel="noopener">Instagram</a></li>
                        <li><a className="footer-nav__link" href="https://www.youtube.com/channel/UCIaknpVcM_ZijJSWJCYi8aw" target="_blank" rel="noopener">YouTube</a></li>
                        <li><a href="https://www.linkedin.com/company/academic-jobs/">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
