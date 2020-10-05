import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import InsideSignIn from "./insideSignIn";

function App(props) {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/dashboard" exact component={InsideSignIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
