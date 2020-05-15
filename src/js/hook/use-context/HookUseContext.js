import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function HookUseContext(props) {
  const user = useContext(UserContext);
  return <div>{user}</div>;
}

export default HookUseContext;
