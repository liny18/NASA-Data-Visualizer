import React from 'react'
import { BiSearch } from 'react-icons/bi'

export const SearchBar = () => {
  return (
    <div className='search-container flex flex-row justify-center items-center px-10'>
      <form className="flex flex-row items-center justify-between px-2 rounded-full shadow-md border-[1px] border-gray-800 w-full">
        <input
          className="h-7 text-sm text-gray-700 bg-transparent rounded-full focus:outline-none focus:bg-white px-2"
          type="search"
          name="search"
          placeholder="Enter a location"
        />
        <button type="submit">
          <BiSearch className="w-6 h-6 text-gray-700" />
        </button>
      </form>

      <style>{`
        @media screen and (max-width: 640px) {
          .search-container {
            padding: 10px;
          }
          form {
            flex-direction: column;
            align-items: center;
          }
          input {
            margin-bottom: 10px;
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </div>
  )
}
