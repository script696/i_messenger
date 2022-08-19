import React from 'react';
import { Route, Switch } from "react-router-dom";
import Bell from './pages/Bell/Bell';
import Messenger from './pages/Messenger/Messenger';
import Operator from './pages/Operator/Operator';
import Question from './pages/Question/Question';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Messenger}/>
        <Route path='/question' exact component={Question}/>
        <Route path='/bell' exact component={Bell}/>
        <Route path='/operator' exact component={Operator}/>
      </Switch>
    </div>
  );
}

export default App;
