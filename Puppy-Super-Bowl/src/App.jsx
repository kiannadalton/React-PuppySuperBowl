import "./App.css";
import { Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllPlayers from "./components/AllPlayers";
import CreatePlayer from "./components/CreatePlayer";
import Information from "./components/Information";

function App() {
  return (
    <>
      <Navbar />

      <h1>Puppy Super Bowl</h1>
      {/* <AllPlayers setSelectedPlayerId={setSelectedPlayerId} /> */}
      {/* <Information /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createplayer" element={<CreatePlayer />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </>
  );
}

export default App;
