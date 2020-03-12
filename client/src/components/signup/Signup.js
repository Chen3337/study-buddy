import React, { Component } from "react";
import axios from "axios";
export default class SignUp extends Component {
    state = {
        username: "",
        password: ""
    }
 apicall = (event) => {
     event.preventDefault();
     var data = {username: this.state.username, password: this.state.password};
    axios.post('/api/', data)
    .then((results) => {
        if(results.status === 200){
            window.location.href = '/sign-in';
        }
    }).catch((err) =>{
        console.log(err);
    })
 }  
 handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
 render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                </div>
                <button onClick = {(e) => this.apicall(e)} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="member">
                    Already registered? <a href="/sign-in">sign in</a>
                </p>
            </form>
        );
    }
}