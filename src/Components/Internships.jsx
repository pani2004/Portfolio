import React from 'react';

const Internships = () => {
    const internships = [
        {
            id: 1,
            company: "NTRO (National Technical Research Organisation)",
            role: "Full Stack Developer Intern",
            duration: "May 14 – Aug 20, 2025",
            description: [
                "Developed high-security backend systems under strict NDA guidelines",
                "Built full-stack applications using React and modern backend technologies",
                "Implemented secure data handling with PostgreSQL database systems",
                "Containerized applications using Docker for consistent deployments"
            ],
            techStack: ["React", "FastAPI", "Laravel", "PostgreSQL", "Docker"],
            type: "Delhi, India (On-site)"
        },
        {
            id: 2,
            company: "Remodel AI",
            role: "Backend Developer Intern",
            duration: "Feb 2025 – Apr 2025",
            description: [
                "Developed a real-time AI voice communication platform using OpenAI APIs",
                "Implemented WebSocket connections for low-latency voice streaming",
                "Integrated Twilio APIs for reliable voice communication infrastructure",
                "Built scalable backend systems handling concurrent voice sessions"
            ],
            techStack: ["OpenAI APIs", "WebSockets", "Twilio", "Node.js", "Express.js"],
            type: "Remote"
        }
    ];

    return (
        <div name="Internships" id="Internships" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Internships
                    </p>
                    <p className='py-6'>Professional experience gained through impactful internships</p>
                </div>

                <div className='grid gap-8 md:gap-12'>
                    {internships.map(({ id, company, role, duration, description, techStack, type }) => (
                        <div key={id} className='bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700'>
                            <div className='mb-6'>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
                                    <h3 className='text-2xl font-bold text-blue-400'>{company}</h3>
                                    <span className='text-gray-400 text-sm mt-1 md:mt-0'>{type}</span>
                                </div>
                                <h4 className='text-xl text-gray-300 mb-2'>{role}</h4>
                                <p className='text-gray-500'>{duration}</p>
                            </div>

                            <div className='mb-6'>
                                <h5 className='text-lg font-semibold mb-3 text-gray-200'>Key Responsibilities & Achievements:</h5>
                                <ul className='list-disc list-inside space-y-2'>
                                    {description.map((item, index) => (
                                        <li key={index} className='text-gray-300 leading-relaxed'>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h5 className='text-lg font-semibold mb-3 text-gray-200'>Technologies Used:</h5>
                                <div className='flex flex-wrap gap-2'>
                                    {techStack.map((tech, index) => (
                                        <span key={index} className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors duration-200'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Internships;