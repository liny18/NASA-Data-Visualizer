import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-container items-between flex flex-row justify-between gap-10">
      <div className="nav-item">
        <Link to="/">
          <button className="border-t-2 border-blue-300 pt-1 font-extrabold hover:text-gray-600">
            <h1>DASHBOARD</h1>
          </button>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/about">
          <button className="border-t-2 border-amber-300 pt-1 font-extrabold hover:text-gray-600">
            <h1>ABOUT</h1>
          </button>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/help">
          <button className="border-t-2 border-red-300 pt-1 font-extrabold hover:text-gray-600">
            <h1>HELP</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};
