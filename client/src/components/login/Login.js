import React, { Component } from "react";


export default class Login extends Component {
    apicall = () => {

    }
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

                <button onClick = {() => this.apicall} type="submit" className="btn btn-primary btn-block">Login</button>
                
            </form>
        );
    }
}