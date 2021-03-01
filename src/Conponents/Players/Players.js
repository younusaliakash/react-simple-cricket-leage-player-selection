import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faCoffee, faMedal } from '@fortawesome/free-solid-svg-icons'


const Players = (props) => {
    const {name, rank, flag, picture ,role, salary} = props.player
    const handleSelectClick = props.handleSelectClick
    return (
        <div className="player-info">
            <div className="col">
                <div className="card">
                    <img src={picture} className="card-img-top player-picture" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <img src={flag} className="country" alt=""/>
                        <p className="card-text"> 
                            <FontAwesomeIcon icon={faMedal} />
                             Ranking : {rank}
                         </p>
                        <p>Role: {role}</p>
                        <p>Monthly Salary: ${salary}</p>
                        <button className="btn btn-info" onClick={() => handleSelectClick(props.player)}>
                             <FontAwesomeIcon icon={faCheckDouble} /> Select Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;