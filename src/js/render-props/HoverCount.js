import React, { Component } from "react";

class HoverCount extends Component {
  render() {
    const { count, increaseCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={increaseCount}>Clicked {count} times</h2>
      </div>
    );
  }
}

export default HoverCount;
