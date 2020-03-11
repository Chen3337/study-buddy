import React, { Component } from "react";
import Jumbotron from './node_modules/react-bootstrap/Jumbotron'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class About extends Component {
    apicall = () => {

    }
    render() {
        return(
            <Jumbotron fluid>
            <Container>
              <h1>About Us</h1>
              <p>
               We believe at 
              </p>
            </Container>
          </Jumbotron>
        );

    };
};
    

