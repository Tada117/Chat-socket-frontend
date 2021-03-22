import { APIService } from "../../service/APIService";

const api = APIService.getInstance();

export const login = (username, password) => (dispatch) => {
  return api.login({ username, password }).then((data) => {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user: data },
    });

    return Promise.resolve();
  });
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("user");

  dispatch({ type: "LOGOUT" });
};
