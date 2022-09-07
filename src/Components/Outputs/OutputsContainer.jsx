import React from "react";
import Outputs from "./Outputs";
import "./OutputsContainer.css";

const OutputsContainer = ({ users }) => {
  return (
    <div className="outputs-container">
      {users.map((e) => (
        <Outputs key={e.id} user={e.user} age={e.age}/>
      ))}
    </div>
  );
};

export default OutputsContainer;
