import React from 'react'

const About = () => {
  return (
    <div name="About" id="About" className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
            Hello! I'm Debashis Pani, a B.Tech student in Information Technology (5th semester), with a passion for open-source contributions and web development. Recently, I participated in the GirlScript Summer of Code (GSSoC'24), where I secured an All India Rank of 78, with 49 merged PRs. I am proficient in the MERN stack, AWS, and have experience working with tools like Kafka and Nginx.
            </p>
            <br />
            <p className="text-xl">
            I'm actively involved in the AWS Cloud Club and CyberPeace Corps societies at my college, contributing to the web teams of both. Currently, I’m working on developing a PACS server to aid radiologists in the healthcare sector, combining my interest in technology and its real-world applications.
            </p>
        </div>
    </div>
  )
}

export default About