import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>{timer}</p>
    </div>
  );
};

export default Timer;
