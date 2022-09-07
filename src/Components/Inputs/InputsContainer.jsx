import React from "react";
import InputName from "./InputName";
import "./InputsContainer.css";

const InputsContainer = (props) => {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  return (
    <div className="inputs-container">
      <InputName onSaveUserData={saveUserDataHandler}/>
    </div>
  );
};

export default InputsContainer;
