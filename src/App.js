/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Email from "./Email";
import Name from "./Name";

class App extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form
        css={css`
          width: 800px;
          margin: 20px auto;
          border: 2px solid gray;
          padding: 20px 30px;
          text-align: center;

          button {
            width: 80px;
            align-items: center;
            padding: 10px 15px;
            border-radius: 5px;
            margin-top: 25px;
            background: #cdcdf0b0;
          }
        `}
      >
        <h1>Registration form</h1>
        <Email
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
        />
        <Name
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          handleChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
