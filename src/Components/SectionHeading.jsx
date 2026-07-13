import React from 'react'
import Reveal from './Reveal'

const SectionHeading = ({ index, title, subtitle, align = 'left' }) => {
  const isCenter = align === 'center'
  return (
    <Reveal className={`pb-10 md:pb-14 ${isCenter ? 'text-center flex flex-col items-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        {index && (
          <span className='font-mono text-sm md:text-base text-cyan-400/80 tracking-widest'>
            {index}
          </span>
        )}
        <span className='h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent'></span>
      </div>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white relative inline-block'>
        {title}
        <span className='absolute -bottom-2 left-0 h-[3px] w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></span>
      </h2>
      {subtitle && (
        <p className={`text-gray-400 mt-5 text-base md:text-lg max-w-xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading
