import "./App.css";
// components
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import CreatePlayer from "./components/CreatePlayer";

function App() {
  return (
    <>
      <h1>Puppy Super Bowl</h1>
      <CreatePlayer />
      <SinglePlayer />
      <AllPlayers />
    </>
  );
}

export default App;
