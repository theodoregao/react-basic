import React from "react";

function Title({ children }) {
  console.log("Rendering Title");
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
}

export default React.memo(Title);
