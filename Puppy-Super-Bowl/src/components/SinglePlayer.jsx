import { useGetSinglePlayerQuery, useDeletePlayerMutation } from "../api/api";

export default function SinglePlayer({
  selectedPlayerId,
  setSelectedPlayerId,
}) {
  const { data, error, isLoading } = useGetSinglePlayerQuery({
    id: selectedPlayerId,
  });
  const [deletePlayer] = useDeletePlayerMutation();

  function removePlayer(id) {
    // sends id to useDeletePlayerMutation
    deletePlayer({ id });
    //resets selectedPlayerId
    setSelectedPlayerId();
  }

  let player = data?.data?.player;
  let $details;

  if (!selectedPlayerId) {
    $details = <p>Please select a player</p>;
  } else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  } else {
    $details = (
      <div className="playersCard" key={player.id}>
        <img src={player.imageUrl} alt={player.name} />

        <h3>{player.name}</h3>
        <h4>Player # {player.id} </h4>
        <p>
          Team # {player.teamId === null ? "None at this time" : player.teamId}
        </p>

        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
        <button onClick={() => removePlayer(player.id)}>Delete Player</button>
        <button onClick={() => setSelectedPlayerId()}>
          Back to All Players
        </button>
      </div>
    );
  }

  return (
    <div className="singlePlayerContainer">
      <h2>Single Player Card</h2>
      {$details}
    </div>
  );
}
