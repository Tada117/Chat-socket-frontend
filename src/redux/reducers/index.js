import { combineReducers } from "redux";
import authentication from "./authentication.reducer";

const rootReducer = combineReducers({
  authentication: authentication,
});
export default rootReducer;
