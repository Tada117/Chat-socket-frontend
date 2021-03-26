import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare, loggerMiddleware)
);

export default store;
