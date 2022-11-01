import React from "react";
import logoWhite from "./img/logoWhite.png";
import "./styles/pageOneStyle.scss";

const PageOne = () => {
  return (
    <div className="wrapperPageOne">
      <img src={logoWhite} alt="logo" />
    </div>
  );
};

export default PageOne;
