import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./js/Parent";
import RefParent from "./js/RefParent";
import ClickCount from "./js/ClickCount";
import HoverCount from "./js/HoverCount";
import Counter from "./js/Counter";
import ClickCount2 from "./js/hoc/ClickCount2";
import { UserProvider } from "./js/components/UserContext";
import SimpleText from "./js/SimpleText";
import PostList from "./js/components/PostList";

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
