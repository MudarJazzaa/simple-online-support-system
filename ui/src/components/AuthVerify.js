import React from "react";
import { withRouter } from "react-router-dom";
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
const AuthVerify = (props) => {
  props.history.listen(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
      const decodedJwt = parseJwt(accessToken);
      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });
  return <div></div>;
};
export default withRouter(AuthVerify);
