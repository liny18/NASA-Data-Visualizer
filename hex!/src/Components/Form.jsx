import { useState } from "react";
import { Timer } from "./Timer";

export const Form = ( props ) => {
  const [clicked, setClicked] = useState(false);
  const { setStarted, name, setName, seconds, setSeconds } = props;

  const handleSubmit = (e) => {
    if (name === "") {
      alert("What's your gamer tag?");
      return;
    }
    setClicked(true);
    setStarted(true);
  };

  return (
    <div>
      {clicked ? <Timer name={name}/> :
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            className="border-2 border-black rounded-md p-2"
            type="text"
            value={name}
            placeholder="Enter your gamer tag"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 border-black rounded-md p-2"
            type="number"
            value={seconds}
            placeholder="Time in seconds"
            onChange={(e) => setSeconds(Number(e.target.value))}
          />
        </div>
        <button className="bg-slate-200" onClick={handleSubmit}>Start</button>
      </div>
      }
    </div>
  );
};
