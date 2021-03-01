import React from 'react';
import './SelectedPlayers.css'
import SelectedPlayerInfo from '../SelectedPlayerInfo/SelectedPlayerInfo'

const SelectedPlayers = (props) => {
    const team = props.team
    const totalSalary = team.reduce((total, player) => 
    total + player.salary,0)
    return (
        <div>
            <h6 className="league-event">Selected XI Summary</h6>
            <table>
                <tbody>
                    <tr>
                        <td className="counter">Players :</td>
                        <td>{team.length}</td>
                    </tr>
                    <tr>
                        <td className="counter">Total Salary :</td>
                        <td>${totalSalary}</td>
                    </tr>
                </tbody>
            </table>
            <div className="display-team-player">
                {
                    team.map(player => <SelectedPlayerInfo playerInfo={player}></SelectedPlayerInfo>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;