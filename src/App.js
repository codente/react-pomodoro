import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [timeLeft, setTimeleft] = useState(25 * 60)

  const minutes = Math.floor(timeLeft / 60)
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, '0')



  return (
    <div className="app">
      <h2>Pomodoro!</h2>
      <h3>This is a test</h3>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
