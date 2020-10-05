import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import "../styles/Login.css";
import LoginForm from "../components/Login/LoginForm";
function Login() {
  const [state, setState] = useState(true);
  return (
    <div className="mainLogin__container">
      <div className="header__top">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
