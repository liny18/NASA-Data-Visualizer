import React from "react";
import { SearchBar } from "./SearchBar";
import { NavBar } from "./NavBar";
import logo from "../assets/NASA_logo.svg.webp";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container fixed z-50 flex w-full items-center justify-between border-[2px] border-gray-300 bg-gray-50 shadow-[5px_5px_2px_0px_#d1d5db]">
      <div className="nav-container flex w-5/6 items-center justify-between border-r-[2px] border-gray-300 py-5 px-10">
        <Link to="/">
          <div className="logo-container flex items-center rounded-3xl border-2 border-amber-200 bg-amber-100 p-1 shadow-[5px_5px_2px_0px_#fcd34d] hover:bg-amber-200">
            <img src={logo} alt="NASA Logo" className="h-[42px] w-[50px]" />
            <div className="logo-text ml-1 flex flex-col justify-center">
              <h1 className="text-md font-bold">NASA</h1>
              <h1 className="text-semibold">Wind Energy</h1>
            </div>
          </div>
        </Link>
        <NavBar />
      </div>
      <SearchBar />
    </div>
  );
};
