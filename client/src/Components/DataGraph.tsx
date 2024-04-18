import React, { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting";
import { useData } from "../Pages/Data";

// Initialize the exporting module
Exporting(Highcharts);

interface DataItem {
  month: string;
  value: number;
}

interface DataEntry {
  parameter: string;
  values: DataItem[];
}

export const DataGraph: React.FC = () => {
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

    return ws2m.map((item, index) => [
      item.month,
      item.value,
      ws10m[index]?.value,
      ws50m[index]?.value,
    ]);
  }, [data]);

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
      text: "Wind Speed",
    },
    xAxis: {
      categories: processedData.map((item) => item[0]),
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
        data: processedData.map((item) => item[1]),
      },
      {
        name: "At 10 meters",
        type: "spline",
        data: processedData.map((item) => item[2]),
      },
      {
        name: "At 50 meters",
        type: "spline",
        data: processedData.map((item) => item[3]),
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
