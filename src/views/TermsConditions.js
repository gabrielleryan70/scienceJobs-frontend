import React from 'react';

const TermsConditions = () => {
    return (
        <div className="bg-gray-900">
            <div className="relative">
                <picture>
                    <source
                        srcSet="https://academicjobs.s3.amazonaws.com/img/banner/Academic-Jobs-priority-addon-mobile.png"
                        media="(max-width: 480px)"
                    />
                    <img
                        src="https://academicjobs.s3.amazonaws.com/img/banner/TermsAndConditions.jpg"
                        alt=""
                        className="w-full h-auto"
                    />
                </picture>
                <div
                    className="bg-cover bg-center bg-repeat"
                    style={{
                        backgroundImage: 'url("https://academicjobs.s3.amazonaws.com/img/_misc/Sign-in-upBackground.png")',
                    }}
                >
                    <div className="max-w-screen-xl mx-auto py-12 px-6 text-white">
                        <h4 className="text-orange-500 text-2xl font-semibold">Introduction</h4>
                        <p>
                            Please read these Terms & Conditions carefully before using AcademicJobs.
                            AcademicJobs reserves the right to modify these Terms & Conditions at any time.
                        </p>

                        <h4 className="mt-6 text-2xl font-semibold">Services Provided</h4>
                        <p>
                            AcademicJobs provides a service to bring Job Seekers and Employers together. Job Seekers
                            and Employers can register, create profiles/job posts and search for jobs and resumes.
                        </p>

                        <h4 className="mt-6 text-2xl font-semibold">Privacy Policy</h4>
                        <p>
                            Job Seeker personal data will be available to Employers visiting AcademicJobs. Personal
                            data includes a Name which is mandatory, an email Address which is mandatory and a Telephone Number
                            which is optional.
                        </p>
                        <p>
                            Personal data provided by the user may be used by AcademicJobs to notify the user of
                            any news, and or promotional offers relating only to the AcademicJobs website. The user can
                            unsubscribe from these notifications at any time.
                        </p>
                        <p>AcademicJobs will not disclose user personal data to any third party.</p>

                        <h4 className="mt-6 text-2xl font-semibold">Website Use</h4>
                        <p>AcademicJobs may not be used for any of the following purposes:</p>
                        <ol className="list-decimal list-inside ml-4">
                            <li>To contact AcademicJobs users regarding any issue apart from the purpose of recruitment.</li>
                            <li>To contact AcademicJobs users to offer any services from a 3rd party company.</li>
                            <li>To post any illegal content.</li>
                        </ol>
                        <p>The user is required to provide truthful information in their profile or job post.</p>
                        <p>It is prohibited to use any text or images from AcademicJobs for personal or commercial use.</p>

                        <h4 className="mt-6 text-2xl font-semibold">User Information</h4>
                        <p>AcademicJobs does not hold responsibility for any untruthful and/or inaccurate information included in job posts and profiles.</p>
                        <p>AcademicJobs reserves the right to edit or delete any information submitted by the user to the website.</p>

                        <h4 className="mt-6 text-2xl font-semibold">Liability</h4>
                        <p>AcademicJobs will not be responsible for any loss or damage the user may encounter from using the website.</p>

                        <h4 className="mt-6 text-2xl font-semibold">Cookies Policy</h4>
                        <p>Our website uses cookies.</p>
                        <p>
                            A cookie is a file containing an identifier (a string of letters and numbers) that is
                            sent by a web server to a web browser and is stored by the browser. The identifier is then sent back
                            to the server each time the browser requests a page from the server.
                        </p>
                        <p>We use Google Analytics to analyze the use of our website.</p>
                        <p>Our analytics service provider generates statistical and other information about website use by means of cookies.</p>
                        <p>
                            You can delete cookies already stored on your computer. Please visit the 'Help' option in
                            your browser menu to learn how to do this. Deleting cookies will have a negative impact on the
                            usability of this website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;