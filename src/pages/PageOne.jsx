import React from "react";
import logoWhite from "../img/logoWhite.png";
import style from "../styles/pageOneStyle.scss";

const PageOne = () => {
  return (
    <div style={style} className="wrapperPageOne">
      <img src={logoWhite} alt="logo" />
    </div>
  );
};

export default PageOne;
