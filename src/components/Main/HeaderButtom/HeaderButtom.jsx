import React from "react";
import "./HeaderButtom.css";
function HeaderButtom({text1,text2 ,img}) {
  return (
    <div className="headerButtom__container">
      <div className="headerButtom__containerInside">
        <div className="headerTypo__container">
          <h1>{text1}</h1>
          <h2>
            {text2}
          </h2>
        </div>
        <div className="headerButton__image">
          <div className="headerButton__imageInside">

          <img
            src={img}
            alt="buttom__image"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderButtom;
