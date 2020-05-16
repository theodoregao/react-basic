const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

const initialState = {
  numOfCakes: 10,
};

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

const reducer = (state = initialState, action) => {
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

function basicReduxWorkFlow() {
  const store = createStore(reducer);
  console.log("Initial state", store.getState());
  const unsubscribeStore = store.subscribe(() =>
    console.log("Updated state", store.getState())
  );
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  unsubscribeStore();
}

export default basicReduxWorkFlow;
