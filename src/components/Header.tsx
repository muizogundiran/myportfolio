import React, { FunctionComponent } from "react";
// import SocialIcons from "./SocialIcons";
const Header: FunctionComponent = () => {
  return (
    <div className='flex flex-col h-full items-left p-10 py-32 lg:p-40 pb-0'>
      <span className='text-xl text-theme-myRed font-bold my-2 '>
        Hi, my name is
      </span>
      <span className='my-2 text-4xl lg:text-7xl font-semibold'>
        Muiz Ogundiran
      </span>
      <span className='my-2 text-4xl lg:text-7xl font-semibold text-gray-500 '>
        I build things for web and app
      </span>
      <span className='my-2  text-lg lg:text-2xl font-medium text-gray-500 w-11/12 lg:w-8/12 '>
        I&apos;m a <b>software engineer</b> in Lagos , <b>Nigeria</b>. I like
        working on the <b>back-end</b> of the web. This is my site, where I
        share whatever side projects I&apos;ve been working on .
      </span>
      <span className='font-bold text-xl lg:text-2xl p-4 border-2 border-solid rounded-lg border-theme-myRed w-40 flex justify-center items-center mt-8 lg:mt-12 hover:bg-theme-myRed hover:bg-opacity-20 text-theme-myRed '>
        Hire Me
      </span>
    </div>
  );
};

export default Header;
