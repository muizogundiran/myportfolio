import React from "react";

const Contact = () => {
  return (
    <div className='flex flex-col h-full w-full items-center justify-between p-40 pb-12'>
      <div className='flex flex-col justify-center items-center mb-10'>
        <span className='text-7xl font-medium text-center'>Get In Touch</span>
        <div className='line w-1 rounded-full p-1 border-2 border-theme-myRed'></div>
      </div>
      <div className='flex flex-col justify-between items-center space-y-4 space-x-10'>
        <span className='text-5xl font-extrabold text-left'>
          Dont be a stranger! 👋
        </span>
        <span className='font-medium text-lg text-gray-300 w-3/6'>
          I’m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </span>
        <div className='flex flex-row justify-center items-center space-x-4 mt-20'>
          <span className='font-bold text-2xl p-4 border-2 border-solid rounded-lg border-theme-myRed w-40 flex justify-center items-center hover:bg-theme-myRed hover:bg-opacity-20 text-theme-myRed '>
            Say Hello
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
