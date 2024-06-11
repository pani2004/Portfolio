import React from 'react'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/reactImage.png'
import cpp from '../assets/cpp.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import Github from '../assets/Github.png'

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: express,
            title: 'ExpressJs',
            style: 'shadow-gray-500'
        },
        {
            id: 6,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: node,
            title: 'NodeJs',
            style: 'shadow-green-400'
        },
        {
            id: 8,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-800'
        },
        {
            id: 9,
            src: Github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        }
    ]

    return (
        <div name="Experience" id="Experience" className='bg-gradient-to-b from-gray-800 to-black w-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the Technologies I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
