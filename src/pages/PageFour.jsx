/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import style from "../styles/pageFourStyle.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  scrollPageOne,
  scrollPageThree,
  scrollPageFour,
  scrollPageFive,
  scrollPageSix,
} from "../functions/useWindowScrollPositions";

import logoWhite from "../img/logoWhite.png";
import socialinwhite from "../img/socialinwhite.png";
import socialtwitterwhite from "../img/socialtwitterwhite.png";
import socialmwhite from "../img/socialmwhite.png";

import avatar from "../img/avatar3.png";

const PageFour = () => {
  let i = 0;
  const [count, setCount] = useState(0);

  function increase() {
    if (i < 88) {
      setTimeout(function () {
        setCount(i);
        i++;
        increase();
      }, 15);
    }
  }

  function startIncrease() {
    if (count < 87) {
      setTimeout(function () {
        increase();
      }, 1000);
    } else return;
  }
  function startDecrease() {
    setCount(0);
  }

  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <div
      onMouseEnter={startIncrease}
      onMouseLeave={startDecrease}
      style={style}
      class="wrapperPageFour"
    >
      <div
        className="blueBackground"
        data-aos="slide-right"
        data-aos-delay="500"
        data-aos-duration="2000"
      ></div>
      <div
        className="darkBlueBackground"
        data-aos="slide-left"
        data-aos-delay="500"
        data-aos-duration="1000"
      ></div>
      <div class="menu" data-aos="fade-down" data-aos-delay="1000">
        <img
          on
          onClick={scrollPageOne}
          src={logoWhite}
          alt="logo"
          class="logoMenu"
        />
        <ul>
          <li>
            <a onClick={scrollPageThree}>OUR WORK & US</a>
          </li>
          <li>
            <a onClick={scrollPageFour}>HAPPY ENDINGS</a>
          </li>
          <li>
            <a onClick={scrollPageFive}>RECENT NEWS</a>
          </li>
          <li>
            <a onClick={scrollPageSix}>CONTACT US</a>
          </li>
        </ul>
        <div class="socialsec2">
          <img src={socialinwhite} alt="social" />
          <img src={socialtwitterwhite} alt="social" />
          <img src={socialmwhite} alt="social" />
        </div>
      </div>
      <div className="wrapperSec4">
        <div className="titleWrapper">
          <div className="title">
            <h1 data-aos="slide-up" data-aos-delay="1000">
              Happy Endings
            </h1>
          </div>
          <div className="thickBlueLine">
            <div
              className="TBLgrey"
              data-aos="flip-left"
              data-aos-delay="1000"
            ></div>
            <div
              className="TBLblue"
              data-aos="flip-left"
              data-aos-delay="1000"
            ></div>
            <div
              className="TBLgrey"
              data-aos="flip-right"
              data-aos-delay="1000"
            ></div>
          </div>
        </div>
        <div className="mark" data-aos="fade-up" data-aos-delay="1100">
          <p>,,</p>
        </div>
        <div className="description">
          <div className="descriptionTitle">
            <h2 data-aos="fade-up" data-aos-delay="1200">
              Health Insurance Claim
            </h2>
          </div>
          <div
            className="descriptionText"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <p>
              Who knows what is coming.. I had to get to the doctor immediately.
              The costs are as always unpredictable. The insurance company
              didn't want to pay the bills. I reached out to the Pantera office
              and they provided all the essential help I needed for my case. I'm
              so grateful. Thank you!
            </p>
          </div>
        </div>
        <div className="footer">
          <div
            className="attorney"
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-offset="0"
          >
            <p>ATTORNEY</p>
            <div className="person">
              <img src={avatar} alt="avatar" />
              <p>Thomas Rosevelt</p>
            </div>
          </div>
          <div
            className="procentage"
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-offset="0"
          >
            <p>WIN PROCENTAGE</p>
            <h1 className="percent">{count}%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
