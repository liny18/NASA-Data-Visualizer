import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav-container flex flex-row justify-between items-between gap-10'>
      <div className='nav-item'>
        <Link to='/'>
          <button className='font-extrabold hover:text-gray-600 border-blue-300 border-t-2 pt-1'>
            <h1>DASHBOARD</h1>
          </button>
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/about'>
          <button className='font-extrabold hover:text-gray-600 border-amber-300 border-t-2 pt-1'>
            <h1>ABOUT</h1>
          </button>
        </Link>
      </div>
      <div className='nav-item'>
        <Link to='/help'>
          <button className='font-extrabold hover:text-gray-600 border-red-300 border-t-2 pt-1'>
            <h1>HELP</h1>
          </button>
        </Link>
      </div>
    </div>
  )
}
