import { createStore, combineReducers, applyMiddleware } from "redux";

// default import
import logger from "redux-logger";
// To create custom logger
import { createLogger } from "redux-logger";
const customLogger = createLogger();
// create action creatoer
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}
// create reducer
const initialState = {
  numofCakes: 10,
  numofIcecream: 20,
};
// note: we can use multiple reducer into a single reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numofCakes: state.numofIcecream - 1,
      };
    default:
      return state;
  }
};
// create separate reducer
const cakeInitial = {
  initialCakesState: 10,
};
const iceCreamInitial = {
  initialIcecreamState: 20,
};
// note: we can use multiple reducer into a single reducer function
const cakesReducer = (state = cakeInitial, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.initialCakesState - 1,
      };

    default:
      return state;
  }
};
// note: we can use multiple reducer into a single reducer function
const icecreamReducer = (state = iceCreamInitial, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofCakes: state.initialIcecreamState - 1,
      };
    default:
      return state;
  }
};

// to test dispatch
function addTodo(text) {
  return {
    type: "ADD_TODO",
    text,
  };
}
store.dispatch(addTodo("Read the docs"));
store.dispatch(addTodo("Read about the middleware"));
// to test dispatch end
// combine reducers
const rootReducers = combineReducers({
  cakesReducer: cakesReducer,
  icecreamReducer: icecreamReducer,
});
// create store
const store = createStore(rootReducers, applyMiddleware(logger, customLogger));
console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
