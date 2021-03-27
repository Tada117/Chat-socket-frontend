import { APIService } from "../../service/APIService";
import { alertActions } from ".";
import { userConstants } from "../constants";
import { history } from "../helpers";

const api = APIService.getInstance();

export const userActions = {
  login,
  logout,
  register,
};

function login(user) {
  return (dispatch) => {
    dispatch(request(user.username));
    api.login(user).then(
      (user) => {
        dispatch(success(user));
        // dispatch(alertActions.success("Đăng Nhập Thành Công"));
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/");
        window.location.reload();
        // return Promise.resolve();
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        // return Promise.reject();
      }
    );
  };
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
function logout() {
  localStorage.removeItem("user");
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    api.register(user).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
