import React from "react";
import "./HeaderButtom.css";
function HeaderButtom(props) {
  return (
    <div className="headerButtom__container">
      <div className="headerButtom__containerInside">
        <div className="headerTypo__container">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs,Playstation,Xbox,
            Chromecast, Apple TV, Blu-ray players, and
            more.
          </h2>
        </div>
        <div className="headerButton__image">
          <div className="headerButton__imageInside">

          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="button__image1"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderButtom;
