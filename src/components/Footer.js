import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div class="bg-white text-black font-open-sans grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="bg-white text-black font-open-sans">
                <ul>
                    <li className='text-[#f4a10c]'>Navigation</li>
                    <li><a class="footer-nav__link" href="$site_url/">Home</a></li>
                    <li><a class="footer-nav__link" href="https://academicjobs.com/contact-us/">Contact Us</a></li>
                    <li><a class="footer-nav__link" href="https://academicjobs.com/about-academic-jobs/">About AJ</a></li>
                    <li><a href="https://academicjobs.com/university-partners">Our Partners</a></li>
                    <li><a href="https://academicjobs.com/sitemap">Site Map</a></li>
                    <li><a href="https://academicjobs.com/frequently-asked-questions-for-australian-university-jobs/">FAQ</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-[#f4a10c]'>Recruiters</li>
                    <li><a href="https://academicjobs.com/login/">Sign in</a></li>
                    <li><a class="footer-nav__link" href="https://academicjobs.com/post-a-job/">Post a Job</a></li>
                    <li><a href="$site_url/terms-of-use/">Terms & Conditions</a></li>
                    <Link to="/termsConditions">Terms & Conditions</Link>
                    <li><a href="/diversity-statement/">Diversity Statement</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-[#f4a10c]'>Job Seekers</li>
                    <li><a class="footer-nav__link" href="$site_url/jobs/">Find Jobs</a></li>
                    <li><a href="https://academicjobs.com/find-employer/">Find Employer</a></li>
                    <li><a class="footer-nav__link" href="https://academicjobs.com/join-aj-talent-pool/">AJ Talent Pool</a></li>
                    <li><a class="footer-nav__link" href="https://academicjobs.com/join-the-a-team/">The A-List</a></li>
                    <li><a href="https://academicjobs.com/join-hr-plus/">HR Plus</a></li>
                    <li><a class="footer-nav__link" href="https://academicjobs.com/login/">Sign in</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-[#f4a10c]'>Socials</li>
                    <li><a href="https://academicjobs.com/career-advice">Career Advice</a></li>
                    <li><a class="footer-nav__link" href="https://www.facebook.com/profile.php?id=100088232015128" target="_blank" rel="noopener">Facebook</a></li>
                    <li><a class="footer-nav__link" href="https://www.instagram.com/AcademicJobs22/" target="_blank" rel="noopener">Instagram</a></li>
                    <li><a class="footer-nav__link" href="https://twitter.com/AcademicJobs22" target="_blank" rel="noopener">Twitter</a></li>
                    <li><a class="footer-nav__link" href="https://www.youtube.com/channel/UCIaknpVcM_ZijJSWJCYi8aw" target="_blank" rel="noopener">YouTube</a></li>
                    <li><a href="https://www.linkedin.com/company/academic-jobs/">Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer