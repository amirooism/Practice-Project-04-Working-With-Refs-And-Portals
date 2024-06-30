import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targeTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result}</h2>
      <p>
        The target time was <strong>{targeTime} seconds</strong>
      </p>
      <p>
        You Stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
