import SearchBar from "./SearchBar";
import { useGetPlayersQuery } from "../api/api";

export default function AllPlayers({ setSelectedPlayerId }) {
  const { data, error, isLoading } = useGetPlayersQuery();
  console.log("players data", data?.data?.players);

  return (
    <div>
      <h2>All Players</h2>
      <SearchBar />
      <div className="playersContainer">
        {data?.data &&
          data?.data?.players.map((player) => (
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
