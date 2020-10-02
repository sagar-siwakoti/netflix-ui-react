import React from "react";
import logo from "../../../assets/svg/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Header(props) {
  return (
    <div className="header__container">
      <div className="header__top">
        <img src={logo} alt="Logo" />
        <NavLink to="/" className="signIn__btn">
          Sign In
        </NavLink>
      </div>
      {/*Header content*/}
      <div className="header__content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Link className="header__contentBtn">try it now<ArrowForwardIosIcon/></Link>
      </div>
    </div>
  );
}

export default Header;
