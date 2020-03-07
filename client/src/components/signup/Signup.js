import React, { Component } from "react";
export default class SignUp extends Component {
    apicall = () => {
        
    }
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick = {() => this.apicall} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="member">
                    Already registered? <a href="../Login">sign in</a>
                </p>
            </form>
        );
    }
}