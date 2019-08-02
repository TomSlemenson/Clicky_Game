import React from "react";
import "./score.css";

const score = props => {
    return (
        <div>
            <p><span>Your score: {props.counter}</span><span>Top Score: {props.topScore}</span></p>
        </div>
    )
}

export default score;

