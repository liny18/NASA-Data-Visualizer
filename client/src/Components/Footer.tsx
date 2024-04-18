import React from "react";
import icon from "../assets/icons8-github-100.png";

export const Footer = () => {
  return (
    <div className="footer-container z-10 grid h-14 w-full grid-cols-1 gap-y-4 border-t border-gray-300 bg-gray-50 py-4 md:h-auto md:grid-cols-3">
      <div className="flex flex-wrap justify-center gap-2 md:col-span-1 md:items-center">
        <a
          href="https://www.linkedin.com/in/terry-lin-rpi/"
          className="text-md"
        >
          Terry Lin,
        </a>
        <a href="https://www.linkedin.com/in/samuelmei/" className="text-md">
          Sam Mei,
        </a>
        <a
          href="https://www.linkedin.com/in/shawn-vembenil/"
          className="text-md"
        >
          Shawn Vembenil
        </a>
      </div>
      <div className="flex items-center justify-center border-gray-300 md:col-span-1 md:border-l md:border-r">
        <h1 className="text-md text-center font-semibold">
          Copyright &copy; 2023 by FluffyBarnacles.
        </h1>
      </div>
      <div className="flex items-center justify-center md:col-span-1">
        <a href="https://github.com/RPI-ITWS/ITWS4500-S23-fluffyBarnacles">
          <img className="h-10 w-10" src={icon} alt="Github Icon" />
        </a>
      </div>
    </div>
  );
};
