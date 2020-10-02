import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Index from "./pages";

function App(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Index}/>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
