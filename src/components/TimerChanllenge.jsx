import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targeTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeremaining] = useState(targeTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targeTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setTimeremaining(targeTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeremaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>

        <ResultModal
          ref={dialog}
          targetTime={targeTime}
          remainingTime={timeRemaining}
          onReset={handleReset}
        />

        <p className="challenge-time">
          {targeTime} second{targeTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
