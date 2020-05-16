import { combineReducers } from "redux";
import cakeReducer from "./cake/reducer";
import iceCreamReducer from "./iceCream/reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
