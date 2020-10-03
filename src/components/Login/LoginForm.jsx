import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import FBlogo from "../../assets/images/fb-logo.png";
function LoginForm(props) {
  return (
    <div className="form__containerOutside">
      <div className="form__container">
        <form>
          <h1>Sign In</h1>
          <div className="input__container">
            <input className="input__empty" type="email" required />
            <label>Email or Phone Number</label>
          </div>
          <div className="input__container">
            <input className="input__empty" type="password" required />
            <label>Password</label>
          </div>
          <div className="input__container">
            <button type="submit">Sign In</button>
          </div>
          <label className="checkbox__container">
            Remember me
            <input type="checkbox" checked />
            <span className="checkmark"></span>
          </label>
          <Link to="/" className="need__help">
            Need Help?
          </Link>
          <div className="buttom__form">
            <img src={FBlogo} alt="fblogo" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
