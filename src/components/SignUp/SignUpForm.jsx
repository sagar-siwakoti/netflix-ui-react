import React, { useEffect, useState } from "react";
import "../Login/LoginForm";
import { Link } from "react-router-dom";
import FBlogo from "../../assets/images/fb-logo.png";
import { auth } from "../../firebases";
import { useHistory } from "react-router-dom";

/*const regexp = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);*/

function SignUpForm(props) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let history = useHistory();

  /* const [state, setState] = useState({
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
  };*/
  const clearInputs =()=>{
    setUsername("");
    setEmail("");
    setPassword("");
  };
  //firebase stuff
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        clearInputs()
        //user has logged on
        console.log(authUser);
        setUser(authUser);
      } else {
        //user has logged out
        setUser(null);
      }
    });
    return () => {
      //perform some cleanup actions
      unsubscribe();
    };
  }, []);

  //signup

  const signUp = (event) => {
//default prevent
    event.preventDefault();

    //calling authentication to firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    //checking if user is logged in
    if (user){
      history.push("/dashboard");
    }else{
      alert("please create the account.")
    }
  };

  return (
    <div className="form__containerOutside">
      <div className="form__container">
        <form>
          <h1>Sign Up</h1>
          <div className="input__container">
            <input
              className="input__empty"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="input__container">
            <input
              className="input__empty"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email or Phone Number</label>
            {/*<span style={{ color: "#db7302" }}>{state.emailError}</span>*/}
          </div>
          <div className="input__container">
            <input
              className="input__empty"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            {/*<span style={{ color: "#db7302" }}>{state.passwordError}</span>*/}
          </div>
          <div className="input__container">
            <button type="submit" onClick={signUp}>
              Sign Up
            </button>
          </div>
          <label className="checkbox__container">
            Remember me
            {/*<input
              type="checkbox"
              defaultChecked={state.checked}
              onChange={handlerCheckedBox}
            />*/}
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
