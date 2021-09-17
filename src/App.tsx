import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Repo } from './pages/Repo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/repo/:author/:name" component={Repo} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
