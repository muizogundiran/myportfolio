import React from "react";
import Logo from "../assets/images/me.jpg";
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between fixed top-0 w-screen z-40 transition-all duration-300 bg-theme-dark py-8 px-12'>
      <div className='flex items-center flex-shrink-0 text-white w-20 h-20'>
        <img src={Logo} className='object-cover rounded-lg ' alt='' />
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 fill-current text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
