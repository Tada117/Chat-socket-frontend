import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions";
import { useHistory } from "react-router-dom";
import "./_login.scss";

import { notification } from "antd";
import "antd/dist/antd.css";

import bg1 from "../assets/cool-background2.png";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const alert = useSelector((state) => state.alert);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    gender: null,
  });

  const [submitted, setSubmitted] = useState("false");
  const { username, password, gender } = inputs;

  const openNotificationWithIcon = (type, error) => {
    notification[type]({
      message: error || "Không thành công",
      // description: "Bạn vui lòng thử lại",
    });
  };

  const handleRegister = (e) => {
    let result = true;
    if (inputs.username === "" || inputs.password === "" || gender == null) {
      e.preventDefault();
      openNotificationWithIcon("warning", "Yêu cầu nhập đầy đủ thông tin");
      result = false;
    }
    if (result) {
      e.preventDefault();
      setSubmitted("true");
      if (username && password) {
        dispatch(userActions.register(inputs));
        if (alert.message) {
          openNotificationWithIcon(alert.type, alert.message);
        }
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
        <form onSubmit={handleRegister} className="form-group">
          <div className="form-title">Register</div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Username"
              className="input-field"
              name="username"
              value={username}
              submitted={submitted}
              onChange={handleChange}
            />
            <span class="focus-border"></span>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
              name="password"
              value={password}
              submitted={submitted}
              onChange={handleChange}
            />
            <span class="focus-border"></span>
          </div>
          <select
            name="gender"
            id="gender"
            className="select-gender"
            onChange={handleChange}
          >
            <option disabled selected hidden>
              Select Gender
            </option>
            <option value="1">Nam</option>
            <option value="0">Nữ</option>
          </select>

          <button className="submit-btn">Register</button>
        </form>
      </div>
      <div className="form-right">
        {" "}
        <img src={bg1} alt="" />
      </div>
    </div>
  );
}

export default Register;
