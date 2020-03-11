import React from 'react';

function Navbar(){
    <nav className="navbar navbar-expand-sm navbar-light fixed-top" style = {{backgroundColor: "light-gray"}}>
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Study Buddy</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>About </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
}

export default Navbar;