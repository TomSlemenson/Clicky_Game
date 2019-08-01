import React from "react";
import "./wrapper.css";

const wrapper = props => {
  return <div className="wrapper">{props.children}</div>
}

export default wrapper;
