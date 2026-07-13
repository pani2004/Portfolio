import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const Internships = () => {
    const internships = [
        {
            id: 1,
            company: "Dfy-Graviti",
            role: "SDE Intern",
            duration: "Jan 2026 – Jun 2026",
            description: [
                "Developing scalable backend systems for geospatial and real-time tracking using FastAPI, Django, Laravel, PostgreSQL, TimescaleDB, Docker, and Linux.",
                "Managed and optimized TimescaleDB pipelines ingesting and processing 50M+ AIS records for real-time maritime tracking, reducing ingestion latency and improving query performance.",
                "Orchestrated migration of 15+ backend APIs from Django and Laravel to FastAPI, improving API response times by ~40% and lowering server resource usage.",
                "Designed and optimized REST APIs and backend workflows processing 1M+ database records, improving scalability, reducing query latency, and ensuring reliable high-volume data handling."
            ],
            techStack: ["FastAPI", "Django", "Laravel", "PostgreSQL", "TimescaleDB", "Docker", "Linux", "Vue.js"],
            type: "Delhi, India (On-site)",
            current: false,
        },
        {
            id: 2,
            company: "NTRO (National Technical Research Organisation)",
            role: "SDE Intern",
            duration: "May 14 – Aug 20, 2025",
            description: [
                "Developed high-security backend systems under strict NDA guidelines",
                "Built full-stack applications using React and modern backend technologies",
                "Implemented secure data handling with PostgreSQL database systems",
                "Containerized applications using Docker for consistent deployments"
            ],
            techStack: ["React", "FastAPI", "Laravel", "PostgreSQL", "Docker"],
            type: "Delhi, India (On-site)",
            current: false,
        }
    ];

    return (
        <div name="Internships" id="Internships" className="relative bg-gradient-to-b from-gray-900 to-black w-full text-white py-24 min-h-screen overflow-hidden">
            <div className='absolute top-40 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl'></div>
            <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <SectionHeading index="03" title="Internships" subtitle="Professional experience gained through impactful internships." />

                <div className='relative pl-8 md:pl-10'>
                    <div className='absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-blue-600/60 to-transparent'></div>

                    <div className='grid gap-10'>
                        {internships.map(({ id, company, role, duration, description, techStack, type, current }, i) => (
                            <Reveal key={id} delay={i * 0.1} className='relative'>
                                <span className={`absolute -left-8 md:-left-10 top-2 w-4 h-4 rounded-full border-2 ${current ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]' : 'bg-gray-800 border-gray-500'}`}></span>

                                <div className='bg-white/[0.04] rounded-xl p-5 md:p-8 border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300'>
                                    <div className='mb-4 md:mb-6'>
                                        <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
                                            <h3 className='text-xl md:text-2xl font-bold text-blue-400 flex items-center gap-2'>
                                                {company}
                                                {current && <span className='text-[10px] font-semibold uppercase tracking-wide bg-cyan-500/15 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30'>Current</span>}
                                            </h3>
                                            <span className='text-gray-500 text-xs md:text-sm mt-1 md:mt-0'>{type}</span>
                                        </div>
                                        <h4 className='text-lg md:text-xl text-gray-300 mb-2'>{role}</h4>
                                        <p className='text-gray-500 text-sm md:text-base font-mono'>{duration}</p>
                                    </div>

                                    <div className='mb-4 md:mb-6'>
                                        <h5 className='text-sm font-semibold mb-3 text-gray-500 uppercase tracking-wide'>Key Responsibilities & Achievements</h5>
                                        <ul className='space-y-2'>
                                            {description.map((item, index) => (
                                                <li key={index} className='text-sm md:text-base text-gray-300 leading-relaxed flex gap-2'>
                                                    <span className='text-cyan-400 mt-1'>▸</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='flex flex-wrap gap-2'>
                                        {techStack.map((tech, index) => (
                                            <span key={index} className='bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-500/20 transition-colors duration-200'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Internships;
