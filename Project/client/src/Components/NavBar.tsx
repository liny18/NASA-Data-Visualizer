import React from 'react'

export const NavBar = () => {
  return (
    <div className='nav-container flex flex-row justify-between items-between gap-10'>
      <div className='nav-item'>
        <button className='font-extrabold hover:text-gray-600'>
          <h1>HOME</h1>
        </button>
      </div>
      <div className='nav-item'>
        <button className='font-extrabold hover:text-gray-600'>
          <h1>ABOUT</h1>
        </button>
      </div>
      <div className='nav-item'>
        <button className='font-extrabold hover:text-gray-600'>
          <h1>API</h1>
        </button>
      </div>
    </div>
  )
}
