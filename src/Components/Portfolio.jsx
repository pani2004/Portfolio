import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import Market from "../assets/Market.jpeg"
import Ai from "../assets/Ai.jpeg"
import Patient from "../assets/Patient.jpeg"
import video from "../assets/video.jpeg"
import home from "../assets/home.jpeg"
import Pacs from "../assets/Pacs.png"
import WebScraping from "../assets/WebScraping.png"
import Email from "../assets/Email.png"
import Codelens from "../assets/Codelens.jpg"
import SectionHeading from './SectionHeading'
import { RevealStagger, RevealItem } from './Reveal'

const categoryStyles = {
    'Gen AI': 'bg-black/70 backdrop-blur-sm text-purple-300 border-purple-500/40',
    'Full Stack': 'bg-black/70 backdrop-blur-sm text-cyan-300 border-cyan-500/40',
    'Backend': 'bg-black/70 backdrop-blur-sm text-blue-300 border-blue-500/40',
    'Frontend': 'bg-black/70 backdrop-blur-sm text-pink-300 border-pink-500/40',
    'DevOps': 'bg-black/70 backdrop-blur-sm text-orange-300 border-orange-500/40',
}

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const portfolios = [
        {
            id: 'codelens-ai',
            title: "CodeLens AI",
            src: Codelens,
            codeLink: 'https://github.com/pani2004/CodeLens',
            demoLink: '#',
            description: "AI-powered codebase analysis and understanding tool. Chat with repositories using Google Gemini, semantic search with pgvector, and interactive graph visualization.",
            tech: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "React", "ReactFlow", "GitHub OAuth", "Google Gemini"],
            highlights: ["AI-powered code analysis (Gemini)", "Vector semantic search with pgvector", "Interactive dependency graphs with ReactFlow", "GitHub OAuth and persistent chats"],
            category: "Gen AI",
        },
        {
            id: 'onebox-email',
            title: "OneBox Email Aggregator",
            src: Email,
            codeLink: 'https://github.com/pani2004/OneBox',
            demoLink: '#',
            description: "AI-powered email aggregator with real-time IMAP synchronization. Features intelligent email classification using Google Gemini AI, RAG-based reply suggestions with ChromaDB, and Elasticsearch integration.",
            tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Elasticsearch", "ChromaDB", "Gemini AI"],
            highlights: ["Real-time IMAP IDLE", "AI Classification", "Vector-based RAG system", "Slack integration"],
            category: "Gen AI",
        },
        {
            id: 'ai-voice',
            title: "AI Voice Communication",
            src: Ai,
            codeLink: 'https://github.com/pani2004/AI-Voice-Calling',
            demoLink: '#',
            description: "Real-time AI voice communication platform using OpenAI APIs. Built during internship at Remodel AI with WebSocket connections for low-latency voice streaming and Twilio integration.",
            tech: ["OpenAI API", "WebSockets", "Twilio", "Node.js", "Express"],
            highlights: ["Real-time voice streaming", "Low-latency architecture", "Twilio integration"],
            category: "Gen AI"
        },
        {
            id: 'market-scout',
            title: "Market Scout",
            src: Market,
            codeLink: 'https://github.com/pani2004/Market-Explorer',
            demoLink: '#',
            description: "Market Scout is a price comparison engine built during SIH 2024. It reduces search time using Playwright scraping and Redis caching, with a MERN-based full-stack architecture.",
            tech: ["MongoDB", "Express", "React", "Node.js", "Playwright", "Redis"],
            highlights: ["40% faster search with Redis caching", "Playwright-based scrapers", "MERN full-stack architecture"],
            category: "Full Stack"
        },
        {
            id: 'mern-estate',
            title: "MERN Estate Platform",
            src: home,
            codeLink: 'https://github.com/pani2004/Mern-Estate',
            demoLink: 'https://mern-estate-932i.onrender.com',
            description: "Full-stack real estate platform with property listings, user authentication, and advanced search filters. Features image upload, property management, and responsive design.",
            tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
            highlights: ["Full CRUD operations", "Image upload", "JWT authentication", "Advanced search filters"],
            category: "Full Stack"
        },
        {
            id: 'patient-mgmt',
            title: "Patient Management System",
            src: Patient,
            codeLink: 'https://github.com/pani2004/Patient-Management-System',
            demoLink: '#',
            description: "Microservice architecture system built with Spring Boot. Features modular services for patient records, billing, and analytics using gRPC for inter-service communication and Kafka for event streaming.",
            tech: ["Spring Boot", "gRPC", "Kafka", "Docker", "PostgreSQL"],
            highlights: ["Microservice architecture", "Event-driven design", "gRPC communication", "Dockerized deployment"],
            category: "Backend"
        },
        {
            id: 'video-streaming',
            title: "Video Streaming Platform",
            src: video,
            codeLink: 'https://github.com/pani2004/BackendProject',
            demoLink: '#',
            description: "A comprehensive video streaming backend with user authentication, video upload, likes, comments, and subscriptions. Features robust API design and efficient video processing.",
            tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
            highlights: ["Video processing", "User subscriptions", "Comment system", "Secure authentication"],
            category: "Backend"
        },
        {
            id: 'price-scraper',
            title: "Price Automation Scraper",
            src: WebScraping,
            codeLink: 'https://github.com/pani2004/Price-Automation',
            demoLink: '#',
            description: "Automated web scraping tool for price monitoring across multiple e-commerce platforms. Features scheduled scraping, price alerts, and data visualization.",
            tech: ["Python", "Selenium", "BeautifulSoup", "Pandas", "MongoDB"],
            highlights: ["Multi-site scraping", "Automated scheduling", "Price tracking", "Data analytics"],
            category: "Backend"
        },
        {
            id: 'skypacs',
            title: "SKYPACS - Medical PACS",
            src: Pacs,
            codeLink:'https://github.com/SkyPacs/Pacs',
            demoLink: 'https://skypacs.in/',
            description: "PACS system for DICOM medical image management deployed on home server. Features secure image storage, viewer integration, and automated deployment with Docker and GitHub Actions.",
            tech: ["Docker", "Nginx", "PostgreSQL", "GitHub Actions", "AWS EC2", "DICOM"],
            highlights: ["Medical image processing", "Self-hosted deployment", "CI/CD pipeline", "DICOM standard"],
            category: "DevOps",
        }
    ]

    const categories = ['All', 'Full Stack', 'Backend', 'Frontend', 'Gen AI', 'DevOps'];
    const filteredProjects = activeFilter === 'All' 
        ? portfolios 
        : portfolios.filter(project => project.category === activeFilter);

    const activeProject = portfolios.find(p => p.id === selectedProject);

    return (
        <div name="Portfolio" id="Portfolio" className="relative bg-gradient-to-b from-black to-gray-900 w-full text-white min-h-screen py-24 overflow-hidden">
            <div className='absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl'></div>
            <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <SectionHeading index="04" title="Portfolio" subtitle="A selection of projects spanning AI, backend systems, and full-stack apps." />

                {/* Filter Buttons */}
                <div className='flex flex-wrap gap-3 mb-10 justify-center'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 scale-105'
                                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:scale-105'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <RevealStagger className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]' staggerDelay={0.06}>
                    {filteredProjects.map((portfolio) => (
                        <RevealItem key={portfolio.id}>
                            <button
                                onClick={() => setSelectedProject(portfolio.id)}
                                className='group relative w-full h-full rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 text-left'
                            >
                                <img
                                    src={portfolio.src}
                                    alt={portfolio.title}
                                    className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 group-hover:from-black/95 transition-all duration-300'></div>

                                <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryStyles[portfolio.category] || 'bg-white/10 text-white border-white/20'}`}>
                                    {portfolio.category}
                                </span>

                                <div className='absolute bottom-0 left-0 w-full p-5'>
                                    <h3 className='text-lg md:text-xl font-bold text-white mb-1'>{portfolio.title}</h3>
                                    <p className='text-sm text-gray-300 line-clamp-2 opacity-90'>{portfolio.description}</p>
                                    <span className='inline-flex items-center gap-1 text-cyan-300 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300'>
                                        View details →
                                    </span>
                                </div>
                            </button>
                        </RevealItem>
                    ))}
                </RevealStagger>
            </div>

            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className='fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4'
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className='relative bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto custom-scrollbar'
                        >
                            <style>{`
                                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(31,41,55,0.5); border-radius: 10px; }
                                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(6,182,212,0.5); border-radius: 10px; }
                            `}</style>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className='absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors duration-200'
                            >
                                <FaTimes />
                            </button>

                            <img src={activeProject.src} alt={activeProject.title} className='w-full h-56 md:h-64 object-cover' />

                            <div className='p-6 md:p-8'>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryStyles[activeProject.category] || 'bg-white/10 text-white border-white/20'}`}>
                                    {activeProject.category}
                                </span>
                                <h3 className='text-2xl md:text-3xl font-bold text-white mt-3 mb-3'>{activeProject.title}</h3>
                                <p className='text-gray-300 leading-relaxed mb-5'>{activeProject.description}</p>

                                <h4 className='text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2'>Technologies</h4>
                                <div className='flex flex-wrap gap-2 mb-5'>
                                    {activeProject.tech.map((t, index) => (
                                        <span key={index} className='bg-white/5 border border-white/10 text-cyan-300 px-2.5 py-1 rounded-full text-xs'>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h4 className='text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2'>Key Highlights</h4>
                                <ul className='space-y-1.5 mb-6'>
                                    {activeProject.highlights.map((highlight, index) => (
                                        <li key={index} className='flex items-start text-sm text-gray-300'>
                                            <span className='text-green-400 mr-2'>✓</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className='flex gap-3'>
                                    <a
                                        href={activeProject.demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => activeProject.demoLink === '#' && e.preventDefault()}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 duration-200 hover:scale-105 text-center rounded-lg text-sm font-medium ${activeProject.demoLink === '#' ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'}`}
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    <a
                                        href={activeProject.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className='flex-1 flex items-center justify-center gap-2 px-4 py-3 duration-200 hover:scale-105 text-center bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium border border-white/10'
                                    >
                                        <FaGithub /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Portfolio
