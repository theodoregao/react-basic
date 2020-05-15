import React from "react";

const RefChild = React.forwardRef((pros, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default RefChild;
