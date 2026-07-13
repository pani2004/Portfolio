import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'About' },
    { id: 3, link: 'Achievements' },
    { id: 4, link: 'Internships' },
    { id: 5, link: 'Portfolio' },
    { id: 6, link: 'Experience' },
    { id: 7, link: 'Contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center w-full h-20 text-white px-4 max-w-screen-xl mx-auto'>
        <Link to="Home" smooth duration={500} className='cursor-pointer'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-signature ml-2 bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent'>
            Debashis
          </h1>
        </Link>

        <ul className='hidden md:flex items-center gap-1'>
          {links.map(({ id, link }) => (
            <li key={id} className='relative'>
              <Link
                to={link}
                smooth
                duration={500}
                spy
                onSetActive={() => setActive(link)}
                className={`relative px-4 py-2 cursor-pointer font-medium text-sm lg:text-base transition-colors duration-200 rounded-full ${
                  active === link ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className='absolute inset-0 bg-white/10 rounded-full -z-10'
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-2 z-10 text-white md:hidden'>
          {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg text-gray-300'
          >
            {links.map(({ id, link }, i) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className='px-4 cursor-pointer capitalize py-5 text-3xl sm:text-4xl'
              >
                <Link to={link} smooth duration={500} onClick={() => setNav(false)}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
