import React from "react";

const Contact = () => {
  return (
    <div className='flex flex-col h-full w-full items-center justify-between p-40 pb-12'>
      <div className='flex flex-col justify-center items-center mb-2'>
        <span className='text-7xl font-medium text-center'>Get In Touch</span>
        <div className='line w-1 rounded-full p-1 border-2 border-theme-myRed'></div>
      </div>
      <div className='flex flex-col justify-between items-center space-y-4 space-x-10'>
        {/* <span className='text-5xl font-extrabold text-left'>
          Dont be a stranger! 👋
        </span> */}
        <span className='font-medium text-sm text-gray-300 w-3/6'>
          I’m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </span>
      </div>
      <div className='grid grid-cols-2 gap-20 w-8/12 justify-between mt-8'>
        <div className='text-left items-left flex flex-col'>
          <span className='text-sm font-extralight'>Your Name</span>
          <input
            type='text'
            className='text-xl outline-none w-full h-12 border-b-2 border-b-theme-myYellow bg-transparent placeholder:text-theme-myYellow placeholder:text-opacity-50'
            placeholder='Enter your name'
            name=''
            id=''
          />
        </div>
        <div className='text-left items-left flex flex-col'>
          <span className='text-sm font-extralight'>Email Address</span>
          <input
            type='text'
            className='text-xl outline-none w-full h-12 border-b-2 border-b-theme-myYellow bg-transparent placeholder:text-theme-myYellow placeholder:text-opacity-50'
            placeholder='Enter your email address'
            name=''
            id=''
          />
        </div>
        <div className='col-span-2 text-left items-left flex flex-col'>
          <span className='text-sm font-extralight mb-2'>Your Message</span>
          <textarea
            className='text-xl outline-none w-full h-16 border-b-2 border-b-theme-myYellow bg-transparent placeholder:text-theme-myYellow placeholder:text-opacity-50'
            placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'
            name=''
            id=''
          />
        </div>
      </div>
      <div className='flex flex-row justify-center items-center space-x-4 mt-20'>
        <span className='flex-row font-bold text-2xl p-4 border-2 border-solid rounded-lg border-theme-myRed w-60 flex justify-center items-center hover:bg-theme-myRed hover:bg-opacity-20 text-theme-myRed transition duration-500 ease-in-out transform '>
          <span className='font-bold uppercase text-sm'>Shoot</span>
          <svg
            width='52'
            height='10'
            viewBox='0 0 72 22'
            xmlns='http://www.w3.org/2000/svg'
            className='bow-arrow'
          >
            <path
              fill='none'
              stroke='#A63F5A'
              strokeWidth='2'
              strokeMiterlimit='0'
              d='M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8'
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Contact;
