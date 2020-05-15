import React from "react";
import useCounter from "./useCounter";

function CouterTwo(props) {
  const [count, increase, decrease, reset] = useCounter(100, 10);

  return (
    <div>
      <div>Count : {count}</div>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default CouterTwo;
