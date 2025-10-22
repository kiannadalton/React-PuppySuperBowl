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
    $details = <p>Click See Details on a Player to see more information.</p>;
  } else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  } else {
    $details = (
      <div className="playersCard" key={player.id}>
        <img src={player.imageUrl} alt={player.name} />
        <h3>{player.name}</h3>
        <h4>Player # {player.id} </h4>
        <h4>
          Team # {player.teamId === null ? "None at this time" : player.teamId}
        </h4>
        <h4>Breed: {player.breed}</h4>
        <h4>Status: {player.status}</h4>
        <button onClick={() => removePlayer(player.id)}>Delete Player</button>
        <button onClick={() => setSelectedPlayerId()}>Close</button>
      </div>
    );
  }

  return (
    <div className="singlePlayerContainer">
      {$details}
    </div>
  );
}
