import React from 'react'
import { Link } from 'react-scroll'
import hero from '../assets/hero.png'
import { RiArrowRightSLine } from "react-icons/ri"

const Home = () => {
  return (
    <div name="Home" id="Home" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 md:pt-0'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-8 md:py-0 md:flex-row md:min-h-screen'>
            <div className='flex flex-col justify-center h-full mb-8 md:mb-0'>
                <h2 className='text-3xl sm:text-5xl md:text-7xl font-bold text-white'>
                    I'm a Software Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md text-sm sm:text-base md:text-lg'>
                    Building scalable backend systems and full-stack applications using
                    React, Node.js, FastAPI, Django, PostgreSQL, and Docker
                </p>
                <div className='flex gap-4 flex-wrap'>
                    <Link to="Portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm md:text-base hover:scale-110 duration-300'>
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <RiArrowRightSLine size={25} className="ml-1" />
                        </span>
                    </Link>
                    <a 
                        href="/resume.pdf" 
                        download="Debashis_Pani_Resume.pdf"
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm md:text-base hover:scale-110 duration-300'
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <div className='w-full md:w-auto flex justify-center'>
                <img src={hero} alt="my profile" className='rounded-2xl w-2/3 sm:w-1/2 md:w-full max-w-sm'/>
            </div>
        </div>
    </div>
  )
}

export default Home
