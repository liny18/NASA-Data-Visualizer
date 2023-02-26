import React from 'react'
import { SearchBar } from './SearchBar'
import { NavBar } from './NavBar'
import logo from '../assets/NASA_logo.svg.webp'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header-container flex justify-between items-center h-15 border-gray-800 border-[2px]'>
      <div className='nav-container flex justify-between items-center w-5/6 py-5 px-10 border-gray-800 border-r-[2px]'>
        <Link to='/'>
        <div className='logo-container flex items-center bg-amber-200 border-2 border-gray-800 shadow-[7px_7px_2px_0px_#fcd34d] p-1 hover:bg-amber-300'>
          <img src={logo} alt='NASA Logo' className='w-[50px] h-[42px]' />
          <div className='logo-text flex flex-col justify-center ml-1'>
            <h1 className='text-md font-bold'>NASA</h1>
            <h1 className='text-semibold'>Wind Energy</h1>
          </div>
        </div>
        </Link>
        <NavBar />
      </div>
      <SearchBar />
    </div>
  )
}
