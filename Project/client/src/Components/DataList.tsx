import React from 'react'
import './DataList.css'

export const DataList = () => {
  
  return (
    <div className="DataList col-span-1 lg:h-full sm:h-1/2 bg-sky-100 p-2 shadow-[6px_6px_2px_0px_#7dd3fc] border-2 border-sky-200 rounded-3xl">
    <div className="DataList__header">
      <h2 className="DataList__title">
        Air Temperatures
      </h2>
      <h3>
        8-day forecast
      </h3>
      <table>
        <tr>
        <th className="DataList__item__label">Sat, Mar 04</th>
        <th className="DataList__item__label2">40ºF/29ºF</th>
        <th className="DataList__item__label3">moderate rain</th>
        </tr>
        <tr>
        <th className="DataList__item__label">Sun, Mar 05</th>
        <th className="DataList__item__label2">40ºF/23ºF</th>
        <th className="DataList__item__label3">overcast clouds</th> 
        </tr>
        <tr>
        <th className="DataList__item__label">Mon, Mar 06</th>
        <th className="DataList__item__label2">43ºF/27ºF</th>
        <th className="DataList__item__label3">overcast clouds</th>
        </tr>
        <tr>
        <th className="DataList__item__label">Tue, Mar 07</th>
        <th className="DataList__item__label2">45ºF/29ºF</th>
        <th className="DataList__item__label3">sunny</th>
        </tr>
        <tr>
        <th className="DataList__item__label">Wed, Mar 08</th>
        <th className="DataList__item__label2">40ºF/21ºF</th>
        <th className="DataList__item__label3">overcast clouds</th>
        </tr>
        <tr>
        <th className="DataList__item__label">Thu, Mar 09</th>
        <th className="DataList__item__label2">38ºF/25ºF</th>
        <th className="DataList__item__label3">rain and snow</th>
        </tr>
        <tr>
        <th className="DataList__item__label">Fri, Mar 10</th>
        <th className="DataList__item__label2">39ºF/27ºF</th>
        <th className="DataList__item__label3">overcast clouds</th>
        </tr>
        <tr>
        <th className="DataList__item__label">Sat, Mar 11</th>
        <th className="DataList__item__label2">43ºF/28ºF</th>
        <th className="DataList__item__label3">rain and snow</th>
        </tr>
      </table>
    </div>
  </div>
  )
}
