import React from "react";
import './App.css';
import Navv from "./Navv";
import Feedback from './Feedback';
import Home from  './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navv />
      <Switch>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Router exact path='/'>
        <Home />
        </Router>
      </Switch>
    </Router>
  </>
  );
}

export default App;
