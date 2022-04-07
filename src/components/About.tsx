import React, { useState, FunctionComponent } from "react";
import Sphere from "./Sphere";

const About: FunctionComponent = () => {
  const technologies = useState([
    "React",
    "TypeScript",
    "JavaScript",
    "NodeJS",
    "GraphQL",
    "TailwindCss",
  ])[0];
  return (
    <div className='flex flex-col h-full w-full items-center justify-between p-10 py-32 lg:p-40 lg:pt-0 pb-0'>
      <div className='flex flex-col justify-center items-center mb-8 lg:mb-20'>
        <span className='text-3xl lg:text-5xl font-medium text-center'>
          About Me
        </span>
        <div className='line w-1 rounded-full p-1 border-2 border-theme-myRed'></div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-x-10 px-4 lg:px-0'>
        <div className='flex flex-col justify-left items-left lg:w-4/6 w-11/12 pt-8 space-y-4'>
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
