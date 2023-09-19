import React from 'react';
import { Link } from 'react-router-dom';
const AboutAJ = () => {
    return (
        <div className="text-left mt-9 mb-0">
            <p className="block text-4xl font-bold font-roboto text-[#f4a10c] mb-4">About Us</p>

            <p className="block text-3xl font-bold font-open-sans bg-white mb-8 ">
                ALL THE BEST UNIVERSITY JOBS
            </p>

            <p className="block text-xl  font-open-sans bg-white text-gray-700 mb-4 font-bold">
                Find the best academic positions in your city, country and worldwide.
            </p>

            <p className="block text-xl   font-open-sans bg-white text-gray-700 mb-4 font-bold">
                Also listing administrative, staff and support roles in higher ed. Search for academic jobs, college careers and faculty positions online with AcademicJobs.com.
            </p>

            <p className=" block text-xl   font-roboto text-black mb-4 text-justify">
                Welcome to AcademicJobs, the leading online platform for finding and applying for university and higher education jobs and positions. Whether you are looking for a faculty, research, administrative, or professional role, we have the right opportunity for you.
            </p>

            <p className=" block text-xl   font-roboto text-black mb-4 text-justify">
                Academic Jobs was founded by a team of higher ed professionals who were frustrated with the lack of transparency and efficiency in the academic job market. Put simply, they thought that the old job boards out there for academic positions did not work for clients, and they continued to operate on very old, outdated technology. They therefore have created the best academic job platform in the world today... making it easier for candidates to search for jobs, compare offers, and communicate with employers. They have also provided employers with a cost-effective and user-friendly way to advertise their vacancies, reach a global talent pool, and manage their applications.
            </p>

            <p className=" block text-xl   font-roboto text-black mb-4 text-justify">
                AcademicJobs has grown to become the most trusted and popular website for academic job seekers and employers worldwide. With over 5000 universities and their jobs, and over 1 million registered users from all over the world, 10,000 active job listings, and 500 partner institutions across 50 countries. AcademicJobs.com lists all disciplines and academic specialties in all levels of academia, from humanities and social sciences to STEM and health sciences, from PhD students and postdocs to professors, lecturers, researchers and deans.
            </p>

            <p className=" block text-xl   font-roboto text-black mb-4 text-justify">
                Our mission is to help you find your dream academic job or hire the best academic talent. We are committed to providing you with the most comprehensive and up-to-date information, the most advanced and user-friendly tools, and the most professional and personalized service. We are also passionate about supporting the academic community and promoting diversity, equity, and inclusion in higher education.
            </p>

          
           

            <p className="block text-xl   font-roboto  mb-4">
                We hope you enjoy using AcademicJobs and find it useful for your academic career or recruitment needs. If you have any questions, feedback, or suggestions, please feel free to contact us <Link to="/contactUs" className="underline text-blue-500 font-bold ">HERE</Link>. We would love to hear from you!
            </p>
            
        </div>

    );
}
export default AboutAJ;