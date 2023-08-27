import React from "react";
import MenuComponent from "./Menu";
import Toggle from "./Toggle";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Dictionary App</span>
          <img className="h-8 w-auto" src="/book-icon.svg" alt="Book Logo" />
        </a>
      </div>
      <div className="options flex items-center ">
        <MenuComponent />
        <div className="divider-vertical w-[1px] h-1/2 bg-offWhite"></div>
        <Toggle />
        <img src="/half-moon.svg" className=" px-3" alt="moon-icon" />
      </div>
    </div>
  );
};

export default Header;
