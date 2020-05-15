import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./js/data-communicate/Parent";
import RefParent from "./js/foward-ref/RefParent";
import ClickCount from "./js/render-props/ClickCount";
import HoverCount from "./js/render-props/HoverCount";
import Counter from "./js/render-props/Counter";
import ClickCount2 from "./js/hoc/ClickCount2";
import { UserProvider } from "./js/context/UserContext";
import SimpleText from "./js/context/SimpleText";
import PostList from "./js/context/PostList";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}

      {/* <RefParent /> */}

      {/* <Counter>
        {(count, increaseCount) => (
          <ClickCount count={count} increaseCount={increaseCount} />
        )}
      </Counter>
      <Counter>
        {(count, increaseCount) => (
          <HoverCount count={count} increaseCount={increaseCount} />
        )}
      </Counter> */}

      <ClickCount2 name="Shun" />

      {/* <UserProvider value="shun">
        <SimpleText />
      </UserProvider> */}

      {/* <PostList /> */}
    </div>
  );
}

export default App;
