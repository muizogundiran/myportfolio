import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full space-y-4 pt-10 lg:pt-40 pb-0'>
      <hr className='flex lg:hidden ' />
      <span className='text-sm font-semibold text-center'>
        Designed & Built by Muiz Ogundiran
      </span>
    </div>
  );
};

export default Footer;
