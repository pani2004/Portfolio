import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { RiArrowRightSLine } from "react-icons/ri"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const roles = [
  'Software Developer',
  'Backend Engineer',
  'SIH 2025 National Winner',
  'System Design Enthusiast',
]

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div name="Home" id="Home" className='relative min-h-screen w-full overflow-hidden pt-20 md:pt-0'>
      {/* Ambient glow blobs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-cyan-600/25 rounded-full blur-3xl animate-blob'></div>
        <div className='absolute bottom-0 right-0 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-blue-700/25 rounded-full blur-3xl animate-blob-slow'></div>
        <div className='absolute top-0 right-1/4 w-56 h-56 bg-purple-600/15 rounded-full blur-3xl animate-blob'></div>
      </div>

      <div className='relative max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 py-8 md:min-h-screen'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className='flex flex-col justify-center h-full mb-4 md:mb-0 text-center md:text-left w-full'
        >
          {/* <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className='inline-flex items-center gap-2 self-center md:self-start px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-5 w-fit'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-400'></span>
            </span>
            Open to SDE Opportunities
          </motion.span> */}

          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight'>
            Hi, I'm Debashis Pani
          </h1>

          <div className='h-10 sm:h-12 md:h-14 mt-2 flex items-center justify-center md:justify-start'>
            <motion.h2
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className='text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x'
            >
              {roles[roleIndex]}
            </motion.h2>
          </div>

          <p className='text-gray-400 py-4 max-w-md text-sm sm:text-base md:text-lg mx-auto md:mx-0'>
            Building scalable backend systems and full-stack applications using
            React, Node.js, FastAPI, Django, PostgreSQL, and Docker.
          </p>

          <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
            <Link to="Portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm md:text-base shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/40 duration-300'>
              View Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href="/Resume.pdf"
              download="Debashis_Pani_Resume.pdf"
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer text-sm md:text-base hover:scale-105 duration-300'
            >
              Download Resume
            </a>
          </div>

          <div className='flex gap-4 mt-2 justify-center md:justify-start'>
            <a href="https://github.com/pani2004" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-cyan-400 transition-colors duration-200'>
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/debashis-pani-b28b702b3" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-cyan-400 transition-colors duration-200'>
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500'
      >
        <span className='text-xs uppercase tracking-widest'>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className='w-5 h-8 rounded-full border border-gray-500 flex items-start justify-center p-1'
        >
          <span className='w-1 h-1.5 rounded-full bg-gray-400'></span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
