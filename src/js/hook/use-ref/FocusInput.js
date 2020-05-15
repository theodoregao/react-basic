import React, { useRef, useEffect } from "react";

function FocusInput(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input ref={inputRef} type="text" />
      </div>

      <div>
        <input type="text" />
      </div>
    </div>
  );
}

export default FocusInput;
