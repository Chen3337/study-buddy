import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import axios from 'axios';
class vocabulary extends Component {
    state = {
        vocablistName: "",
        username: "",
        startaddVocabs: false,
        vocablistId: "",
        vocabWords: [],
        newvocabWord: "",
        newvocabDef: "",
        locationNow: window.location.pathname,
    }
    componentDidMount() {
        axios.get('/api/')
            .then((results) => {
                if (results.data.user === null) {
                    window.location.href = "/"
                }
                else {
                    if (this.props.match.params.id) {
                        
                        this.setState({
                            username: results.data.user.username,
                            vocablistId: this.props.match.params.id,
                            startaddVocabs: true,
                        })
                    }
                    else {
                        this.setState({
                            username: results.data.user.username
                        })
                    }
                }
            }).catch((err) => {
                console.log(err);
            });
    }
    makelistApi = () => {
        if (this.state.vocablistName !== "") {
            var data = {
                name: this.state.vocablistName
            }
            axios.post('/api/newlist', data)
                .then((results) => {
                    this.setState({
                        vocablistId: results.data._id,
                        vocablistName: results.data.name,
                        vocabWords: results.data.vocab,
                        startaddVocabs: true
                    })
                });
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addnewwordApi = () => {
        var data = {
            id: this.state.vocablistId,
            vocab: {
                word: this.state.newvocabWord,
                definition: this.state.newvocabDef
            }
        }
        console.log(data);
        axios.put('/api/newvocab', data)
            .then((results) => {
                this.getAllWords();
            });
    }
    getAllWords = () => {
        axios.get(`/api/vocablistinfo/${this.state.vocablistId}`)
            .then((results) => {
                this.setState({
                    vocablistName: results.data.name,
                    vocabWords: results.data.vocab,
                    newvocabWord: "",
                    newvocabDef: "",
                })
            })
    }
    deletewordApi = (delword) => {
        var data = {
            vocabListId: this.state.vocablistId,
            vocabWordId: delword._id
        }
        axios.put('/api/vocabword', data)
            .then((results) => {
                this.getAllWords();
            })
    }
    render() {
        if (this.state.vocablistId !== "") {
            if (this.state.startaddVocabs) {
                if (this.state.vocablistName === "") {
                    this.getAllWords();
                }
            }
        }
        if(this.state.locationNow !== window.location.pathname){
            window.location.reload();
        }
        return (
            <div>
                <Navbar />
                <div style={{ backgroundColor: "white" }}>
                    {this.state.startaddVocabs ? (
                        <div className="container">
                            <b>vocabulary list name : {this.state.vocablistName}</b>
                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <b>word</b>
                                </div>
                                <div className="col-md-6">
                                    <b>definition</b>
                                </div>
                            </div>
                            {this.state.vocabWords.map(res => (
                                <div className="row">
                                    <div className="col-md-5">
                                        <p>word: {res.word}</p>
                                    </div>
                                    <div className="col-md-5">
                                        <p>definition: {res.definition}</p>
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={() => this.deletewordApi(res)}>delete</button>
                                    </div>
                                </div>
                            ))}
                            <div className="row">
                                <div className="col-md-5">
                                    <input type="text" name="newvocabWord" value={this.state.newvocabWord} onChange={this.handleChange} placeholder="word" />
                                </div>
                                <div className="col-md-5">
                                    <textarea type="text" name="newvocabDef" value={this.state.newvocabDef} onChange={this.handleChange} rows="1" style={{ width: "100%" }} placeholder="definition here" />
                                </div>
                                <div className="col-md-2">
                                    <button onClick={() => this.addnewwordApi()}>add</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div className="container" style={{ width: "80%", margin: "auto" }}>
                                <b>vocabulary list name :</b>
                                <input type="text" name="vocablistName" value={this.state.vocablistName} onChange={this.handleChange}></input>
                                <button onClick={() => this.makelistApi()}>submit</button>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default vocabulary;