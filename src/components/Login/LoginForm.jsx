import React from "react";

function LoginForm(props) {
  return (

      <div className="form__container">
        <form>
          <h1>Sign In</h1>
          <div className="input__container">
            <input type="email" required />
            <label>Email or Phone Number</label>
          </div>
          <div className="input__container">
            <input type="password" required />
            <label>Password</label>
          </div>
            <div className="input__container">
                <button type="submit">Sign In</button>
            </div>
        </form>
      </div>

  );
}

export default LoginForm;
