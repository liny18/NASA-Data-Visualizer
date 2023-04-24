import React from "react";
import { useData } from "../Pages/Data";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <div className="search-container flex flex-row items-center justify-center px-10">
      <form className="flex flex-row items-center justify-between rounded-full border-[1px] border-emerald-200 bg-emerald-100 px-3 shadow-[4px_4px_2px_0px_#6ee7b7]">
        <input
          className="h-7 rounded-full bg-transparent px-2 text-sm text-gray-700 focus:bg-white focus:outline-none"
          type="search"
          name="search"
          placeholder="Enter a location"
        />
        <button
          type="submit"
          className="border-l-[1px] border-dotted border-gray-800 pl-1"
        >
          <BiSearch className="h-6 w-6 text-gray-700" />
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
  );
};
