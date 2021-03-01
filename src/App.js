import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersData from "./data/playersData.json";
import { useEffect, useState } from "react";
import Players from "./Conponents/Players/Players";
import SelectedPlayers from "./Conponents/SelectedPlayers/SelectedPlayers";

function App() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([])

  const handleSelectClick = (player) =>{
    const newTeam = [...team, player];
    setTeam(newTeam)
  }

  useEffect(() => {
    setPlayers(PlayersData);
  }, []);
  return (
    <div className="App">
      <h1 className="league-title">Hero Premier League</h1>
      <h2 className="team-name">Lion Super King</h2>
      <h5 className="league-event">Player Draft and Selection : Total Players : {players.length}</h5>
      <div className="players-draft row">
        <div className="col-md-10 players">
          {
            players.map(player => <Players handleSelectClick={handleSelectClick} player={player} key={player.id}></Players>)
          }
        </div>
        <div className="col-md-2">
          <SelectedPlayers team={team}></SelectedPlayers>
        </div>
      </div>
    </div>
  );
}

export default App;
