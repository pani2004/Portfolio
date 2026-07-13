import React from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal, { RevealStagger, RevealItem } from './Reveal';
import CountUp from './CountUp';

const GitHubStats = () => {
    const githubUsername = "pani2004"; 

    const quickStats = [
        { icon: <FaStar className='text-3xl text-yellow-400 mx-auto mb-2' />, value: '50+', label: 'Stars Earned', color: 'text-cyan-400', bg: 'from-cyan-900/60 to-blue-900/60 border-cyan-700/40' },
        { icon: <FaCodeBranch className='text-3xl text-purple-400 mx-auto mb-2' />, value: '30+', label: 'Repositories', color: 'text-purple-400', bg: 'from-purple-900/60 to-pink-900/60 border-purple-700/40' },
        { icon: <FaGithub className='text-3xl text-green-400 mx-auto mb-2' />, value: '500+', label: 'Contributions', color: 'text-green-400', bg: 'from-green-900/60 to-teal-900/60 border-green-700/40' },
        { icon: <FaStar className='text-3xl text-orange-400 mx-auto mb-2' />, value: '10+', label: 'Projects', color: 'text-orange-400', bg: 'from-orange-900/60 to-red-900/60 border-orange-700/40' },
    ];

    return (
        <div name="GitHub" className="relative bg-gradient-to-b from-black to-gray-900 w-full text-white py-24 overflow-hidden">
            <div className='absolute top-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl'></div>
            <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <SectionHeading index="06" title="GitHub Stats" subtitle="My coding journey visualized." />

                {/* GitHub Profile Link */}
                <Reveal className='mb-10 text-center'>
                    <a 
                        href={`https://github.com/${githubUsername}`}
                        target="_blank"
                        rel="noreferrer"
                        className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 shadow-lg shadow-cyan-500/20 transition-transform duration-300'
                    >
                        <FaGithub size={24} />
                        <span className='font-semibold'>Visit My GitHub Profile</span>
                    </a>
                </Reveal>

                {/* GitHub Stats Cards */}
                <div className='grid gap-6 md:gap-8'>
                    {/* Quick Stats */}
                    <RevealStagger className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {quickStats.map((stat, i) => (
                            <RevealItem key={i}>
                                <div className={`bg-gradient-to-br ${stat.bg} rounded-xl p-4 text-center border hover:-translate-y-1 transition-transform duration-300`}>
                                    {stat.icon}
                                    <CountUp value={stat.value} className={`text-2xl font-bold ${stat.color}`} />
                                    <p className='text-gray-300 text-sm'>{stat.label}</p>
                                </div>
                            </RevealItem>
                        ))}
                    </RevealStagger>

                    {/* Contribution Streak */}
                    <Reveal delay={0.1} className='bg-white/[0.04] rounded-xl p-6 shadow-xl border border-white/10'>
                        <h3 className='text-2xl font-bold mb-4 text-cyan-400'>Contribution Streak</h3>
                        <img 
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true&background=1f2937&ring=06b6d4&fire=06b6d4&currStreakLabel=06b6d4`}
                            alt="GitHub Streak"
                            className='w-full rounded-lg'
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML += '<p class="text-gray-400 text-center py-4">Streak stats temporarily unavailable</p>';
                            }}
                        />
                    </Reveal>

                    {/* Activity Graph */}
                    <Reveal delay={0.15} className='bg-white/[0.04] rounded-xl p-6 shadow-xl border border-white/10'>
                        <h3 className='text-2xl font-bold mb-4 text-cyan-400'>Contribution Activity</h3>
                        <img 
                            src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&bg_color=1f2937&color=06b6d4&line=06b6d4&point=ffffff`}
                            alt="Contribution Graph"
                            className='w-full rounded-lg'
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML += '<p class="text-gray-400 text-center py-4">Activity graph temporarily unavailable</p>';
                            }}
                        />
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default GitHubStats;
