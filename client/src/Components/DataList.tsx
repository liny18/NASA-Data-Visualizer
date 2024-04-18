import React, { useMemo } from "react";
import { useData } from "../Pages/Data";

interface DataItem {
  month: string;
  value: number;
}

interface DataEntry {
  parameter: string;
  values: DataItem[];
}

export const DataList = () => {
  const { data } = useData();
  const headers = [
    "Month",
    "Wind at 2 meters",
    "Wind at 10 meters",
    "Wind at 50 meters",
  ];

  const processedData = useMemo(() => {
    const ws2m =
      (data.find((item) => item.parameter === "WS2M") as DataEntry)?.values ||
      [];
    const ws10m =
      (data.find((item) => item.parameter === "WS10M") as DataEntry)?.values ||
      [];
    const ws50m =
      (data.find((item) => item.parameter === "WS50M") as DataEntry)?.values ||
      [];
    const wd2m =
      (data.find((item) => item.parameter === "WD2M") as DataEntry)?.values ||
      [];
    const wd10m =
      (data.find((item) => item.parameter === "WD10M") as DataEntry)?.values ||
      [];
    const wd50m =
      (data.find((item) => item.parameter === "WD50M") as DataEntry)?.values ||
      [];

    const rows = ws2m.map((item, index) => [
      item.month,
      `${item.value} m/s`,
      `${wd2m[index]?.value}° N`,
      `${ws10m[index]?.value} m/s`,
      `${wd10m[index]?.value}° N`,
      `${ws50m[index]?.value} m/s`,
      `${wd50m[index]?.value}° N`,
    ]);

    return rows;
  }, [data]);

  return (
    <div className="DataList col-span-1 flex h-full w-full gap-1 overflow-scroll rounded-3xl border-2 border-sky-200 bg-sky-100 shadow-[6px_6px_2px_0px_#7dd3fc] sm:flex-col sm:items-center sm:p-0">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              rowSpan={2}
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Month
            </th>
            {headers.slice(1).map((header, index) => (
              <th
                key={index}
                colSpan={2}
                className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                {header}
              </th>
            ))}
          </tr>
          <tr>
            {headers.slice(1).map((_, index) => (
              <React.Fragment key={index}>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Speed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Direction
                </th>
              </React.Fragment>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {processedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
