import React, { useState } from "react";
import Hero from "../components/HeroSection";
import Locate from "../components/LocateSection";
// import HeroSection from "../components/HeroSection";
// import InfoSection from "../components/InfoSection";
// import { HomeObjOne, HomeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Special from "../components/SpecialSection";
import Story from "../components/StorySection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Locate />
      <Special />
      <Story />
    </>
  );
};

export default Home;
