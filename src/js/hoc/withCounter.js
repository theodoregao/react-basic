import React from "react";

const withCounter = (WrappedComponent, increaseNum) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super();
      this.state = {
        count: 0,
      };
    }

    increaseCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + increaseNum };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
