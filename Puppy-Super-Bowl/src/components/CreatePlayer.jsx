import { useState } from "react";
import { useAddPlayerMutation } from "../api/api";

export default function CreatePlayer() {
  const [playerName, setPlayerName] = useState("");
  const [playerBreed, setPlayerBreed] = useState("");
  const [playerImg, setPlayerImg] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [addPlayer] = useAddPlayerMutation();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (playerName === "" || playerBreed === "" || playerImg === "") {
        setError("Please complete all information before submitting.");
        setMessage("");
        return;
      }
      // clears error if error was previously showing
      setError(null);

      addPlayer({
        name: playerName,
        breed: playerBreed,
        imageUrl: playerImg,
      });
    } catch (err) {
      setError(err);
    }

    // reset form
    setPlayerName("");
    setPlayerBreed("");
    setPlayerImg("");

    setMessage(
        "Player has been submitted! Please review the All Players tab to view your furry friend."
    );
  };

  return (
    <div>
      <h2 id="createTitle">Create Player Form</h2>
      {error && <p className="createP">{error}</p>}
      {message && <p className="createP">{message}</p>}

      <form className="createForm" onSubmit={handleSubmit}>
        <label>
          Player Name:
          <input
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
          />
        </label>

        <label>
          Player Breed:
          <input
            value={playerBreed}
            onChange={(event) => setPlayerBreed(event.target.value)}
          />
        </label>

        <label>
          Image of Player:
          <input
            value={playerImg}
            onChange={(event) => setPlayerImg(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
