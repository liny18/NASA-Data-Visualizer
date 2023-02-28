import React from "react";

export const DataList = () => {
  const Data = [
    ["Jan", "0.99 m/s", "3 m/s", "5.25 m/s"],
    ["Feb", "1.04 m/s", "2.96 m/s", "5.18 m/s"],
    ["Mar", "0.91 m/s", "3.11 m/s", "5.55 m/s"],
    ["Apr", "0.67 m/s", "3 m/s", "5.42 m/s"],
    ["May", "0.45 m/s", "2.43 m/s", "4.59 m/s"],
    ["Jun", "0.36 m/s", "1.96 m/s", "3.81 m/s"],
    ["Jul", "0.39 m/s", "1.86 m/s", "3.65 m/s"],
    ["Aug", "0.45 m/s", "1.98 m/s", "3.82 m/s"],
    ["Sep", "0.56 m/s", "2.26 m/s", "4.37 m/s"],
    ["Oct", "0.63 m/s", "2.41 m/s", "4.45 m/s"],
    ["Nov", "0.68 m/s", "2.57 m/s", "4.83 m/s"],
    ["Dec", "0.77 m/s", "2.8 m/s", "5.12 m/s"],
    ["Avg", "0.66 m/s", "2.53 m/s", "4.67 m/s"],
  ];

  return (
    <div className="DataList col-span-1 flex h-full w-full gap-1 overflow-scroll rounded-3xl border-2 border-sky-200 bg-sky-100 shadow-[6px_6px_2px_0px_#7dd3fc] sm:flex-col sm:items-center sm:p-0">
      <div className="DataList__header">
        <div className="DataList__table">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2">Wind at 2 meters</th>
                <th className="px-4 py-2">Wind at 10 meters</th>
                <th className="px-4 py-2">Wind at 50 meters</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((row, index) => {
                return (
                  <tr key={index}>
                    {row.map((cell, index) => {
                      return (
                        <td
                          key={index}
                          className="border border-gray-800 px-4 py-2"
                        >
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};