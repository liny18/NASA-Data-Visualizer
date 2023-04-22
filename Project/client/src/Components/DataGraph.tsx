import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting";

// Initialize the exporting module
Exporting(Highcharts);

export const DataGraph = () => {
  const data = [
    ["Jan", 0.99, 3, 5.25],
    ["Feb", 1.04, 2.96, 5.18],
    ["Mar", 0.91, 3.11, 5.55],
    ["Apr", 0.67, 3, 5.42],
    ["May", 0.45, 2.43, 4.59],
    ["Jun", 0.36, 1.96, 3.81],
    ["Jul", 0.39, 1.86, 3.65],
    ["Aug", 0.45, 1.98, 3.82],
    ["Sep", 0.56, 2.26, 4.37],
    ["Oct", 0.63, 2.41, 4.45],
    ["Nov", 0.68, 2.57, 4.83],
    ["Dec", 0.77, 2.8, 5.12],
    ["Ann", 0.66, 2.53, 4.67],
  ];

  const options = {
    exporting: {
      buttons: {
        contextButton: {
          menuItems: [
            "viewFullscreen",
            "printChart",
            "separator",
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
            "separator",
            "downloadCSV",
            "downloadXLS",
            "openInCloud",
          ],
        },
      },
    },
    title: {
      text: "Wind Speed from 2020 to 2021",
    },
    xAxis: {
      categories: data.map((item) => item[0]),
      title: {
        text: "Year",
      },
    },
    yAxis: {
      title: {
        text: "Wind Speed (m/s)",
      },
      plotBands: [
        {
          from: 0,
          to: 1,
          color: "rgba(68, 170, 213, 0.1)",
          label: {
            text: "Low wind speed",
            style: {
              color: "#606060",
            },
          },
        },
        {
          from: 1,
          to: 3,
          color: "rgba(0, 0, 0, 0)",
          label: {
            text: "Medium wind speed",
            style: {
              color: "#606060",
            },
          },
        },
        {
          from: 3,
          to: 6,
          color: "rgba(68, 170, 213, 0.1)",
          label: {
            text: "High wind speed",
            style: {
              color: "#606060",
            },
          },
        },
      ],
    },
    series: [
      {
        name: "At 2 meters",
        type: "spline",
        data: data.map((item) => item[1]),
      },
      {
        name: "At 10 meters",
        type: "spline",
        data: data.map((item) => item[2]),
      },
      {
        name: "At 50 meters",
        type: "spline",
        data: data.map((item) => item[3]),
      },
    ],
  };

  const chartContainerStyle = {
    borderRadius: "10px",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="data-graph col-span-1 h-full w-full rounded-3xl border-2 border-red-200 bg-red-100 p-2 shadow-[6px_6px_2px_0px_#fca5a5]">
      <div style={chartContainerStyle}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};
