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
          I'm Debashis Pani, a backend-focused full-stack developer passionate about building scalable and meaningful software systems. I'm currently pursuing a B.Tech in Information Technology at KIIT, graduating in 2026, and have gained hands-on experience through impactful internships and national-level hackathons.
        </p>
        <br />
        <p className="text-base md:text-xl">
          During my internship at Remodel AI, I worked on a real-time AI voice communication platform using OpenAI APIs, WebSockets, and Twilio, gaining practical experience in building reliable, low-latency backend systems. At NTRO, I was involved in full-stack development using React, FastAPI, Laravel, PostgreSQL, and Docker for a high-security backend project under a strict NDA.
        </p>
        <br />
        <p className="text-base md:text-xl">
          As the Tech Lead and Grand Finalist at Smart India Hackathon 2024, I led a team to build Market Scout, a scalable price comparison platform leveraging Redis caching and Playwright scraping. I've also built a Patient Management System in microservice architecture using Spring Boot, gRPC, Kafka, Docker, and PostgreSQL, implementing modular services for patient records, billing, and analytics.
        </p>
        <br />
        <p className="text-base md:text-xl">
          Additionally, I developed SKYPACS, a PACS system for DICOM medical images deployed on my home server using Docker, Nginx, GitHub Actions, and AWS EC2. Other MERN stack projects include a real estate platform, Market Scout (price comparison engine), and a commenting system. My core skills include Node.js, Express.js, React, Spring Boot, PostgreSQL, MongoDB, Redis, with deployment experience using Docker, GitHub Actions, Nginx, and AWS EC2.
        </p>
      </div>
    </div>
  );
};

export default About;
