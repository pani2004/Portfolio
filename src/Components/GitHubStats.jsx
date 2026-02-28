import React from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const GitHubStats = () => {
    const githubUsername = "pani2004"; // Replace with actual username

    return (
        <div name="GitHub" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        GitHub Stats
                    </p>
                    <p className='py-6 text-base md:text-lg'>My coding journey visualized</p>
                </div>

                {/* GitHub Profile Link */}
                <div className='mb-8 text-center'>
                    <a 
                        href={`https://github.com/${githubUsername}`}
                        target="_blank"
                        rel="noreferrer"
                        className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300'
                    >
                        <FaGithub size={24} />
                        <span className='font-semibold'>Visit My GitHub Profile</span>
                    </a>
                </div>

                {/* GitHub Stats Cards */}
                <div className='grid gap-6 md:gap-8'>
                    {/* Contribution Streak */}
                    <div className='bg-gray-900 rounded-lg p-6 shadow-xl border border-gray-700'>
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
                    </div>

                    {/* Activity Graph */}
                    <div className='bg-gray-900 rounded-lg p-6 shadow-xl border border-gray-700'>
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
                    </div>

                    {/* Quick Stats */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        <div className='bg-gradient-to-br from-cyan-900 to-blue-900 rounded-lg p-4 text-center border border-cyan-700'>
                            <FaStar className='text-3xl text-yellow-400 mx-auto mb-2' />
                            <p className='text-2xl font-bold text-cyan-400'>50+</p>
                            <p className='text-gray-300 text-sm'>Stars Earned</p>
                        </div>
                        <div className='bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg p-4 text-center border border-purple-700'>
                            <FaCodeBranch className='text-3xl text-purple-400 mx-auto mb-2' />
                            <p className='text-2xl font-bold text-purple-400'>30+</p>
                            <p className='text-gray-300 text-sm'>Repositories</p>
                        </div>
                        <div className='bg-gradient-to-br from-green-900 to-teal-900 rounded-lg p-4 text-center border border-green-700'>
                            <FaGithub className='text-3xl text-green-400 mx-auto mb-2' />
                            <p className='text-2xl font-bold text-green-400'>500+</p>
                            <p className='text-gray-300 text-sm'>Contributions</p>
                        </div>
                        <div className='bg-gradient-to-br from-orange-900 to-red-900 rounded-lg p-4 text-center border border-orange-700'>
                            <FaStar className='text-3xl text-orange-400 mx-auto mb-2' />
                            <p className='text-2xl font-bold text-orange-400'>10+</p>
                            <p className='text-gray-300 text-sm'>Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubStats;
