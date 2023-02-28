import React from "react";
import { DataGraph } from "./DataGraph";
import { DataMap } from "./DataMap";
import { DataText } from "./DataText";
import { DataList } from "./DataList";

export const Data = () => {
  return (
    <div className="data-container flex h-screen w-full flex-col items-center justify-center gap-10 py-16">
      <div className="data-title relative z-10 flex items-center justify-center">
        <h1 className="relative z-10 text-3xl font-bold">
          Explore the data below to learn more about wind energy in Connecticut.
        </h1>
      </div>
      <div className="data-item z-10 h-2/5 w-full gap-7 sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-3">
        <DataMap />
        <DataText />
      </div>
      <div className="data-item z-10 h-2/5 w-full gap-7 sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-2">
        <DataList />
        <DataGraph />
      </div>
    </div>
  );
};
