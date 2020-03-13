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
        if (results.data.user === null) {
          window.location.href = "/";
        }
        else {
          var name = results.data.user.username;
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
        }
      }).catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.state.vocabularylist.map(res => (
            <div className="col-md-6">

            </div>
          ))}
        </div>

      </div>

    )
  }
}
