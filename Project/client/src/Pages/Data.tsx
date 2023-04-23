import React, { useState, useContext, createContext } from "react";
import { DataGraph } from "../Components/DataGraph";
import { DataMap } from "../Components/DataMap";
import { DataText } from "../Components/DataText";
import { DataList } from "../Components/DataList";
import { DataPlot } from "../Components/DataPlot";

type DataContextType = {
  lat: number;
  setLat: (lat: number) => void;
  lng: number;
  setLng: (lng: number) => void;
  name: string;
  setName: (name: string) => void;
  year: number;
  setYear: (year: number) => void;
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [lat, setLat] = useState(41.599998);
  const [lng, setLng] = useState(-72.699997);
  const [name, setName] = useState("Connecticut");
  const [year, setYear] = useState(1);
  const [data, setData] = useState<any[]>([]);

  const value = {
    lat,
    setLat,
    lng,
    setLng,
    name,
    setName,
    year,
    setYear,
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const Data = () => {
  return (
    <DataProvider>
      <div className="data-page flex h-full w-full flex-col items-center justify-center gap-10 pt-20 pb-10">
        <div className="data-title relative z-10 flex w-full items-center justify-center rounded-lg bg-white p-4 shadow-md">
          <h1 className="relative text-3xl font-bold">
            Use the interactive map to explore wind energy in Connecticut.
          </h1>
        </div>
        <div className="data-container flex w-full flex-col items-center justify-center gap-10">
          <div className="data-item h-1/2 min-h-[300px] w-full flex-grow gap-7 rounded-lg bg-white p-4 shadow-md sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-3">
            <DataText />
            <DataMap />
          </div>
          <div className="data-item w-full flex-shrink gap-7 rounded-lg bg-white p-4 shadow-md sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-2">
            <DataPlot />
            <DataGraph />
          </div>
          <div className="data-item w-full flex-shrink gap-7 overflow-scroll rounded-lg bg-white p-4 shadow-md">
            <DataList />
          </div>
        </div>
      </div>
    </DataProvider>
  );
};
