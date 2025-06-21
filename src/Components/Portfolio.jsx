import React from 'react'
import currency from "../assets/currency.png"
import password from "../assets/password.png"
import todolist from "../assets/todolist.png"
import Weather from "../assets/Weather.png"
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
            src: currency,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/CurrencyConverter',
            demoLink: 'https://web-dev-projects-m9fvj4r02-debashis-projects-5a7f94cf.vercel.app'
        },
        {
            id: 2,
            src: password,
            codeLink: 'https://github.com/pani2004/PasswordGenerator',
            demoLink: 'https://password-generator-git-master-debashis-projects-5a7f94cf.vercel.app'
        },
        {
            id: 3,
            src: todolist,
            codeLink: 'https://github.com/pani2004/ToDoList',
            demoLink: 'https://to-do-list-g619qf80h-debashis-projects-5a7f94cf.vercel.app',
        },
        {
            id: 4,
            src: Weather,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/Weather%20App',
            demoLink: 'https://web-dev-projects-6qhw-fh97kelwu-debashis-projects-5a7f94cf.vercel.app'
        },
        {
            id: 5,
            src: img,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/Study%20Sync',
            demoLink: 'https://study-sync-3f2s4tiyh-debashis-projects-5a7f94cf.vercel.app'
        },
        {
            id: 6,
            src: amazon,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/AmzoneClone',
            demoLink: 'https://web-dev-projects-oj5y-opp2v7bt5-debashis-projects-5a7f94cf.vercel.app'
        },
        {
            id:7,
            src:home,
            codeLink:'https://github.com/pani2004/Mern-Estate',
            demoLink:'https://mern-estate-932i.onrender.com'
        },
        {
            id:8,
            src:video,
            codeLink:'https://github.com/pani2004/BackendProject',
            demoLink:'#'
        },
        {
            id:9,
            src:WebScraping,
            codeLink:'https://github.com/pani2004/Price-Automation',
            demoLink:'#'
        },
        {
           id:10,
           src:Pacs,
        //    codeLink:'Coming soon to a GitHub repository near you',
           demoLink:'https://skypacs.in/'
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

