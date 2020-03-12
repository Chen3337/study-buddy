import React, { Component } from "react";
import Navbar from '../navbar/navbar';
import axios from 'axios';
export default class Home extends Component {
  state = {
    username: "",
    vocabularylist: [],
  }
  componentDidMount() {
    axios.get('/api/')
      .then((results) => {
        var name = results.data.user.username;
        console.log(name);
        axios.get(`/api/allvocablist/${name}`)
          .then((respon) => {
            console.log(respon);
            this.setState({
              username: name,
              vocabularylist: respon.data
            })
          }).catch((err) => {
            console.log(err);
          });
      }).catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Navbar />

      </div>

    )
  }
}
