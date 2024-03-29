import React, { useState } from "react";
import Hero from "../../components/HeroSection";
import Locate from "../../components/LocateSection";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Special from "../../components/SpecialSection";
import Story from "../../components/StorySection";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouchSection";
import Gallery from "../../components/GallerySection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero isDark={true} />
      <Story isDark={false} />
      <Special isDark={true} />
      <Gallery isDark={false} />
      <Locate isDark={true} />
      <GetInTouch isDark={false} />
      <Footer isHome={true} />
    </>
  );
};

export default Home;
