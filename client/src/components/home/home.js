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
        <div className="card-container">
          {this.state.vocabularylist.map(res => (
            <div className="col-md-3" style={{ float: "left" }}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">
                  <h3>{res.name}</h3>
                </div>
                <ul className="list-group list-group-flush">
                  <a href={`/vocabulary/${res._id}`} className="list-group-item">Edit vocabulary words</a>
                  <a href={`/delvocabulary/${res.name}/${res._id}`} className="list-group-item" style={{ color: "red" }}>Delete Vocabulary list</a>
                  <a href={`/games/hangman/${res._id}`} className="list-group-item">hangman</a>
                  <a href={`/games/newgame/${res._id}`} className="list-group-item">new game</a>
                </ul>
              </div>
            </div>
          ))}
          {this.state.vocabularylist.length ?
             <div></div>
             : 
             <h1>New? add new vocabulary list <a href="/vocabulary">HERE</a></h1>
          }
        </div>

      </div>

    )
  }
}
