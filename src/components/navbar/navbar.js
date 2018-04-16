import React from "react";
import "./navbar.css";

const Navbar = (props) => (
  <nav className = "navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar">
        <ul>
          <li className= "brand"> <a href="/">Clicky Game</a></li>
          <li className="instructions">Click an image to begin!</li>
          <li className="currentscore">{props.children}</li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
