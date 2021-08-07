import React, { useState } from 'react';
import './App.css';

export default function App() {
<<<<<<< HEAD
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
=======
  const [timeLeft, setTimeleft] = useState(25*60)
  return (
    <div className="app">
      <h2>Pomodoro!</h2>

      <div className="timer">
        <span>00</span>
        <span>:</span>
        <span>00</span>
>>>>>>> 9af988e3359b0074a45056681239d4a537bc8c60
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
