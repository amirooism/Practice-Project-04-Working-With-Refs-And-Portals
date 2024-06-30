import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targeTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targeTime * 1000);
    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>

        <ResultModal ref={dialog} targetTime={targeTime} result={"lost"} />

        <p className="challenge-time">
          {targeTime} second{targeTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
