import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const count = this.state.count;
    return (
      <div>{this.props.children(this.state.count, this.increaseCount)}</div>
    );
  }
}

export default Counter;
