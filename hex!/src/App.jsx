import { useState, useEffect, createContext } from "react";
import { Form } from "./Components/Form";
import { Picker } from "./Components/Picker";
import "./App.css";

export const TimerContext = createContext({
  secondsLeft: 0,
  setSecondsLeft: () => {},
  setEnd: () => {},
});

function App() {
  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState("");
  const [secondsLeft, setSecondsLeft] = useState("");
  const [started, setStarted] = useState(false);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState();
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });
  const [borderColor, setBorderColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });

  const calculateScore = () => {
    const r1 = borderColor.r;
    const g1 = borderColor.g;
    const b1 = borderColor.b;
    const r2 = sketchPickerColor.r;
    const g2 = sketchPickerColor.g;
    const b2 = sketchPickerColor.b;
    const formula =
      (255 -
        Math.abs(r1 - r2) +
        (255 - Math.abs(g1 - g2)) +
        (255 - Math.abs(b1 - b2))) *
      Math.floor(secondsLeft) *
      (1000 * (101 - seconds));
    return formula;
  };

  useEffect(() => {
    setSecondsLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (end) {
      setScore(calculateScore());
    }
  }, [end]);

  useEffect(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBorderColor({ r, g, b });
  }, [started]);

  return (
    <>
      <TimerContext.Provider value={{ secondsLeft, setSecondsLeft, setEnd }}>
        {!end ? (
          <div className="App">
            <h1 className="text-4xl text-center mb-3">
              {!started ? "Hex!" : "Match border color!"}
            </h1>
            <div
              className={`App border-8 p-16`}
              style={
                started
                  ? {
                      borderColor: `rgb(${borderColor.r},${borderColor.g},${borderColor.b})`,
                    }
                  : {
                      borderColor: `rgb(226,232,240)`,
                    }
              }
            >
              <Form
                setStarted={setStarted}
                name={name}
                setName={setName}
                seconds={seconds}
                setSeconds={setSeconds}
              />
              {started && (
                <Picker
                  sketchPickerColor={sketchPickerColor}
                  setSketchPickerColor={setSketchPickerColor}
                  setEnd={setEnd}
                  seconds={seconds}
                  setSecondsLeft={setSecondsLeft}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="App">
            <h1 className="text-2xl text-center mb-3">Game Over</h1>
            <h2 className="text-2xl text-center mb-3">Your Score: {score}</h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setStarted(false);
                setEnd(false);
                setSeconds("");
                setSecondsLeft("");
                setScore("");
              }}
            >
              Play Again
            </button>
          </div>
        )}
      </TimerContext.Provider>
    </>
  );
}

export default App;
