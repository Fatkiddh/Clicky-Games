import React from "react";
import "./characterCard.css";

const CharacterCard = props => (

    <div className="card">
          <div className="img-container" onClick={() => props.clickedCard(props.id)}>
            <img alt={props.name} src={props.image} />
          </div>
    </div>
)

export default CharacterCard;
