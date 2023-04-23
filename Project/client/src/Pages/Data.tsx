import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { DataGraph } from "../Components/DataGraph";
import { DataMap } from "../Components/DataMap";
import { DataText } from "../Components/DataText";
import { DataList } from "../Components/DataList";
import { DataPlot } from "../Components/DataPlot";

interface MonthDataType {
  $numberDouble?: string;
  $numberInt?: string;
}

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

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

interface MongoDataType {
  _id: { $oid: string };
  name: string;
  data: { [key: string]: { [key: string]: MonthDataType } };
}

const processMongoData = (mongoData: any) => {
  const { data } = mongoData;
  console.log("Raw data:", data);

  const processedData = Object.entries(data).map(
    ([key, value]: [string, any]) => {
      const monthValues = Object.entries(value).map(([month, monthData]) => {
        const typedMonthData = monthData as MonthDataType;
        const value = typedMonthData;
        return {
          month,
          value,
        };
      });

      return {
        parameter: key,
        values: monthValues,
      };
    }
  );

  console.log("Processed data:", processedData);
  return processedData;
};

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [lat, setLat] = useState(41.599998);
  const [lng, setLng] = useState(-72.699997);
  const [name, setName] = useState("Connecticut");
  const [year, setYear] = useState(2020);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/loc", {
          params: {
            lat,
            lng,
            startYear: year,
          },
        });
        const processedData = processMongoData(response.data);
        console.log("lat:", lat, "lng:", lng, "year:", year);
        console.log("Response data:", response.data);
        console.log("Processed data:", processedData);

        console.log("Data:", processedData);
        setData(processedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [lat, lng, setData]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const Data = () => {
  return (
    <DataProvider>
      <div className="data-page flex h-full w-full flex-col items-center justify-center gap-10 pt-20 pb-10">
        <div className="data-title flex w-full flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
          <h1 className="relative text-3xl font-bold">
            Select a location on the map to load the corresponding data.
          </h1>
          <p className="font-sans text-md italic">
            Please note that the available data pertains only to the year 2021.
          </p>
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
