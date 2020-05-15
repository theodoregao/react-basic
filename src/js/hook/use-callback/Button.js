import React from "react";

function Button({ onClickHander, children }) {
  console.log(`Rendering ${children} button`);
  return (
    <div>
      <button onClick={onClickHander}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
