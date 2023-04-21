import React from "react";
import { DataGraph } from "../Components/DataGraph";
import { DataMap } from "../Components/DataMap";
import { DataText } from "../Components/DataText";
import { DataList } from "../Components/DataList";

export const Data = () => {
  return (
    <div className="data-container flex h-full w-full flex-col items-center justify-center gap-10 py-16">
      <div className="data-title relative z-10 flex items-center justify-center">
        <h1 className="relative text-3xl font-bold">
          Explore the data below to learn more about wind energy in Connecticut.
        </h1>
      </div>
      <div className="data-item h-2/5 w-full gap-7 sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-3">
        <DataText />
        <DataMap />
      </div>
      <div className="data-item h-2/5 w-full gap-7 sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-2">
        <DataGraph />
        <DataList />
      </div>
    </div>
  );
};
