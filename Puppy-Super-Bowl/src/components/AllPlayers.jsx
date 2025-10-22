import { useState } from "react";
import SearchBar from "./SearchBar";
import { useGetPlayersQuery } from "../api/api";

export default function AllPlayers({ setSelectedPlayerId }) {
  const [searchParam, setSearchParam] = useState("");
  const { data, error, isLoading } = useGetPlayersQuery();
  let playerList = data?.data?.players;

  let message;

  if (isLoading) {
    message = 'Loading...';
  }
  if (error) {
    message = 'Oh no! There is an error';
  }

  let playersToDisplay =
    searchParam && playerList
      ? playerList.filter((player) =>
          player.name.toLowerCase().includes(searchParam.toLowerCase())
        )
      : playerList;


  return (
    <div>
      <h2>All Players</h2>
      <SearchBar searchParam={searchParam} setSearchParam={setSearchParam} />
      {isLoading && <p>{message}</p>}
      {error && <p>{message}</p>}
      <div className="playersContainer">
        {playersToDisplay&&
          playersToDisplay.map((player) => (
            <div className="playersCard" key={player.id}>
              <img src={player.imageUrl} alt={player.name} />

              <h3>{player.name}</h3>
              <h4># {player.id} </h4>
              <button onClick={() => setSelectedPlayerId(player.id)}>
                See Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
