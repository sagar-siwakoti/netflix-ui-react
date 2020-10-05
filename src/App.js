import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/Login";
import SignUpForm from "./components/SignUp/SignUpForm";
import SignUpPage from "./pages/SignUpPage";

function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={SignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
