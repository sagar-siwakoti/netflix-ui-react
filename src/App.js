import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/Login";

function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/signin" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
