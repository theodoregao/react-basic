import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "./redux/index";

function IceCreamContainer(props) {
  return (
    <div>
      <h1>IceCreamContainer</h1>
      <h2>Ice cream count : {props.numOfIceCream}</h2>
      <button onClick={props.buyCake}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
