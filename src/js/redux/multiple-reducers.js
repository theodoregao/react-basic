const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 10,
};

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
  };
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

function multipleReducers() {
  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  });
  const store = createStore(rootReducer);
  console.log("Initial state", store.getState());
  const unsubscribeStore = store.subscribe(() =>
    console.log("Updated state", store.getState())
  );
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  unsubscribeStore();
}

export default multipleReducers;
