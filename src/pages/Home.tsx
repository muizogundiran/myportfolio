import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

const Home = () => {
  return (
    <div className='home w-full h-screen bg-theme-dark text-gray-50'>
      <Navbar />
      <Section>
        <Header />
      </Section>
    </div>
  );
};

export default Home;
