import React, { Component } from "react";
import API from "../../utils/API"


export default class Login extends Component {
    

    render() {
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="name" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="member">
                    Already registered? <a href="/sign-up">sign up</a>
                </p>
            </form>
        );
    }
}