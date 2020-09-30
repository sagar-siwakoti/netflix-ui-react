import React from "react";
import "../styles/Nav.css";
function Nav(props) {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="Netflix logo"
      />
        <img
            className="nav__avatar"
            src="https://pbs.twimg.com/profile_images/124011999041155"
            alt="Netflix avatar"
        />
    </div>
  );
}

export default Nav;
