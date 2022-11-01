/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./styles/pageThreeStyle.scss";
import logoBlue from "./img/logoBlue.png";
import socialin from "./img/socialin.png";
import socialtwitter from "./img/socialtwitter.png";
import socialm from "./img/socialm.png";
import briefcase from "./img/briefcase.png";
import briefcaseBG from "./img/briefcaseBG.png";

const PageThree = () => {
  return (
    <div style={style} class="wrapperPageThree">
      <div class="whiteBg"></div>
      <div class="menu">
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
          <img className="briefcaseBG" src={briefcaseBG} alt="briefcaseBG" />
          <img className="briefcase" src={briefcase} alt="briefcase" />
        </section>
        <section className="contentWrapperSec3">
          <div className="titleWrapper">
            <div className="title">
              <h1 id="titleS3H1">Our Work & Us</h1>
            </div>
            <div>
              <p className="text">
                We are specialized in 3 major areas of law. Read about our
                attorneys and let us take care of you
              </p>
            </div>
          </div>
          <section className="elements">
            <div className="element">
              <div className="elementImg">
                <img src="" alt="" />
              </div>
              <div className="elementTitle">
                <h2>Car Accidents</h2>
              </div>
              <div className="elementText">
                <p>
                  We are specialized in 3 major areas of law. Read about our
                  attorneys and let us take care of you.
                </p>
              </div>
              <div className="avatars"></div>
              <div class="hyperlink">
                <div class="smallBlueLineS3" id="smallBlueLineS3"></div>
                <button class="blueBtn">ATTORNEYS</button>
              </div>
            </div>
            <div className="element">
              <div className="elementImg">
                <img src="" alt="" />
              </div>
              <div className="elementTitle">
                <h2>Health Problems</h2>
              </div>
              <div className="elementText">
                <p>
                  Unfortune behaviors of the insurance companies make the
                  patients suffer.
                </p>
              </div>
              <div className="avatars"></div>
              <div class="hyperlink">
                <div class="smallBlueLineS3" id="smallBlueLineS3"></div>
                <button class="blueBtn">ATTORNEYS</button>
              </div>
            </div>
            <div className="element">
              <div className="elementImg">
                <img src="" alt="" />
              </div>
              <div className="elementTitle">
                <h2>Employee Rights</h2>
              </div>
              <div className="elementText">
                <p>
                  Everyday there are almost 2,000 cases of laws broken in the
                  work place.
                </p>
              </div>
              <div className="avatars"></div>
              <div class="hyperlink">
                <div class="smallBlueLineS3" id="smallBlueLineS3"></div>
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
