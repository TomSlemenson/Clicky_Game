import React from "react";
import "./card.css";
import ScrollAnimation from 'react-animate-on-scroll';

function card(props) {
  return (
    <ScrollAnimation animateIn='flipInX' animateOnce="true"> 
    <div onClick={() => props.cardClicked(props.id, props.name)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    </ScrollAnimation>   
  );
}

export default card;
