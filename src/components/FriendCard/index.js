import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="col-3">
      <div className="card">
        <div className="img-container">
          <img alt={props.id} src={props.image} onClick={() => props.guessedFriend(props.id)} className="remove">
          </img> 
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
