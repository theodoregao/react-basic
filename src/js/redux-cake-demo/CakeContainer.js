import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/index";

function CakeContainer(props) {
  return (
    <div>
      <h1>CakeContainer</h1>
      <h2>Cake count : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
