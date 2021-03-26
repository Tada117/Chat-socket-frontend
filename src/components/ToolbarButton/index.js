import React from "react";

import { logout } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ToolbarButton.css";

export default function ToolbarButton(props) {
  const { icon, onLogOutClick } = props;

  return <i className={`toolbar-button ${icon}`} onClick={onLogOutClick} />;
}
