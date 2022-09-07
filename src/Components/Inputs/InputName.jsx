import React, { useState } from "react";
import "./InputName.css";
import Swal from "sweetalert2";

const InputName = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const [enteredAge, setEnteredAge] = useState("");
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      user: enteredUser,
      age: enteredAge,
    };
    if (userData.user !== "") {
      if (userData.age > 0 && userData.age < 80) {
        props.onSaveUserData(userData);
        setEnteredUser("");
        setEnteredAge("");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Please, insert a valid age (> 0).",
          icon: "warning",
          confirmButtonText: "Accept",
          allowOutsideClick: false,
          showCloseButton: true,
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please, insert a valid username(non-empty values).",
        icon: "warning",
        confirmButtonText: "Accept",
        allowOutsideClick: false,
        showCloseButton: true,
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="label-div">
        <label>Username</label>
        <input type="text" value={enteredUser} onChange={userChangeHandler} />
      </div>
      <div className="label-div">
        <label>Age (Years)</label>
        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
      </div>
      <div>
        <button className="submit-button" type="submit">
          Add User
        </button>
      </div>
    </form>
  );
};

export default InputName;
