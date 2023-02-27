import React from 'react'
import { DataGraph } from './DataGraph'
import { DataMap } from './DataMap'
import { DataText } from './DataText'
import { DataList } from './DataList'

export const Data = () => {
  return (
    <div className='data-container flex flex-col items-center justify-center w-full gap-14 py-10 h-screen'>
        <h1 className='text-3xl font-semibold'>Data</h1>
        <div className='data-item lg:grid lg:grid-cols-3 gap-7 h-2/5 sm:flex sm:flex-col sm:justify-center'>
          <DataMap />
          <DataText />
        </div>
        <div className='data-item lg:grid lg:grid-cols-2 gap-7 h-2/5 sm:flex sm:flex-col sm:justify-center'>
          <DataList />
          <DataGraph />
        </div>
    </div>
  )
}
