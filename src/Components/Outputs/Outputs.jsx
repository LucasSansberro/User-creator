import React from "react";
import "./Outputs.css";

const Outputs = (props) => {
  return (
    <div className="output-texto-container">
      <h3 className="output-texto">{props.user} ({props.age} years old)</h3>
    </div>
  );
};

export default Outputs;
