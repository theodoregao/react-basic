import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./js/redux-cake-demo/CakeContainer";
import { store } from "./js/redux-cake-demo/redux/store";
import HooksCakeContainer from "./js/redux-cake-demo/HooksCakeContainer";
import IceCreamContainer from "./js/redux-cake-demo/IceCreamContainer";
import NewCakeContainer from "./js/redux-cake-demo/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
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
        {/* <ClickCount2 name="Shun" /> */}
        {/* <UserProvider value="shun">
        <SimpleText />
      </UserProvider> */}
        {/* <PostList /> */}
        {/* <HookIntervalCounter /> */}
        {/* <UserProvider value="shun">
        <HookUseContext />
      </UserProvider> */}
        {/* <HookUseReducer /> */}
        {/* <HookFetchingUseEffect /> */}
        {/* <HookFetchingUseReducer /> */}
        {/* <UseCallbackDemo /> */}
        {/* <FocusInput /> */}
        {/* <HookTimer /> */}
        {/* <DocTitleOne />
      <DocTitleTwo /> */}
        {/* <CounterOne />
      <CouterTwo /> */}
        {/* <UserForm /> */}

        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
