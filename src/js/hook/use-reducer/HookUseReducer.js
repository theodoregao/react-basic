import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function HookUseReducer() {
  const [count, dispach] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>count - {count}</div>
      <button onClick={() => dispach("increase")}>Increase</button>
      <button onClick={() => dispach("decrease")}>Decrease</button>
      <button onClick={() => dispach("reset")}>Reset</button>
    </div>
  );
}

export default HookUseReducer;
