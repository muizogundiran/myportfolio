import React from "react";
import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <div className='flex flex-row h-full justify-between items-center pt-40 pb-16'>
      <div className='grid grid-cols-12  gap-4 w-screen h-max px-8 content content-end '>
        <div className='col-span-1 p-4 rounded-lg pt-56 '>
          <div className='flex flex-col align-bottom justify-center space-y-6'>
            <SocialIcons />
            <span className='border-r-2 h-28 w-1/2 border-r-stone-200'></span>
          </div>
        </div>
        <div className='col-span-10 place-content-stretch p-4 rounded-lg '>
          Hi , my name is
        </div>
        <div className='col-span-1 p-4 rounded-lg pt-56'>
          <div className='flex flex-col align-bottom justify-center space-y-6'>
            <span
              className='h-52 p-3'
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              muizakanji@gmail.com
            </span>
            <span className='border-r-2 h-28 w-1/2 border-r-stone-200'></span>
          </div>
        </div>
      </div>
      {/* <span className='text-xl text-theme-myRed '>
        Hi , my name is muiz <br />
      </span> */}
    </div>
  );
};

export default Header;
