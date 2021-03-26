import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions";
import { useHistory } from "react-router-dom";
import "./_login.scss";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    gender: null,
  });

  const [submitted, setSubmitted] = useState("false");
  const { username, password, gender } = inputs;

  const handleRegister = (e) => {
    e.preventDefault();
    setSubmitted("true");
    if (username && password) {
      dispatch(userActions.register(inputs));
      // .then(() => {
      //   history.push({ pathname: "/login" });
      // })
      // .catch(() => {
      //   setSubmitted("false");
      //   // openNotificationWithIcon("error");
      // });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  return (
    <div className="form-container">
      <div className="form-title">Register</div>
      <form onSubmit={handleRegister} className="form-group">
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
  );
}

export default Register;
