import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const  LocationNav= () => {
  const locations = ["Location 1", "Location 2", "Location 3", "Location 4", "Location 5", "Location 6", "Location 7", "Location 8", "Location 1", "Location 2", "Location 3", "Location 4", "Location 5", "Location 6", "Location 7", "Location 8"]
  return (
    <div className="location-nav-container">
      <h1 className="text-lg font-semibold mb-5">
        Locations
      </h1>
      <div className="location-nav h-96 overflow-y-scroll">
        {locations.map((location, index) => (
          <div key={index} className={`location flex items-center justify-between border-b-[1px] border-slate-100 py-3 ${index === 0 ? "border-t-[1px]" : ""}`}>
            {location}
            <span className="location-arrow">
              <i className="material-icons">
                <MdKeyboardArrowRight />
              </i>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
