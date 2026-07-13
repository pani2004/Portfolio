import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal, { RevealStagger, RevealItem } from './Reveal';
import CountUp from './CountUp';

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

    const stats = [
        { value: '2', label: 'SIH Achievements', color: 'text-cyan-400', bg: 'from-cyan-900/60 to-blue-900/60' },
        { value: '1', label: 'National Win', color: 'text-purple-400', bg: 'from-purple-900/60 to-pink-900/60' },
        { value: '6', label: 'Team Members Led', color: 'text-green-400', bg: 'from-green-900/60 to-teal-900/60' },
        { value: '98%', label: 'MVP Completion', color: 'text-orange-400', bg: 'from-orange-900/60 to-red-900/60' },
    ];

    return (
        <div name="Achievements" id="Achievements" className="relative bg-gradient-to-b from-black to-gray-900 w-full text-white py-24 min-h-screen overflow-hidden">
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl'></div>
            <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <SectionHeading index="02" title="Achievements" subtitle="Recognition and accomplishments that drive my passion for technology." />

                <RevealStagger className='grid gap-6 md:gap-8'>
                    {achievements.map(({ id, title, subtitle, role, description, highlights, icon, date, color }) => (
                        <RevealItem key={id}>
                            <div className='group relative bg-white/[0.04] rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden'>
                                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}></div>
                                <div className='relative flex flex-col md:flex-row gap-6'>
                                    <div className={`flex items-center justify-center bg-gradient-to-br ${color} rounded-lg p-4 md:p-6 h-fit shadow-lg`}>
                                        {icon}
                                    </div>

                                    <div className='flex-1'>
                                        <div className='mb-4'>
                                            <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
                                                <div>
                                                    <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'>
                                                        {title}
                                                    </h3>
                                                    <h4 className='text-xl md:text-2xl text-gray-300 mt-1'>{subtitle}</h4>
                                                </div>
                                                <span className='text-gray-500 text-sm md:text-base mt-2 md:mt-0 font-mono'>{date}</span>
                                            </div>
                                            <p className='text-blue-400 text-base md:text-lg font-medium mt-2'>{role}</p>
                                        </div>

                                        <p className='text-gray-400 text-sm md:text-base leading-relaxed mb-4'>
                                            {description}
                                        </p>

                                        <div className='mt-4'>
                                            <h5 className='text-sm font-semibold mb-3 text-gray-500 uppercase tracking-wide'>Key Highlights</h5>
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
                        </RevealItem>
                    ))}
                </RevealStagger>

                <RevealStagger className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
                    {stats.map((stat, i) => (
                        <RevealItem key={i}>
                            <div className={`bg-gradient-to-br ${stat.bg} border border-white/10 rounded-xl p-5 text-center hover:-translate-y-1 transition-transform duration-300`}>
                                <CountUp value={stat.value} className={`text-3xl md:text-4xl font-bold ${stat.color}`} />
                                <p className='text-gray-400 text-sm md:text-base mt-2'>{stat.label}</p>
                            </div>
                        </RevealItem>
                    ))}
                </RevealStagger>
            </div>
        </div>
    );
};

export default Achievements;
