import { useState } from "react";
import { SketchPicker } from "react-color";

export const Picker = (props) => {
  const { sketchPickerColor, setSketchPickerColor, setEnd } = props;
  const { r, g, b, a } = sketchPickerColor;
  const handleSubmit = () => {
    setEnd(true);
  };

  return (
    <div className="sketchpicker flex flex-col justify-center items-center">
      <button onClick={handleSubmit} className="rounded-md m-2 w-full p-3" style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}>
        Submit
      </button>
      <SketchPicker
        onChange={(color) => {
          setSketchPickerColor(color.rgb);
        }}
        color={sketchPickerColor}
      />
    </div>
  );
};
