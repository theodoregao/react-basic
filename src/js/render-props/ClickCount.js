import React, { Component } from "react";

class ClickCount extends Component {
  render() {
    const { count, increaseCount } = this.props;
    return (
      <div>
        <button onClick={increaseCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCount;
