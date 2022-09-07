import React, { useState } from "react";
import "./App.css";
import InputsContainer from "./Components/Inputs/InputsContainer";
import OutputsContainer from "./Components/Outputs/OutputsContainer";

const App = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="main-div">
      <InputsContainer onAddUser={addUserHandler} />
      <OutputsContainer users={users} />
    </div>
  );
};

export default App;
