import React from "react";
import "./LoginForm.css";
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
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
