import React, { Component, useState } from "react";
import HockMouse from "./HockMouse";

function HookMouseContainer() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle visibility</button>
      {show && <HockMouse />}
    </div>
  );
}

export default HookMouseContainer;
