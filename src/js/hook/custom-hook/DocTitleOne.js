import React, { useState } from "react";
import useDocumentTitleHook from "./useDocumentTitleHook";

function DocTitleOne(props) {
  const [count, setCount] = useState(0);

  useDocumentTitleHook(count);

  return (
    <div>
      Count - {count}
      <button onClick={() => setCount(count + 1)}>Incrase</button>
    </div>
  );
}

export default DocTitleOne;
