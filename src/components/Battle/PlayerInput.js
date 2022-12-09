import { useState } from "react";

const PlayerInput = (props) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(props.id, userName);
  };

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label htmlFor={props.id} className="header">
        {props.label}
      </label>
      <input
        id={props.id}
        type="text"
        placeholder="Github Username"
        autoComplete="off"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className="button" disabled={!userName} type="submit">
        Submit
      </button>
    </form>
  );
};

export default PlayerInput;
