import React, { Component } from "react";
import { UserConsumer } from "./components/UserContext";

class SimpleText extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return <h2>My name is {name}</h2>;
        }}
      </UserConsumer>
    );
  }
}

export default SimpleText;
