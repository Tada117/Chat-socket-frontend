import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { notification } from "antd";
import "antd/dist/antd.css";

import { userActions } from "../redux/actions";

import "./_login.scss";
import bg1 from "../assets/cool-background2.png";
import fbLogo from "../assets/images/fb-logo.svg";
import ggLogo from "../assets/images/google-logo.svg";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useSelector((state) => state.alert);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState("false");
  const { username, password } = inputs;

  // useEffect(() => {
  //   dispatch(userActions.logout());
  // }, []);

  const openNotificationWithIcon = (type, error) => {
    notification[type]({
      message: error || "Không thành công",
      description: "Bạn vui lòng thử lại",
    });
  };

  const handleLogin = (e) => {
    let result = true;
    if (inputs.username === "" || inputs.password === "") {
      e.preventDefault();
      openNotificationWithIcon("warning", "Yêu cầu nhập đầy đủ thông tin");
      result = false;
    }
    if (result) {
      e.preventDefault();
      setSubmitted("true");
      if (username && password) {
        dispatch(userActions.login(inputs));
      }
      if (alert.message) {
        openNotificationWithIcon(alert.type, alert.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  return (
    <div className="form-container">
      <div className="form-left">
        <form onSubmit={handleLogin} className="form-group">
          <div className="form-title">Login</div>
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
          <div>
            Not registered?{" "}
            <Link
              className="register"
              to={{
                pathname: "/register",
              }}
            >
              Register Now
            </Link>{" "}
          </div>
        </form>
        <hr className="separator" data-content="Or Login With" />
        <div className="login-options">
          <img src={fbLogo} alt="" />
          <img src={ggLogo} alt="" />
        </div>
      </div>
      <div
        className="form-right"
        // style={{ backgroundImage: `url(${bg1})` }}
      >
        <img src={bg1} alt="" />
      </div>
    </div>
  );
}

export default Login;
