import React, { useState } from "react";
import Sphere from "./Sphere";

const About = () => {
  const technologies = useState([
    "React",
    "TypeScript",
    "JavaScript",
    "NodeJS",
    "GraphQL",
    "TailwindCss",
  ])[0];
  return (
    <div className='flex flex-col h-full w-full items-center justify-between p-40 pb-0'>
      <div className='flex flex-col justify-center items-center mb-20'>
        <span className='text-5xl font-medium text-center'>About Me</span>
        <div className='line w-1 rounded-full p-1 border-2 border-theme-myRed'></div>
      </div>
      <div className='flex flex-row justify-between items-start space-y-4 space-x-10'>
        <div className='flex flex-col justify-left items-left w-4/6 px-4 pt-8 space-y-4'>
          <span className='text-xl font-medium text-left text-gray-400 '>
            Hello! My name is Muiz and I enjoy creating things that live on the
            internet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis voluptatibus illum deserunt odio, porro reiciendis
            libero labore dolorum deleniti animi.
          </span>
          <span className="text-xl font-medium text-left text-gray-300 '">
            Here are a few technologies I’ve been working with recently:
          </span>
          <div className='grid grid-cols-2 gap-4'>
            {technologies.map((tech, index) => (
              <span
                className='text-lg font-medium text-left text-white tech-list'
                key={index}
              >
                <span className='w-2 text-lg text-theme-myRed'>▹</span> {tech}
              </span>
            ))}
          </div>
        </div>
        <Sphere />
      </div>
    </div>
  );
};

export default About;
