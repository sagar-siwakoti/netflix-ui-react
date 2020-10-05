import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import "../styles/Login.css";
import SignUpForm from "../components/SignUp/SignUpForm";
import LoginForm from "../components/Login/LoginForm";

function SignUpPage(props) {
  const [state, setState] = useState(true);
  return (
    <div className="mainLogin__container">
      <div className="header__top">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <SignUpForm
      />
    </div>
  );
}

export default SignUpPage;
