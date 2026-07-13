import React from 'react';
import { FaCode, FaServer, FaTrophy } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal, { RevealStagger, RevealItem } from './Reveal';

const About = () => {
  const cards = [
    {
      icon: <FaServer className='text-2xl text-cyan-400' />,
      title: 'Backend at Scale',
      text: "At Dfy-Graviti, I optimized TimescaleDB pipelines handling 50M+ AIS records and migrated 15+ APIs to FastAPI, cutting response times by ~40%.",
    },
    {
      icon: <FaTrophy className='text-2xl text-yellow-400' />,
      title: 'National Winner',
      text: "Tech Lead at SIH 2025 — led a team of 6 to build an offline multimodal RAG system with vector retrieval, winning against 20 competing teams.",
    },
    {
      icon: <FaCode className='text-2xl text-purple-400' />,
      title: 'AI-Powered Builder',
      text: "Shipped CodeLens AI and OneBox — using LangChain, Gemini, pgvector, and Elasticsearch to build intelligent code and email tooling.",
    },
  ];

  return (
    <div name="About" id="About" className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden">
      <div className='absolute top-20 right-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl'></div>
      <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <SectionHeading index="01" title="About Me" subtitle="A quick look at who I am and what drives me." />

        <Reveal delay={0.1} className='mb-10'>
          <p className="text-base md:text-xl leading-relaxed text-gray-300">
            I'm <span className='text-white font-semibold'>Debashis Pani</span>, a backend-focused software developer with a B.Tech in Information Technology from KIIT (Class of 2026).
            I specialize in designing scalable backend systems — at <span className='text-cyan-300 font-medium'>Dfy-Graviti</span>, I work on real-time maritime tracking infrastructure processing 50M+ AIS records using FastAPI, Django, Celery, Redis, and TimescaleDB.
            Previously at <span className='text-cyan-300 font-medium'>NTRO</span>, I shipped 3 production-grade modules and automated CI/CD pipelines that cut deployment effort by ~50%.
            As Tech Lead, I led my team to a national win at Smart India Hackathon 2025, and beyond internships, I've built AI-driven projects like <span className='text-cyan-300 font-medium'>CodeLens AI</span> and <span className='text-cyan-300 font-medium'>OneBox</span>, and a healthcare microservices platform with Spring Boot, Kafka, and gRPC.
          </p>
        </Reveal>

        <RevealStagger className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {cards.map((card, i) => (
            <RevealItem key={i}>
              <div className='group h-full bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1'>
                <div className='mb-4 w-fit p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300'>
                  {card.icon}
                </div>
                <h3 className='text-lg font-bold text-white mb-2'>{card.title}</h3>
                <p className='text-sm text-gray-400 leading-relaxed'>{card.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </div>
  );
};

export default About;
