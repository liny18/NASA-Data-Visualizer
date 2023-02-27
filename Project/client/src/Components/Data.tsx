import React from 'react'
import { DataGraph } from './DataGraph'
import { DataMap } from './DataMap'
import { DataText } from './DataText'
import { DataList } from './DataList'

export const Data = () => {
  return (
    <div className='data-container flex flex-col items-center justify-center w-full gap-14 py-10 h-screen'>
        <div className='data-item grid grid-cols-3 gap-4 h-1/2'>
          <DataText />
          <DataMap />
        </div>
        <div className='data-item grid grid-cols-2 gap-4 h-1/2'>
          <DataList />
          <DataGraph />
        </div>
    </div>
  )
}
