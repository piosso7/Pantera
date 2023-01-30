/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../styles/pageTwoStyle.scss";
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

import logoBlue from "../img/logoBlue.png";
import socialin from "../img/socialin.png";
import socialtwitter from "../img/socialtwitter.png";
import socialm from "../img/socialm.png";
import avatar from "../img/avatar.png";
import teamworkVideo from "../video/teamwork.mp4";
import playImg from "../img/play.png";
import blueArrow from "../img/blueArrow.png";

const PageTwo = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <div style={style} class="wrapperPageTwo">
      <div class="menu" data-aos="fade-down" data-aos-delay="500">
        <img
          on
          onClick={scrollPageOne}
          src={logoBlue}
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
          <img src={socialin} alt="social" />
          <img src={socialtwitter} alt="social" />
          <img src={socialm} alt="social" />
        </div>
      </div>
      <div class="contentWrapperSec2">
        <section>
          <div className="textWrapper">
            <div className="title">
              <h1 data-aos="slide-up" data-aos-delay="500">
                Get Your Rights
              </h1>
            </div>
            <div className="thickBlueLine">
              <div
                data-aos="flip-left"
                data-aos-delay="1000"
                className="TBLblue"
              ></div>
              <div className="TBLgrey"></div>
            </div>
            <div className="description">
              <p data-aos="slide-down" data-aos-delay="500">
                Everyone deserves the right treatment. We're ready to take
                control of your case and achieve another triumph.
              </p>
            </div>
            <div
              className="hyperlink"
              data-aos="slide-right"
              data-aos-delay="500"
            >
              <div
                className="smallBlueLine"
                data-aos="slide-right"
                data-aos-delay="1500"
              ></div>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="avatar">
            <img
              className="hyperlink"
              data-aos="slide-left"
              data-aos-delay="500"
              data-aos-duration="2000"
              src={avatar}
              alt="avatar"
            />
          </div>
        </section>
        <div class="videoContainer">
          <div className="videoWrapper">
            <video
              src={teamworkVideo}
              muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
            ></video>
            <div className="blueFilter"></div>
            <a
              href="#"
              className="hyperlink"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-offset="0"
            >
              <img src={playImg} alt="" />
              <p>PLAY VIDEO</p>
            </a>
          </div>
          <div class="newsletter">
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="10000"
              data-aos-offset="0"
            >
              GET DAILY UPDATES
            </p>
            <form data-aos="fade-up">
              <input type="text" placeholder="E-mail address" />
              <img src={blueArrow} alt="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
