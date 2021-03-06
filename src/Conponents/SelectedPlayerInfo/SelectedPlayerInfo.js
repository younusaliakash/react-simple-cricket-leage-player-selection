import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './SelectedPlayerInfo.css'

const SelectedPlayerInfo = (props) => {
    const {name,role,picture,salary} = props.playerInfo
    return (
        <div>
            <div className="col player-title-card">
                <div>
                    <img src={picture} className="player-img" alt=""/>
                </div>
                <div className="select-mark-logo">
                    <span className="selected-mark">
                        <FontAwesomeIcon icon={faCircle}/>
                    </span>
                </div>
                <div className="player-title">
                    <h6 className="player-name">{name}</h6>
                    <div className="d-flex justify-content-between align-items-center px-2">
                    <p>{role} </p>
                    <p>${salary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayerInfo;