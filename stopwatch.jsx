import React, { useState, useEffect, useRef } from "react";
//import "./styles.css";

export default function App() {
  const [starts, setStarts] = useState(false);
  const [hours, setHours] = useState(0);
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const timeRef = useRef();

  // functions
  useEffect(() => {
    if (starts) {
      timeRef.current = setTimeout(() => {
        if (mins === 59 && secs === 59) {
          setHours((hours) => hours + 1);
          setMins(0);
          setSecs(0);
        } else if (secs === 59) {
          setMins((mins) => mins + 1);
          setSecs(0);
        } else {
          setSecs((secs) => secs + 1);
        }
      }, 1000);
    }
  }, [secs, mins, starts]);

  // const timer = () => {
  //   if(secs>59){
  //     setMins(mins+1);
  //     setSecs(0);
  //   }
  //   if (secs>0 && secs<59){
  //   setSecs( secs=>secs + 1);
  //   }
  // };

  const start = () => {
    setStarts(true);
    // timeRef.current = setInterval(timer, 1000);
  };

  const pause = () => {
    setStarts(false);
    clearInterval(timeRef.current);
  };

  const reset = () => {
    setStarts(false);
    clearInterval(timeRef.current);
    setHours(0);
    setSecs(0);
    setMins(0);
  };

  return (
    <div className="App">
      <h1>
        Stopwatch{" "}
        <span role="img" aria-label="stopwatch">
          ⏱️
        </span>
      </h1>
      <h2>
        {hours < 10 ? `0${hours}` : hours}:{mins < 10 ? `0${mins}` : mins}:
        {secs < 10 ? `0${secs}` : secs}
      </h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
