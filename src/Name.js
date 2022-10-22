/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const Name = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstNameDirty, setFirstNamelDirty] = useState(false);
  const [lastnameDirty, setLastnameDirty] = useState(false);
  const [firstNameError, setFirstNameError] = useState("Обязательное поле");
  const [lastnameError, setLastnameError] = useState("Обязательное поле");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (firstNameError || lastnameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [firstNameError, lastnameError]);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);

    if (!/^[A-Z a-z]{2,}$/.test(e.target.firstName)) {
      setFirstNameError("Некорректное имя");
    } else {
      setFirstNameError("");
    }
  };

  const lastnameHandler = (e) => {
    setLastname(e.target.value);

    if (!/^[A-Z a-z]{2,}$/.test(e.target.lastName)) {
      setLastnameError("Некорректная фамилия");
    } else {
      setLastnameError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstNamelDirty(true);
        break;
      case "lastname":
        setLastnameDirty(true);
        break;
    }
  };

  return (
    <div
      css={css`
        text-align: center;
        input {
          width: 150px;
          min-height: 30px;
          border-radius: 5px;
          margin: 10px 15px;
          padding: 5px 15px;
        }
      `}
    >
      {firstNameDirty && firstNameError && (
        <div style={{ color: "red" }}>{firstNameError}</div>
      )}
      <input
        name="firstName"
        type="text"
        value={firstName}
        onChange={firstNameHandler}
        placeholder="Enter your name"
        onBlur={(e) => blurHandler(e)}
      />

      {lastnameDirty && lastnameError && (
        <div style={{ color: "red" }}>{lastnameError}</div>
      )}
      <input
        name="lastname"
        type="text"
        value={lastname}
        onChange={lastnameHandler}
        placeholder="Enter your surname"
        onBlur={(e) => blurHandler(e)}
      />
    </div>
  );
};

export default Name;
