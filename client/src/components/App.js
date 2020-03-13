import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import Home from "./home/home";
import About from "./about/About";
import Vocab from './vocabs/vocabulary';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/vocabulary" component={Vocab} />
          <Route path="/vocabulary/:id" component={Vocab} />
        </Switch>
    </Router>
  );
}

export default App;