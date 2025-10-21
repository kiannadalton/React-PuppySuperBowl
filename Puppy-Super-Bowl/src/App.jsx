import "./App.css";
// components
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import CreatePlayer from "./components/CreatePlayer";
import Information from "./components/Information";

function App() {
  return (
    <>
      <h1>Puppy Super Bowl</h1>
      <CreatePlayer />
      <SinglePlayer />
      <AllPlayers />
      <Information />
    </>
  );
}

export default App;
