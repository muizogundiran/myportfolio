import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const Section: FunctionComponent<Props> = ({ children }) => {
  return <div className='p2 flex items-center text-justify'>{children}</div>;
};

export default Section;
