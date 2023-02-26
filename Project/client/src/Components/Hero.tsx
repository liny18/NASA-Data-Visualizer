import React from 'react'
import { TbWindmill } from 'react-icons/tb'

export const Hero = () => {
  return (
    <div className="hero-container lg:flex-row sm:flex sm:flex-col justify-between items-center sm:gap-10">
      <div className="hero-text flex flex-col justify-center items-start gap-10">
        <h1 className="text-5xl font-extrabold">
          How's Connecticut feeling today?
        </h1>
        <p>
          Our website helps you visualize the wind pattern and temperature of locations in Connecticut, powered by <a className="underline italic font-semibold" href='https://power.larc.nasa.gov/' target={'_blank'}>NASA's Power API</a>.
        </p>
        <button className="border-2 border-gray-800 p-2 shadow-[6px_6px_2px_0px_rgba(0,0,0,1)] hover:bg-gray-800 hover:text-white">
          <h1 className="text-lg font-semibold">Get Started</h1>
        </button>
      </div>

      <div className="hero-image flex flex-col justify-center items-center bg-red-200 shadow-[6px_6px_2px_0px_rgba(0,0,0,1)] border-2 border-gray-800 py-16 px-20">
        <div className="hero-image-text flex flex-row justify-center items-center gap-5 mb-5">
          <TbWindmill className="w-20 h-20" />
          <h1 className="text-2xl font-semibold">
            History Data
          </h1>
          </div>
        <p className="mb-1">
          Avg Wind Speed: 5.2 m/s
        </p>
        <p className="mb-1">
          Avg Temperature: 20.2 C
        </p>
      </div>
    </div>
  )
}
