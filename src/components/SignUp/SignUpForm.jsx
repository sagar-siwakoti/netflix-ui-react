import React, { useState } from "react";
import "../Login/LoginForm";
import { Link } from "react-router-dom";
import FBlogo from "../../assets/images/fb-logo.png";

const regexp = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

function SignUpForm(props) {
  const [state, setState] = useState({
    email: "",
    username:"",
    password: "",
    emailError: "",
    passwordError: "",
    checked: true,
  });
  const handleEmailChange = (e) => {
    setState({
      email: e.target.value,
    });
  };
  const handleUsernameChange = (e) => {
      setState({
        username: e.target.value,
      });
    };
  const handlePasswordChange = (e) => {
    setState({
      password: e.target.value,
    });
  };

  const validate = () => {
    let inputErrors = false;
    const errors = {
      emailError: "",
      passwordError: "",
    };
    if (!state.email) {
      inputErrors = true;
      errors.emailError = "Please enter a valid email.";
    } else if (!state.email.match(regexp)) {
      inputErrors = true;
      errors.emailError = (
        <span style={{ color: "red" }}>Your email address must be valid.</span>
      );
    }
    if (state.password.length < 4) {
      inputErrors = true;
      errors.passwordError = "Your password must contain 4 to 860 charcaters";
    }
    setState({
      ...errors,
    });
    return inputErrors;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (!err) {
      setState(state);
    }
  };

  const handlerCheckedBox = (e) => {
    setState({
      checked: e.target.checked,
    });
  };

  return (
    <div className="form__containerOutside">
      <div className="form__container">
        <form>
          <h1>Sign Up</h1>
          <div className="input__container">
            <input
              className=
                 "input__empty"

              value={state.username}
              type="text"
              required
              onChange={handleUsernameChange}
            />
            <label>Username</label>
          </div>
          <div className="input__container">
            <input
              className={
                state.emailError ? "input__error input__empty" : "input__empty"
              }
              value={state.email}
              type="email"
              required
              onChange={handleEmailChange}
            />
            <label>Email or Phone Number</label>
            <span style={{ color: "#db7302" }}>{state.emailError}</span>
          </div>
          <div className="input__container">
            <input
              value={state.password}
              className={
                state.passwordError
                  ? "input__error input__empty"
                  : "input__empty"
              }
              type="password"
              required
              onChange={handlePasswordChange}
            />
            <label>Password</label>
            <span style={{ color: "#db7302" }}>{state.passwordError}</span>
          </div>
          <div className="input__container">
            <button type="submit" onClick={(e) => onSubmit(e)}>
              Sign Up
            </button>
          </div>
          <label className="checkbox__container">
            Remember me
            <input
              type="checkbox"
              defaultChecked={state.checked}
              onChange={handlerCheckedBox}
            />
            <span className="checkmark"></span>
          </label>
          <Link to="/" className="need__help">
            Need Help?
          </Link>
          <div className="buttom__form">
            <img src={FBlogo} alt="fblogo" />
            <Link to="/" className="login__fb">
              Login with Facebook
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
