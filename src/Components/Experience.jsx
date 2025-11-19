import React from 'react'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/reactImage.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import express from '../assets/express.png'
import Postgres from '../assets/Postgres.jpeg'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import Github from '../assets/Github.png'
import aws from '../assets/aws.png'
import kafka from '../assets/kafka.png'
import Nginx from '../assets/Nginx.png'
import Redis from '../assets/redis.png'
import docker from '../assets/docker.jpeg'
import Spring from '../assets/Spring.jpeg'
import fastapi from '../assets/fastapi.png'
const Experience = () => {
    const techs = [
        // Frontend Technologies
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 3,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 4,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        // Backend Technologies
        {
            id: 5,
            src: node,
            title: 'NodeJs',
            style: 'shadow-green-400'
        },
        {
            id: 6,
            src: express,
            title: 'ExpressJs',
            style: 'shadow-gray-500'
        },
        {
            id: 7,
            src: fastapi,
            title: 'FastAPI',
            style: 'shadow-teal-500'
        },
        {
            id: 8,
            src: Spring,
            title: 'Spring Boot',
            style: 'shadow-green-600'
        },
        // Databases
        {
            id: 9,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: Postgres,
            title: 'PostgreSQL',
            style: 'shadow-blue-400'
        },
        {
            id: 11,
            src: Redis,
            title: 'Redis',
            style: 'shadow-red-500'
        },
        // DevOps & Tools
        {
            id: 12,
            src: docker,
            title: 'Docker',
            style: 'shadow-blue-500'
        },
        {
            id: 13,
            src: kafka,
            title: 'Kafka',
            style: 'shadow-gray-500'
        },
        {
            id: 14,
            src: Nginx,
            title: 'Nginx',
            style: 'shadow-green-500'
        },
        {
            id: 15,
            src: aws,
            title: 'AWS',
            style: 'shadow-yellow-500'
        },
        {
            id: 16,
            src: Github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        // Programming Languages
        {
            id: 17,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-800'
        },
        {
            id: 18,
            src: java,
            title: 'Java',
            style: 'shadow-red-600'
        }
    ]

    return (
        <div name="Experience" id="Experience" className='bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6 mt-2 text-base md:text-lg'>These are the Technologies I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 text-center py-8 px-4 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 md:py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-16 md:w-20 mx-auto' />
                            <p className='mt-2 md:mt-4 text-sm md:text-base'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
