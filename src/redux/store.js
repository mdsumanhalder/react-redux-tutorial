import { createStore, combineReducers, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const rootReducers = combineReducers({
  users: userReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
// console.log(store.getState());
