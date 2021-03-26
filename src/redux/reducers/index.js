import { combineReducers } from "redux";
import authentication from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  authentication: authentication,
  registration: registration,
  alert,
});
export default rootReducer;
