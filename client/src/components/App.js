import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import Home from "./home/home";
import About from "./about/About";
// import Vocab from './vocabs/Addnewcards';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              {/* <Route path="/new-vocabulary" component={Vocab} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;