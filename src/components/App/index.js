import React from "react";
import Messenger from "../Messenger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../Page/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/" component={Messenger} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
