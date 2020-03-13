import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from '../navbar/navbar';

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron fluid>
          <div className="container">
            <h1>About Us</h1>
            <p>
            We at Study Buddy wanted to make an application with easy to use tools to study on topics that are tricky to remember.
            We made two games to help you, the user, memorize words that you've had trouble with in the past.
            The games we made are: Hangman and Word Tank.
            We wanted to have some choices for the user to pick depending on how they want to study!
              </p>
          </div>
        </Jumbotron>
      </div>
    );

  };
};


