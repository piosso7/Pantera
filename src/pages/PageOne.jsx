import React from "react";
import logoWhite from "../img/logoWhite.png";
import style from "../styles/pageOneStyle.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PageOne = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  return (
    <div style={style} className="wrapperPageOne">
      <img
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-once="false"
        src={logoWhite}
        alt="logo"
      />
    </div>
  );
};

export default PageOne;
