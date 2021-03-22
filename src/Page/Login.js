import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/user.action";
import { useHistory } from "react-router-dom";

import "./_login.scss";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState("false");
  const { username, password } = inputs;

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted("true");
    if (username && password) {
      dispatch(login(username, password))
        .then(() => {
          history.push({ pathname: "/" });
        })
        .catch(() => {
          setSubmitted("false");
          // openNotificationWithIcon("error");
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  return (
    <div className="form-container">
      <div className="form-title">Login</div>
      <form onSubmit={handleLogin} className="form-group">
        <input
          type="text"
          placeholder="Enter Username"
          className="input-field"
          name="username"
          value={username}
          submitted={submitted}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
          name="password"
          value={password}
          submitted={submitted}
          onChange={handleChange}
        />
        <button className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
