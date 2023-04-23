import React, { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useData } from "../Pages/Data";

interface DataItem {
  month: string;
  value: number;
}

interface DataEntry {
  parameter: string;
  values: DataItem[];
}

export const DataPlot = () => {
  const { data } = useData();

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

    const combinedData2m = ws2m.map((item, index) => [
      wd2m[index]?.value,
      item.value,
    ]);
    const combinedData10m = ws10m.map((item, index) => [
      wd10m[index]?.value,
      item.value,
    ]);
    const combinedData50m = ws50m.map((item, index) => [
      wd50m[index]?.value,
      item.value,
    ]);

    return { combinedData2m, combinedData10m, combinedData50m };
  }, [data]);

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
        name: "At 2 meters",
        color: "rgba(223, 83, 83, .5)",
        data: processedData.combinedData2m,
      },
      {
        name: "At 10 meters",
        color: "rgba(119, 152, 191, .5)",
        data: processedData.combinedData10m,
      },
      {
        name: "At 50 meters",
        color: "rgba(76, 174, 76, .5)",
        data: processedData.combinedData50m,
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
