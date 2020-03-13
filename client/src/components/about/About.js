import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from '../navbar/navbar';

export default class About extends Component {
  apicall = () => {

  }
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron fluid>
          <div className="container">
            <h1>About Us</h1>
            <p>
              We wanted to make an aplication with easy to use tools to study on hard topics. Thats why we made Study Buddy!
              </p>
          </div>
        </Jumbotron>
      </div>
    );

  };
};


