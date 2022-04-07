import React, { FunctionComponent } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import SocialIcons from "../components/SocialIcons";

const Home: FunctionComponent = () => {
  return (
    <div className='home w-full text-gray-50 py-4'>
      <Navbar />
      <div className='panel-snap'>
        <Section>
          <Header />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Contact />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
      <div
        id='left'
        className='hidden lg:flex fixed bottom-0  p-4 pb-0 left-8 '
      >
        <div className='flex flex-col align-bottom justify-center space-y-6'>
          <SocialIcons />
          <span className='vertical-line'></span>
        </div>
      </div>
      <div
        id='right'
        className='hidden lg:flex fixed bottom-0 p-4 pb-0 right-8 '
      >
        <div className='flex flex-col align-bottom justify-center space-y-3'>
          <span
            className='font-bold text-xl text-white mb-2'
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            muizakanji@gmail.com
          </span>
          <span className='vertical-line'></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
