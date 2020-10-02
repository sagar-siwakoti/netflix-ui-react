import React from "react";
import logo from "../../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";
import styled from "styled-components"
function Header(props) {
  return (
    <div className="header__container">
      <div className="header__top">
        <img src={logo} alt="Logo" />
        <NavLink to="/" className="signIn__btn">
          Sign In
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
