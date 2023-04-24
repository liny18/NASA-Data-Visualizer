import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { DataGraph } from "../Components/DataGraph";
import { DataMap } from "../Components/DataMap";
import { DataText } from "../Components/DataText";
import { DataList } from "../Components/DataList";
import { DataPlot } from "../Components/DataPlot";
import { Slider } from "../Components/Slider/Slider";
import { Toaster, toast } from "react-hot-toast";

interface MonthDataType {
  $numberDouble?: string;
  $numberInt?: string;
}

type DataContextType = {
  init: boolean;
  setInit: (init: boolean) => void;
  lat: number;
  setLat: (lat: number) => void;
  lng: number;
  setLng: (lng: number) => void;
  name: string;
  setName: (name: string) => void;
  fetchYear: number;
  setfetchYear: (fetchYear: number) => void;
  displayYear: number;
  setDisplayYear: (displayYear: number) => void;
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  fetchData: (lat: number, lng: number, fetchYear: number) => Promise<void>;
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

const processMongoData = (mongoData: any) => {
  const { data } = mongoData;
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

  return processedData;
};

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [init, setInit] = useState(false);
  const [lat, setLat] = useState(41.599998);
  const [lng, setLng] = useState(-72.699997);
  const [name, setName] = useState("Connecticut");
  const [fetchYear, setfetchYear] = useState(2020);
  const [displayYear, setDisplayYear] = useState(0);
  const [data, setData] = useState<any[]>([]);

  const fetchData = async (lat: number, lng: number, fetchYear: number) => {
    try {
      const response = await axios.get("/api/loc", {
        params: {
          lat,
          lng,
          startYear: fetchYear,
        },
      });
      const processedData = processMongoData(response.data);
      setData(processedData);
      setDisplayYear(fetchYear);
      setName(
        response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const value = {
    init,
    setInit,
    lat,
    setLat,
    lng,
    setLng,
    name,
    setName,
    fetchYear,
    setfetchYear,
    displayYear,
    setDisplayYear,
    data,
    setData,
    fetchData,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const Data = () => {
  const [timePeriod, setTimePeriod] = useState("past 1 year");
  const handleTimePeriodChange = (value: string) => {
    setTimePeriod(value);
  };

  return (
    <DataProvider>
      <DataContent
        handleTimePeriodChange={handleTimePeriodChange}
        timePeriod={timePeriod}
      />
    </DataProvider>
  );
};

const DataContent = ({
  handleTimePeriodChange,
  timePeriod,
}: {
  handleTimePeriodChange: (value: string) => void;
  timePeriod: string;
}) => {
  const { lat, lng, fetchYear, fetchData, displayYear, init, setInit } =
    useData();

  // Add these two state variables to store the previous lat and lng values
  const [prevLat, setPrevLat] = useState(lat);
  const [prevLng, setPrevLng] = useState(lng);

  const handleButtonClick = async () => {
    // Check if the year and location are the same
    const locationChanged = lat !== prevLat || lng !== prevLng;
    if (fetchYear === displayYear && !locationChanged) {
      toast.error("Data for this period is already loaded.");
      return;
    }

    // Show a loading notification
    const loadingToast = toast.loading("Loading data...");

    try {
      await fetchData(lat, lng, fetchYear);

      // Update the loading notification with success
      toast.success("Data loaded successfully!", { id: loadingToast });

      if (!init) {
        setInit(true);
      }

      // Update the previous lat and lng values
      setPrevLat(lat);
      setPrevLng(lng);
    } catch (error) {
      // Update the loading notification with an error
      toast.error("Error loading data.", { id: loadingToast });
    }
  };

  return (
    <div className="data-page flex h-full w-screen flex-col items-center justify-center gap-10 px-4 pb-10 sm:px-10">
      <Toaster />
      <div className="data-title mb-6 flex w-full flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-md">
        <h1 className="relative text-3xl font-bold">
          Select a location on the map to load the corresponding data.
        </h1>
        <p className="font-sans text-md italic">
          Please note that the available data pertains only to the year 2021.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <Slider onChange={handleTimePeriodChange} />
        <button
          className="mt-4 mb-8 w-full rounded-xl bg-[#4caf50] py-2 px-1 font-semibold text-white shadow-md hover:bg-[#43a047] md:w-1/6"
          onClick={handleButtonClick}
        >
          Load data for {timePeriod}
        </button>
      </div>
      <div
        className={`data-container flex w-full flex-col items-center justify-center gap-10`}
      >
        <div
          className={`data-item mb-8 min-h-[300px] w-full gap-7 rounded-xl border border-gray-200 bg-white p-4 shadow-md sm:flex sm:flex-col sm:justify-center sm:gap-7 lg:grid lg:grid-cols-3 lg:gap-7`}
        >
          <DataText />
          <DataMap />
        </div>
        {init && (
          <div className="data-item mb-8 w-full gap-7 rounded-xl border border-gray-200 bg-white p-4 shadow-md sm:flex sm:flex-col sm:justify-center sm:gap-7 lg:grid lg:grid-cols-2 lg:gap-7">
            <DataGraph />
            <DataPlot />
          </div>
        )}
        {init && (
          <div className="data-item w-full gap-7 overflow-scroll rounded-xl border border-gray-200 bg-white p-4 shadow-md">
            <DataList />
          </div>
        )}
      </div>
    </div>
  );
};
