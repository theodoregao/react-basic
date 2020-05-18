import React, { Component } from "react";

class Title extends Component {
  render() {
    const title_style = {
      display: "flex",
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "16px",
      fontFamily: "Arial",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <div>
        <div style={title_style}>
          <h1>拉拉网</h1>
        </div>
        <div style={title_style}>
          <h2>正在建设中</h2>
        </div>
      </div>
    );
  }
}

export default Title;
