import React from 'react';
import { FaTrophy, FaAward, FaMedal } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Smart India Hackathon 2025",
            subtitle: "Winner",
            role: "Tech Lead",
            description: "Led a team to build a Multimodal RAG system with offline LLM inference using Ollama, supporting PDF, DOCX, PPT, and audio inputs.",
            highlights: [
                "Implemented semantic search using embeddings",
                "Real-time streaming responses via FastAPI + Next.js",
                "Offline LLM inference with Ollama",
                "Multi-format document support (PDF, DOCX, PPT, audio)"
            ],
            icon: <FaTrophy className="text-5xl text-yellow-400" />,
            date: "2025",
            color: "from-yellow-600 to-orange-600"
        },
        {
            id: 2,
            title: "Smart India Hackathon 2024",
            subtitle: "Grand Finalist",
            role: "Tech Lead",
            description: "Led a team of 6 in building Market Scout, a MERN-based price comparison engine that reduced search time by 40% using Playwright scraping and Redis caching.",
            highlights: [
                "Reduced search time by 40% with intelligent caching",
                "Playwright scraping for real-time price data",
                "Redis caching for optimized performance",
                "Achieved 98% functionality coverage in MVP within deadline"
            ],
            icon: <FaMedal className="text-5xl text-blue-400" />,
            date: "2024",
            color: "from-blue-600 to-cyan-600"
        }
    ];

    return (
        <div name="Achievements" id="Achievements" className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-20 min-h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Achievements
                    </p>
                    <p className='py-6 text-base md:text-lg'>Recognition and accomplishments that drive my passion for technology</p>
                </div>

                <div className='grid gap-8 md:gap-12'>
                    {achievements.map(({ id, title, subtitle, role, description, highlights, icon, date, color }) => (
                        <div key={id} className='bg-gray-900 rounded-lg p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600'>
                            <div className='flex flex-col md:flex-row gap-6'>
                                {/* Icon Section */}
                                <div className={`flex items-center justify-center bg-gradient-to-br ${color} rounded-lg p-4 md:p-6 h-fit`}>
                                    {icon}
                                </div>

                                {/* Content Section */}
                                <div className='flex-1'>
                                    <div className='mb-4'>
                                        <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
                                            <div>
                                                <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'>
                                                    {title}
                                                </h3>
                                                <h4 className='text-xl md:text-2xl text-gray-300 mt-1'>{subtitle}</h4>
                                            </div>
                                            <span className='text-gray-400 text-sm md:text-base mt-2 md:mt-0 font-semibold'>{date}</span>
                                        </div>
                                        <p className='text-blue-400 text-base md:text-lg font-medium mt-2'>{role}</p>
                                    </div>

                                    <p className='text-gray-300 text-sm md:text-base leading-relaxed mb-4'>
                                        {description}
                                    </p>

                                    <div className='mt-4'>
                                        <h5 className='text-base md:text-lg font-semibold mb-3 text-gray-200'>Key Highlights:</h5>
                                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                            {highlights.map((highlight, index) => (
                                                <li key={index} className='flex items-start text-sm md:text-base text-gray-300'>
                                                    <span className='text-green-400 mr-2'>✓</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
                    <div className='bg-gradient-to-br from-cyan-900 to-blue-900 rounded-lg p-4 text-center'>
                        <p className='text-3xl md:text-4xl font-bold text-cyan-400'>2</p>
                        <p className='text-gray-300 text-sm md:text-base mt-2'>SIH Achievements</p>
                    </div>
                    <div className='bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg p-4 text-center'>
                        <p className='text-3xl md:text-4xl font-bold text-purple-400'>1</p>
                        <p className='text-gray-300 text-sm md:text-base mt-2'>National Win</p>
                    </div>
                    <div className='bg-gradient-to-br from-green-900 to-teal-900 rounded-lg p-4 text-center'>
                        <p className='text-3xl md:text-4xl font-bold text-green-400'>6</p>
                        <p className='text-gray-300 text-sm md:text-base mt-2'>Team Members Led</p>
                    </div>
                    <div className='bg-gradient-to-br from-orange-900 to-red-900 rounded-lg p-4 text-center'>
                        <p className='text-3xl md:text-4xl font-bold text-orange-400'>98%</p>
                        <p className='text-gray-300 text-sm md:text-base mt-2'>MVP Completion</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
