import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Bell from "./pages/Bell/Bell";
import Messenger from "./pages/Messenger/Messenger";
import Operator from "./pages/Operator/Operator";
import Question from "./pages/Question/Question";
import Phone from "./shared/Phone/Phone";
import "./styles/index.scss";

function App() {
  return (
    <div className="container">
      <Phone>
        <Switch>
          <Route path="/messenger" exact component={Messenger} />
          <Route path="/question" exact component={Question} />
          <Route path="/bell" exact component={Bell} />
          <Route path="/operator" exact component={Operator} />
          <Route path="/" exact>
            <Redirect to="/messenger" />
          </Route>
        </Switch>
      </Phone>
    </div>
  );
}

export default App;
