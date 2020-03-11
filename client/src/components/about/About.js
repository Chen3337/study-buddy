import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'


export default class About extends Component {
    apicall = () => {

    }
    render() {
        return(
          <Jumbotron fluid>
            <div className= "container">
              <h1>About Us</h1>
              <p>
               We believe at Study Buddy 
              </p>
            </div>
          </Jumbotron>
        );

    };
};
    

