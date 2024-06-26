export default function TimerChallenge({ title, targeTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targeTime} second{targeTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start challenge</button>
      </p>
      <p className=""></p>
      Time is Running .... / Timer inactive
    </section>
  );
}
