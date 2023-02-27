import React from 'react'
import { TbWindmill } from 'react-icons/tb'
import explore from '../assets/undraw_mobile_user_re_xta4.svg'


interface HeroProps {
  onButtonClick: () => void
}

export const Hero = ({ onButtonClick }: HeroProps) => {
  return (
    <div className="hero-container lg:flex-row sm:flex sm:flex-col lg:justify-between sm:justify-center items-center sm:gap-10 border-b-2 border-gray-800 h-[800px] mt-10" style={
      {
        backgroundImage: `url(${explore})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    }>
      {/* <img className="hero-image lg:block lg:absolute top-28 left-0 h-1/4 sm:hidden" src={explore} alt="hero" /> */}
      <div className="hero-text flex flex-col justify-center items-start gap-10">
        <h1 className="text-5xl font-extrabold">
          Explore Wind Energy Potential in Connecticut
        </h1>
        <p>
          Our website helps you visualize the wind pattern and temperature of locations in Connecticut, powered by <a className="underline italic font-semibold" href='https://power.larc.nasa.gov/' target={'_blank'}>NASA's Power API</a>.
        </p>
        <button
          className="bg-red-100 p-2 shadow-[6px_6px_2px_0px_#fca5a5] border-2 border-red-200 hover:bg-red-200 rounded-3xl"
          onClick={onButtonClick}
        >
          <h1 className="text-lg font-semibold">Get Started</h1>
        </button>
      </div>

      <div className="hero-image flex flex-col justify-center items-center bg-sky-100 shadow-[6px_6px_2px_0px_#7dd3fc] border-2 border-sky-200 py-16 px-20 rounded-3xl">
        <div className="hero-image-text flex flex-row justify-center items-center gap-5 mb-5">
          <TbWindmill className="w-20 h-20" />
          <h1 className="text-2xl font-semibold">
            Historical Wind Data In Connecticut
          </h1>
        </div>
        <p className="mb-1">Avg Wind Speed: 5.2 m/s</p>
        <p className="mb-1">Avg Temperature: 20.2 C</p>
      </div>
    </div>
  );
};

