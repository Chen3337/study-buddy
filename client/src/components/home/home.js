import React, { Component } from "react";
import Navbar from '../navbar/navbar';
import axios from 'axios';
export default class Home extends Component {
  state = {
    username: ""
  }
  componentDidMount() {
    axios.get('/api/')
      .then((results) => {
        console.log(results);
      }).catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <Navbar />
    )
  }
}
