import React, { Component } from "react";
import axios from "axios";


export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    apicall = (event) => {
        event.preventDefault();
        var data = { username: this.state.username, password: this.state.password };
        axios.post('/api/login', data)
            .then((results) => {
                if (results.status === 200) {
                    window.location.href = '/home';
                }
            }).catch((err) => {
                console.log(err);
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.trim()
        })
    }

   

    render() {
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                    <h1 style={{textAlign:"center"}}>Study Buddy</h1>
                        <form>
                            <h3>Login</h3>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="name" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Enter username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" onClick={(e) => this.apicall(e)} className="btn btn-primary btn-block">Login</button>
                            <p className="member">
                                Already registered? <a href="/sign-up">sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
