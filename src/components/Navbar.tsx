import React, { useState } from "react";
import muizResume from "../assets/images/muizResume.pdf";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  window.onscroll = function () {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      setLastScroll(currentScroll);
      // document.getElementById("scrollLoc").innerHTML = "Scrolling DOWN";
      setNav(true);
    } else {
      setLastScroll(currentScroll);
      // document.getElementById("scrollLoc").innerHTML = "Scrolling UP";
      setNav(false);
    }
  };

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 w-screen z-40 transition-all duration-300 bg-theme-dark py-6 px-16  ${
        nav ? "hidden" : ""
      }`}
    >
      <div className='flex items-center flex-shrink-0 text-white w-12 h-12'>
        <span className='title font-semibold text-4xl text-theme-myYellow'>
          muiz
        </span>
      </div>
      <div>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 fill-current text-white cursor-pointer text-theme-myYellow'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          onClick={openModal}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg> */}
        <a href={muizResume}>
          <span className='text-lg p-1 px-3 border-2 rounded-lg border-theme-myRed flex justify-center items-center  hover:bg-theme-myRed hover:bg-opacity-20 text-theme-myRed cursor-pointer'>
            Resume
          </span>
        </a>
      </div>
      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-y-auto transition-all duration-300 left-20'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='absolute top-2 text-theme-myRed right-10 w-3/12 p-6 my-4 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl'>
                <div className='flex flex-col space-y-4'>
                  <div className='flex flex-col space-y-4'>
                    <span className='text-xl'>My Work</span>
                    <span className='text-xl'>Resume</span>
                  </div>
                  <span className='uppercase text-gray-400 text-2xl font-extralight'>
                    say hello
                  </span>

                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition> */}
    </nav>
  );
};

export default Navbar;
