import React from 'react'
import Market from "../assets/Market.jpeg"
import Commet from "../assets/Commet.jpeg"
import Ai from "../assets/Ai.jpeg"
import Patient from "../assets/Patient.jpeg"
import img from "../assets/img.png"
import amazon from "../assets/amazon.png"
import video from "../assets/video.jpeg"
import home from "../assets/home.jpeg"
import Pacs from "../assets/Pacs.png"
import WebScraping from "../assets/WebScraping.png"
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Market,
            codeLink: 'https://github.com/pani2004/Market-Explorer',
            demoLink: '#'
        },
        {
            id: 2,
            src: Commet,
            codeLink: 'https://github.com/pani2004/Comment_App',
            demoLink: '#'
        },
        {
            id: 3,
            src: Ai,
            codeLink: 'https://github.com/pani2004/AI-Voice-Calling',
            demoLink: '#'
        },
        {
            id: 4,
            src: Patient,
            codeLink: 'https://github.com/pani2004/Patient-Management-System',
            demoLink: '#'
        },
        {
            id: 5,
            src: home,
            codeLink: 'https://github.com/pani2004/Mern-Estate',
            demoLink: 'https://mern-estate-932i.onrender.com'
        },
        {
            id: 6,
            src: video,
            codeLink: 'https://github.com/pani2004/BackendProject',
            demoLink: '#'
        },
        {
            id: 7,
            src: WebScraping,
            codeLink: 'https://github.com/pani2004/Price-Automation',
            demoLink: '#'
        },
        {
            id: 8,
            src: Pacs,
            codeLink:'https://github.com/SkyPacs/Pacs',
            demoLink: 'https://skypacs.in/'
        },
        {
            id: 9,
            src: img,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/Study%20Sync',
            demoLink: 'https://study-sync-3f2s4tiyh-debashis-projects-5a7f94cf.vercel.app'
        },
        {
            id: 10,
            src: amazon,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/AmzoneClone',
            demoLink: 'https://web-dev-projects-oj5y-opp2v7bt5-debashis-projects-5a7f94cf.vercel.app'
        }
        
    ]

    return (
        <div name="Portfolio" id="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, codeLink, demoLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full h-48 object-cover' />
                            <div className='flex justify-center items-center'>
                                <a href={demoLink} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>
                                    <button>Demo</button>
                                </a>
                                <a href={codeLink} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio

