import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { MenueWrapper } from "./MenuePageComponents";

const MenuePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MenueWrapper />
    </>
  );
};

export default MenuePage;
