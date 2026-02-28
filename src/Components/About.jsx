import React from 'react';

const About = () => {
  return (
    <div name="About" id="About" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20 md:py-0">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base md:text-xl mt-4">
          I'm Debashis Pani, a backend-focused software developer passionate about building scalable and meaningful systems. Currently pursuing B.Tech in Information Technology at KIIT (graduating 2026), with hands-on experience through high-impact internships and national-level hackathons.
        </p>
        <br />
        <p className="text-base md:text-xl">
          Currently working at Dfy-Graviti as an SDE Intern, scaling geospatial systems with focus on performance and reliability using Django, Laravel, PostgreSQL, and Docker on Linux infrastructure. Previously at NTRO, I developed high-security full-stack applications using React, FastAPI, Laravel, and PostgreSQL under strict NDA guidelines.
        </p>
        <br />
        <p className="text-base md:text-xl">
          As Tech Lead and National Winner at Smart India Hackathon 2025, I architected a fully offline multimodal RAG-based AI system with vector search and optimized retrieval pipelines. Built a microservices Patient Management System using Spring Boot, gRPC, Kafka, and PostgreSQL, and developed SKYPACS—a self-hosted DICOM medical imaging system with CI/CD automation.
        </p>
        <br />
        <p className="text-base md:text-xl">
          Core expertise: Node.js, Express, React, Vue.js, Spring Boot, Django, Laravel, PostgreSQL, MongoDB, Redis, Kafka. DevOps stack: Docker, GitHub Actions, Nginx, AWS EC2. Passionate about system design, distributed systems, and building production-grade applications.
        </p>
      </div>
    </div>
  );
};

export default About;
