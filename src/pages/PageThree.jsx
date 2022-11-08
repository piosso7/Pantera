/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../styles/pageThreeStyle.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import logoBlue from "../img/logoBlue.png";
import socialin from "../img/socialin.png";
import socialtwitter from "../img/socialtwitter.png";
import socialm from "../img/socialm.png";
import briefcase from "../img/briefcase.png";
import briefcaseBG from "../img/briefcaseBG.png";
import carAccidents from "../img/CarAccidents.png";
import healthProblems from "../img/HealthProblems.png";
import employeeRights from "../img/EmployeeRights.png";

import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import avatar4 from "../img/avatar4.png";
import avatar5 from "../img/avatar5.png";
import avatar6 from "../img/avatar6.png";

const PageThree = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <div style={style} class="wrapperPageThree">
      <div class="whiteBg" data-aos="slide-left" data-aos-delay="500"></div>
      <div class="menu" data-aos="slide-down" data-aos-delay="500">
        <img src={logoBlue} alt="logo" class="logoMenu" />
        <ul>
          <li>
            <a href="#">OUR WORK & US</a>
          </li>
          <li>
            <a href="#">HAPPY ENDINGS</a>
          </li>
          <li>
            <a href="#">RECENT NEWS</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
        <div class="socialsec2">
          <img src={socialin} alt="social" />
          <img src={socialtwitter} alt="social" />
          <img src={socialm} alt="social" />
        </div>
      </div>
      <div className="wrapperSec3">
        <section className="leftImg">
          <img
            className="briefcaseBG"
            data-aos="slide-right"
            data-aos-delay="500"
            src={briefcaseBG}
            alt="briefcaseBG"
          />
          <img
            className="briefcase"
            data-aos="slide-right"
            data-aos-delay="1000"
            src={briefcase}
            alt="briefcase"
          />
        </section>
        <section className="contentWrapperSec3">
          <div className="titleWrapper">
            <div className="title">
              <h1 data-aos="slide-up" data-aos-delay="500">
                Our Work & Us
              </h1>
            </div>
            <div className="thickBlueLine">
              <div
                className="TBLblue"
                data-aos="flip-left"
                data-aos-delay="1000"
              ></div>
              <div className="TBLgrey"></div>
            </div>
            <div className="textWrapper">
              <p className="text" data-aos="slide-down" data-aos-delay="500">
                We are specialized in 3 major areas of law. Read about our
                attorneys and let us take care of you.
              </p>
            </div>
          </div>
          <section className="elements">
            <div className="element" data-aos="slide-up" data-aos-delay="500">
              <div
                className="elementImg"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={carAccidents} alt="carAccidents" />
              </div>
              <div
                className="elementTitle"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <h2>Car Accidents</h2>
              </div>
              <div
                className="elementText"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <p>
                  We are specialized in 3 major areas of law. Read about our
                  attorneys and let us take care of you.
                </p>
              </div>
              <div className="avatars" data-aos="fade-up" data-aos-delay="1100">
                <img src={avatar1} alt="avatar1" />
                <img src={avatar2} alt="avatar2" />
                <img src={avatar3} alt="avatar3" />
              </div>
              <div class="hyperlink" data-aos="fade-up" data-aos-delay="1200">
                <div
                  class="smallBlueLine"
                  data-aos="slide-right"
                  data-aos-delay="2000"
                ></div>
                <button class="blueBtn">ATTORNEYS</button>
              </div>
            </div>
            <div className="element" data-aos="slide-up" data-aos-delay="500">
              <div
                className="elementImg"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={healthProblems} alt="healthProblems" />
              </div>
              <div
                className="elementTitle"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <h2>Health Problems</h2>
              </div>
              <div
                className="elementText"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <p>
                  Unfortune behaviors of the insurance companies make the
                  patients suffer.
                </p>
              </div>
              <div className="avatars" data-aos="fade-up" data-aos-delay="1100">
                <img src={avatar4} alt="avatar4" />
                <img src={avatar5} alt="avatar5" />
              </div>
              <div class="hyperlink" data-aos="fade-up" data-aos-delay="1200">
                <div
                  class="smallBlueLine"
                  data-aos="slide-right"
                  data-aos-delay="2000"
                ></div>
                <button class="blueBtn">ATTORNEYS</button>
              </div>
            </div>
            <div className="element" data-aos="slide-up" data-aos-delay="500">
              <div
                className="elementImg"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={employeeRights} alt="employeeRights" />
              </div>
              <div
                className="elementTitle"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <h2>Employee Rights</h2>
              </div>
              <div
                className="elementText"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <p>
                  Everyday there are almost 2,000 cases of laws broken in the
                  work place.
                </p>
              </div>
              <div className="avatars" data-aos="fade-up" data-aos-delay="1100">
                <img src={avatar6} alt="avatar6" />
              </div>

              <div class="hyperlink" data-aos="fade-up" data-aos-delay="1200">
                <div
                  class="smallBlueLine"
                  data-aos="slide-right"
                  data-aos-delay="2000"
                ></div>
                <button class="blueBtn">ATTORNEYS</button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default PageThree;
