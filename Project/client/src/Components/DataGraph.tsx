import React from 'react'
import { Chart } from 'react-google-charts'


export const DataGraph = () => {
  const data = [
    ['Year', 'At 2 meters', 'At 10 meters', 'At 50 meters']
    , ['Jan', 0.99, 3, 5.25],
    ['Feb', 1.04, 2.96, 5.18],
    ['Mar', 0.91, 3.11, 5.55],
    ['Apr', 0.67, 3, 5.42],
    ['May', 0.45, 2.43, 4.59],
    ['Jun', 0.36, 1.96, 3.81],
    ['Jul', 0.39, 1.86, 3.65],
    ['Aug', 0.45, 1.98, 3.82],
    ['Sep', 0.56, 2.26, 4.37],
    ['Oct', 0.63, 2.41, 4.45],
    ['Nov', 0.68, 2.57, 4.83],
    ['Dec', 0.77, 2.8, 5.12],
    ['Ann', 0.66, 2.53, 4.67]
  ]
  
  const options = {
    title: 'Wind Speed from 2020 to 2021',
    curveType: 'function',
    legend: { position: 'bottom' },
    backgroundColor: '#f5f5f5',
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: '#333'
      }
    },
    vAxis: {
      title: 'Wind Speed (m/s)',
      titleTextStyle: {
        color: '#333'
      }
    }
  };

  return (
    <div className="data-graph col-span-1">
      <h1>Graph</h1>
      <Chart
        width={'100%'}
        height={'100%'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    </div>
  )
}
