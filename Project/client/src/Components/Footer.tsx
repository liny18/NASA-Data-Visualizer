import React from "react";

export const Footer = () => {
  return (
    <div className="footer-container z-10 grid h-14 w-full grid-cols-3 border-[2px] border-gray-300 bg-gray-50 shadow-[5px_5px_2px_0px_#d1d5db]">
      <div className="col-span-1 flex items-center justify-center"></div>
      <div className="col-span-1 flex items-center justify-center border-x-2 border-gray-300">
        <h1 className="text-md font-semibold">
          Copyright &copy; 2023 by FluffyBarnacles.
        </h1>
      </div>
      <div className="col-span-1 flex items-center justify-center"></div>
    </div>
  );
};
