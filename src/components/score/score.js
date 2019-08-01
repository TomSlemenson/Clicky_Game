import React from "react";
import "./score.css";

const score = props => {
    return (
        <div>
            <p>Your score: {props.counter}</p>
        </div>
    )
}

export default score;

