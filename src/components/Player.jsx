import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const AroosakZade = useRef();

  function handleButton() {
    setEnteredPlayerName(AroosakZade.current.value)
    AroosakZade.current.value = ' '
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown"}</h2>
      <p>
        <input type="text" ref={AroosakZade} />
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
