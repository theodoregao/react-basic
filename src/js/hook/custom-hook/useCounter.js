import { useState } from "react";

function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, increase, decrease, reset];
}

export default useCounter;
