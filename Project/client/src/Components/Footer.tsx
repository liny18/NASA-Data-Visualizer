import React from "react";
import icon from "../assets/icons8-github-100.png";

export const Footer = () => {
  return (
    <div className="footer-container z-10 grid h-14 w-full grid-cols-3 border-[2px] border-gray-300 bg-gray-50 shadow-[5px_5px_2px_0px_#d1d5db]">
      <div className="col-span-1 flex items-center justify-center gap-2">
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
          href="https://www.linkedin.com/in/shawn-vembenil/
        "
          className="text-md
        "
        >
          Shawn Vembenil
        </a>
      </div>
      <div className="col-span-1 flex items-center justify-center border-x-2 border-gray-300">
        <h1 className="text-md font-semibold">
          Copyright &copy; 2023 by FluffyBarnacles.
        </h1>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <a href="https://github.com/RPI-ITWS/ITWS4500-S23-fluffyBarnacles">
          <img className="h-10 w-10" src={icon} alt="Github Icon" />
        </a>
      </div>
    </div>
  );
};
