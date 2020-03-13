import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top" style={{ backgroundColor: "light-gray" }}>
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>Study Buddy</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/home"}>Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/vocabulary"}>new vocabulary list</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>About </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;