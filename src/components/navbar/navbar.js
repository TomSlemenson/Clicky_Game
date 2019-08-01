import React from "react";
import "../navbar/navbar.css";


const navbar = props => {
  return (
    <div className="logo jumbotron text-center">
      <h1 className="logo">THE CLICKY GAME</h1>
      <small>Click on one of the cartoons to increase your score, but careful, don't click on the same </small><br></br>
      <small>one because you will lose the game. You win when you score 12 points. Good luck!!!</small>
    </div>
  );
}

export default navbar;
