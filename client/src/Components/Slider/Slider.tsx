import React, { ChangeEvent } from "react";
import { useData } from "../../Pages/Data";
import "./Slider.css";

interface SliderProps {
  onChange: (value: string) => void;
}

type TimePeriodKey = "1" | "2" | "3";

export const Slider: React.FC<SliderProps> = ({ onChange }) => {
  const { setfetchYear } = useData();
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "1") {
      setfetchYear(2020);
    }
    if (event.target.value === "2") {
      setfetchYear(2016);
    }
    if (event.target.value === "3") {
      setfetchYear(2011);
    }
    const timePeriodMapping: Record<TimePeriodKey, string> = {
      "1": "past 1 year",
      "2": "past 5 years",
      "3": "past 10 years",
    };
    onChange(timePeriodMapping[event.target.value as TimePeriodKey]);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="1"
        max="3"
        step="1"
        defaultValue="1"
        className="slider"
        onChange={handleSliderChange}
      />
      <div className="slider-labels">
        <span>1 Year</span>
        <span>5 Years</span>
        <span>10 Years</span>
      </div>
    </div>
  );
};
