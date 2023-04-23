import React, { useMemo } from "react";
import { useData } from "../Pages/Data";
import { FaWind } from "react-icons/fa";

export const DataText = () => {
  const { init, data, displayYear, name } = useData();

  const avgData = useMemo(() => {
    const wsParams = ["WS2M", "WS10M", "WS50M"];
    const wdParams = ["WD2M", "WD10M", "WD50M"];
    const wsAvg =
      wsParams.reduce((sum, param) => {
        const values =
          data.find((item) => item.parameter === param)?.values || [];
        const avg =
          values.reduce(
            (acc: number, item: { value: number }) => acc + item.value,
            0
          ) / values.length;
        return sum + avg;
      }, 0) / wsParams.length;

    const wdAvg =
      wdParams.reduce((sum, param) => {
        const values =
          data.find((item) => item.parameter === param)?.values || [];
        const avg =
          values.reduce(
            (acc: number, item: { value: number }) => acc + item.value,
            0
          ) / values.length;
        return sum + avg;
      }, 0) / wdParams.length;

    return { wsAvg, wdAvg };
  }, [data]);

  return (
    <div className="DataText col-span-1 flex h-full items-center justify-center rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 p-2 shadow-[6px_6px_2px_0px_#fdba74]">
      {init ? (
        <div className="DataText__header flex flex-col items-center justify-center gap-2">
          <h1 className="DataText__title text-2xl font-bold text-black">
            {name}, CT({displayYear} - 2021)
          </h1>
          <div className="flex items-center gap-2">
            <FaWind className="text-3xl text-black" />
            <div className="flex flex-col items-start gap-1">
              <p className="DataText__subtitle text-black">
                Avg Wind Speed: {avgData.wsAvg.toFixed(2)} m/s
              </p>
              <p className="DataText__subtitle text-black">
                Avg Wind Direction: {avgData.wdAvg.toFixed(2)}°
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="DataText__header flex flex-col items-center justify-center gap-2">
          <h1 className="DataText__title text-2xl font-semibold text-black">
            Select a location and year to view data.
          </h1>
        </div>
      )}
    </div>
  );
};

export default DataText;
