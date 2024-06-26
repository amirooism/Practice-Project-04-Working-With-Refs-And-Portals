import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChanllenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targeTime={1} />
        <TimerChallenge title="Not easy" targeTime={5} />
        <TimerChallenge title="Getting tough" targeTime={10} />
        <TimerChallenge title="Pros Only" targeTime={15} />
      </div>
    </>
  );
}

export default App;
