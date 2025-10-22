import "./App.css";
import { useState } from "react";
// components
import Navbar from "./components/Navbar";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import CreatePlayer from "./components/CreatePlayer";
import Information from "./components/Information";

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState();

  return (
    <>
      <h1>Puppy Super Bowl</h1>
      <Navbar />
      <CreatePlayer />
      <SinglePlayer
        selectedPlayerId={selectedPlayerId}
        setSelectedPlayerId={setSelectedPlayerId}
      />
      <AllPlayers setSelectedPlayerId={setSelectedPlayerId} />
      <Information />
    </>
  );
}

export default App;
