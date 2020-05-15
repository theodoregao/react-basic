import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePositon = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect caled");
    window.addEventListener("mousemove", logMousePositon);
    return () => {
      console.log("Component removed");
      window.removeEventListener("mousemove", logMousePositon);
    };
  }, []);

  return (
    <div>
      Hooks x - {x}, y - {y}
    </div>
  );
}

export default HookMouse;
