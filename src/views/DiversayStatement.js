import React from 'react';

const DiversayStatement = () => {
    return (
        <div className="bg-gray-900">
            <div className="relative">
                <picture>
                    <source
                        srcSet="https://academicjobs.s3.amazonaws.com/img/banner/Academic-Jobs-priority-addon-mobile.png"
                        media="(max-width: 480px)"
                    />

                </picture>
                <div
                    className="bg-cover bg-center bg-repeat"
                    style={{
                        backgroundImage: 'url("https://academicjobs.s3.amazonaws.com/img/_misc/Sign-in-upBackground.png")',
                    }}
                >
                    <div className="max-w-screen-xl mx-auto py-12 px-6 text-white">
                        <h4 className="text-orange-500 text-2xl font-semibold">Diversity Statement</h4>
                        <p>
                            AcademicJobs’ purpose is to match the right people to the right jobs. We put job seekers and employers at the heart of everything we do. We are committed to creating an environment where everyone can bring their authentic selves to work and allow others to do the same.

                            A diverse mix of minds, backgrounds, and experiences, and an inclusive work environment leads to excellence.  AcademicJobs provides equal opportunities to all employees and applicants for employment, without regard to race, religion, color, age, sex, national origin, sexual orientation, gender identity, genetic disposition, neurodiversity, disability, veteran status, or any other protected category under federal, state and local law.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiversayStatement;