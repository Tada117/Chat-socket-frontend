import jwtDecode from "jwt-decode";
import { userConstants } from "../constants";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  const decodedToken = jwtDecode(user.token);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("user");
  } else {
    initialState.user = decodedToken;
    initialState.isLoggedIn = true;
  }
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
