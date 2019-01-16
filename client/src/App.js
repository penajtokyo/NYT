import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './Pages/Main';
import NoMatch from './Pages/NoMatch';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
