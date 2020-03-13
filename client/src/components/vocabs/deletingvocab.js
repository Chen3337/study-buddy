import React, { Component } from "react";
import axios from "axios";
import Navbar from '../navbar/navbar';
export default class Delvocab extends Component {

    deleteVocablist = () => {
        axios.delete(`/api/vocablist/${this.props.match.params.id}`)
            .then(() => {
                window.location.href = "/home";
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div>
                        <h1>ARE YOU SURE WANT TO DELETE {this.props.match.params.name} VOCABULARY LIST</h1>
                    </div>
                    <div>
                        <a href="/home" className="btn btn-success">no</a>
                        <br />
                        <br />
                        <br />
                        <button onClick={() => this.deleteVocablist()} className="btn btn-danger">yes</button>

                    </div>
                </div>
            </div>
        );
    }
}