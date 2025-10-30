import React, { useState } from 'react'
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
import Email from "../assets/Email.png"

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const portfolios = [
        {
            id: 'market-scout',
            title: "Market Scout",
            src: Market,
            codeLink: 'https://github.com/pani2004/Market-Explorer',
            demoLink: '#',
            description: "A modern, interactive financial market calendar application built with React and Redux, featuring real-time Binance trading data visualization and comprehensive export capabilities..",
            tech: ["React", "Redux", "TailwindCss", "Binance Api"],
            highlights: [ "Real-time price tracking", ]
        },
        {
            id: 'onebox-email',
            title: "OneBox Email Aggregator",
            src: Email,
            codeLink: 'https://github.com/pani2004/OneBox',
            demoLink: '#',
            description: "AI-powered email aggregator with real-time IMAP synchronization. Features intelligent email classification using Google Gemini AI, RAG-based reply suggestions with ChromaDB, and Elasticsearch integration.",
            tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Elasticsearch", "ChromaDB", "Gemini AI"],
            highlights: ["Real-time IMAP IDLE", "AI Classification", "Vector-based RAG system", "Slack integration"]
        },
        {
            id: 'ai-voice',
            title: "AI Voice Communication",
            src: Ai,
            codeLink: 'https://github.com/pani2004/AI-Voice-Calling',
            demoLink: '#',
            description: "Real-time AI voice communication platform using OpenAI APIs. Built during internship at Remodel AI with WebSocket connections for low-latency voice streaming and Twilio integration.",
            tech: ["OpenAI API", "WebSockets", "Twilio", "Node.js", "Express"],
            highlights: ["Real-time voice streaming", "Low-latency architecture", "Twilio integration"]
        },
        {
            id: 'patient-mgmt',
            title: "Patient Management System",
            src: Patient,
            codeLink: 'https://github.com/pani2004/Patient-Management-System',
            demoLink: '#',
            description: "Microservice architecture system built with Spring Boot. Features modular services for patient records, billing, and analytics using gRPC for inter-service communication and Kafka for event streaming.",
            tech: ["Spring Boot", "gRPC", "Kafka", "Docker", "PostgreSQL"],
            highlights: ["Microservice architecture", "Event-driven design", "gRPC communication", "Dockerized deployment"]
        },
        {
            id: 'mern-estate',
            title: "MERN Estate Platform",
            src: home,
            codeLink: 'https://github.com/pani2004/Mern-Estate',
            demoLink: 'https://mern-estate-932i.onrender.com',
            description: "Full-stack real estate platform with property listings, user authentication, and advanced search filters. Features image upload, property management, and responsive design.",
            tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
            highlights: ["Full CRUD operations", "Image upload", "JWT authentication", "Advanced search filters"]
        },
        {
            id: 'video-streaming',
            title: "Video Streaming Platform",
            src: video,
            codeLink: 'https://github.com/pani2004/BackendProject',
            demoLink: '#',
            description: "A comprehensive video streaming backend with user authentication, video upload, likes, comments, and subscriptions. Features robust API design and efficient video processing.",
            tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
            highlights: ["Video processing", "User subscriptions", "Comment system", "Secure authentication"]
        },
        {
            id: 'price-scraper',
            title: "Price Automation Scraper",
            src: WebScraping,
            codeLink: 'https://github.com/pani2004/Price-Automation',
            demoLink: '#',
            description: "Automated web scraping tool for price monitoring across multiple e-commerce platforms. Features scheduled scraping, price alerts, and data visualization.",
            tech: ["Python", "Selenium", "BeautifulSoup", "Pandas", "MongoDB"],
            highlights: ["Multi-site scraping", "Automated scheduling", "Price tracking", "Data analytics"]
        },
        {
            id: 'skypacs',
            title: "SKYPACS - Medical PACS",
            src: Pacs,
            codeLink:'https://github.com/SkyPacs/Pacs',
            demoLink: 'https://skypacs.in/',
            description: "PACS system for DICOM medical image management deployed on home server. Features secure image storage, viewer integration, and automated deployment with Docker and GitHub Actions.",
            tech: ["Docker", "Nginx", "PostgreSQL", "GitHub Actions", "AWS EC2", "DICOM"],
            highlights: ["Medical image processing", "Self-hosted deployment", "CI/CD pipeline", "DICOM standard"]
        },
        {
            id: 'study-sync',
            title: "Study Sync Platform",
            src: img,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/Study%20Sync',
            demoLink: 'https://study-sync-3f2s4tiyh-debashis-projects-5a7f94cf.vercel.app',
            description: "Educational platform for study resource management with course listings, user dashboard, and interactive learning features. Clean UI with modern design principles.",
            tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            highlights: ["Responsive design", "Interactive UI", "Course management", "User dashboard"]
        },
        {
            id: 'amazon-clone',
            title: "Amazon Clone",
            src: amazon,
            codeLink: 'https://github.com/pani2004/WebDev-Projects/tree/main/AmzoneClone',
            demoLink: 'https://web-dev-projects-oj5y-opp2v7bt5-debashis-projects-5a7f94cf.vercel.app',
            description: "E-commerce UI clone replicating Amazon's interface with product listings, cart functionality, and responsive design. Focus on frontend development and UI/UX principles.",
            tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            highlights: ["Pixel-perfect UI", "Shopping cart", "Product grid layout", "Mobile responsive"]
        }
        
    ]

    return (
        <div name="Portfolio" id="Portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen py-20">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(31, 41, 55, 0.5);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(6, 182, 212, 0.5);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(6, 182, 212, 0.7);
                }
            `}</style>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6 text-base md:text-lg'>Check out some of my work right here</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0'>
                    {portfolios.map((portfolio) => {
                        const isExpanded = selectedProject === portfolio.id;
                        return (
                        <div 
                            key={portfolio.id} 
                            className={`bg-gray-900 shadow-lg shadow-gray-600 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col ${isExpanded ? 'h-[600px]' : 'h-[450px]'}`}
                        >
                            <div className='relative group flex-shrink-0'>
                                <img 
                                    src={portfolio.src} 
                                    alt={portfolio.title} 
                                    className='w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105' 
                                />
                                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center'>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            setSelectedProject(isExpanded ? null : portfolio.id);
                                        }}
                                        className='opacity-0 group-hover:opacity-100 bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition-opacity duration-300'
                                    >
                                        {isExpanded ? 'Show Less' : 'View Details'}
                                    </button>
                                </div>
                            </div>
                            
                            <div className='p-4 flex-grow flex flex-col overflow-y-auto custom-scrollbar'>
                                <h3 className='text-lg md:text-xl font-bold text-cyan-400 mb-2'>{portfolio.title}</h3>
                                
                                {!isExpanded && (
                                    <p className='text-sm text-gray-400 mb-3 line-clamp-2'>{portfolio.description}</p>
                                )}
                                
                                {isExpanded && (
                                <div className='animate-fadeIn'>
                                    <p className='text-sm text-gray-300 mb-3 leading-relaxed'>{portfolio.description}</p>
                                    
                                    <div className='mb-3'>
                                        <h4 className='text-xs font-semibold text-gray-400 mb-2'>Technologies:</h4>
                                        <div className='flex flex-wrap gap-1'>
                                            {portfolio.tech.map((t, index) => (
                                                <span key={`${portfolio.id}-tech-${index}`} className='bg-gray-800 text-cyan-300 px-2 py-1 rounded text-xs'>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className='mb-3'>
                                        <h4 className='text-xs font-semibold text-gray-400 mb-2'>Key Highlights:</h4>
                                        <ul className='list-disc list-inside text-xs text-gray-300 space-y-1'>
                                            {portfolio.highlights.map((highlight, index) => (
                                                <li key={`${portfolio.id}-highlight-${index}`}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                )}

                                <div className='flex gap-2 mt-auto pt-3 flex-shrink-0'>
                                    <a 
                                        href={portfolio.demoLink} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className={`flex-1 px-4 py-2 duration-200 hover:scale-105 text-center rounded-md text-sm font-medium ${portfolio.demoLink === '#' ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'}`}
                                        onClick={(e) => portfolio.demoLink === '#' && e.preventDefault()}
                                    >
                                        Demo
                                    </a>
                                    <a 
                                        href={portfolio.codeLink} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className='flex-1 px-4 py-2 duration-200 hover:scale-105 text-center bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm font-medium border border-gray-600'
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Portfolio