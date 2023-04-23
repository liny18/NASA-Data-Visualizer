import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const DataPlot = () => {
  const speedData = [
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
  const directionData = [
    ["Jan", 301.24, 304.32, 306.47],
    ["Feb", 304.32, 306.47, 308.47],
    ["Mar", 308.47, 310.47, 312.47],
    ["Apr", 312.47, 314.47, 316.47],
    ["May", 316.47, 318.47, 320.47],
    ["Jun", 320.47, 322.47, 324.47],
    ["Jul", 324.47, 326.47, 328.47],
    ["Aug", 328.47, 330.47, 332.47],
    ["Sep", 332.47, 334.47, 336.47],
    ["Oct", 336.47, 338.47, 340.47],
    ["Nov", 340.47, 342.47, 344.47],
    ["Dec", 344.47, 346.47, 348.47],
    ["Ann", 348.47, 350.47, 352.47],
  ];

  const combinedData2m = speedData.map((speed, index) => [
    directionData[index][1],
    speed[1],
  ]);

  const combinedData10m = speedData.map((speed, index) => [
    directionData[index][2],
    speed[2],
  ]);

  const combinedData50m = speedData.map((speed, index) => [
    directionData[index][3],
    speed[3],
  ]);

  const options = {
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    title: {
      text: "Wind Speed and Direction",
    },
    subtitle: {
      text: "At 2m, 10m, and 50m",
    },
    xAxis: {
      title: {
        text: "Wind Direction (degrees)",
      },
    },
    yAxis: {
      title: {
        text: "Wind Speed (m/s)",
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      borderWidth: 1,
      itemMarginTop: 5,
      itemMarginBottom: 5,
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          },
        },
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x} degrees, {point.y} m/s",
        },
      },
    },
    series: [
      {
        name: "Wind Data at 2m",
        color: "rgba(223, 83, 83, .5)",
        data: combinedData2m,
      },
      {
        name: "Wind Data at 10m",
        color: "rgba(119, 152, 191, .5)",
        data: combinedData10m,
      },
      {
        name: "Wind Data at 50m",
        color: "rgba(76, 174, 76, .5)",
        data: combinedData50m,
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
    <div className="data-plot h-full w-full rounded-3xl border-2 border-purple-200 bg-purple-100 p-2 shadow-[6px_6px_2px_0px_#d8b4fe]">
      <div style={chartContainerStyle}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};
