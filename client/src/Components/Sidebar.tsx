import React from "react";
import { LocationNav } from "./LocationNav";

export const Sidebar = () => {
  return (
    <div className="sidebar ml-1 flex w-1/6 min-w-[200px] flex-col justify-between overflow-hidden bg-slate-600 p-5">
      <h1 className="text-3xl font-semibold">Creative Name</h1>
      <div className="intro-container">
        <h2 className="text-md mb-3 border-b-[1px] border-slate-100 pb-3">
          Note
        </h2>
        <p className="text-sm">
          Use the navigation bar below to explore the data of specific
          locations.
        </p>
      </div>
      <LocationNav />
    </div>
  );
};
