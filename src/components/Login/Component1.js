import React, { useEffect, useRef, useState } from "react";

function Component1(props) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setSeconds((prevVal) => prevVal + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
  }

  function resetTimer() {
    setSeconds(0);
    clearInterval(intervalRef.current);
  }

  return (
    <div>
      <h1>Timer: {seconds}</h1>
      <button onClick={startTimer} className="btn btn-primary">Start</button>
      <button onClick={stopTimer} className="btn btn-danger ms-2">Stop</button>
      <button onClick={resetTimer} className="btn btn-warning ms-2">Reset</button>
    </div>
  );
}
export default Component1;
