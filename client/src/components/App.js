import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import Home from "./home/Home";
import About from "./about/About";
import Navbar from './navbar/navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;