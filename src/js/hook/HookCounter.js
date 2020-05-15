import React, { Component, useState, useEffect } from "react";

function HookCounter() {
  const defaultvalue = 0;
  const [count, setCount] = useState(defaultvalue);
  const [name, setName] = useState("");

  const increase5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    console.log("useEffect() - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={() => setCount(defaultvalue)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease
      </button>
      <button onClick={increase5}>Increase 5</button>
      <p />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default HookCounter;
