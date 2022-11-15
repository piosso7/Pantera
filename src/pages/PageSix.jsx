/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../styles/pageSixStyle.scss";
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
import map from "../img/map.png";
import blueBox from "../img/briefcaseBG.png";

const PageSix = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <div style={style} class="wrapperPageSix">
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
        <div class="social">
          <img src={socialin} alt="social" />
          <img src={socialtwitter} alt="social" />
          <img src={socialm} alt="social" />
        </div>
      </div>
      <div className="mapWrapper" data-aos="zoom-out" data-aos-delay="500">
        <img className="map" src={map} alt="map" />
        <div
          className="pulseDot"
          data-aos="fade-in"
          data-aos-delay="1400"
        ></div>
        <div className="dot" data-aos="fade-in" data-aos-delay="1200"></div>
      </div>
      <div className="wrapperSec6">
        <div className="messageWrapper">
          <img
            className="blueBox"
            data-aos="slide-down"
            data-aos-delay="800"
            src={blueBox}
            alt="blueBox"
          />
          <div className="message" data-aos="slide-down" data-aos-delay="1200">
            <h2 data-aos="fade-up" data-aos-delay="1600">
              Reach us through our contact form
            </h2>
            <form data-aos="fade-up" data-aos-delay="1600">
              <input type="text" name="name" placeholder="Full Name" />
              <input type="number" name="number" placeholder="Phone" />
              <input type="email" name="email" placeholder="E-mail" />
              <select>
                <option value="Case">Case</option>
                <option value="Case1">Case1</option>
                <option value="Case2">Case2</option>
                <option value="Case3">Case3</option>
              </select>
              <input type="text" name="message" placeholder="Message" />
            </form>
            <div class="hyperlink" data-aos="fade-up" data-aos-delay="1600">
              <div
                class="smallBlueLine"
                data-aos="slide-right"
                data-aos-delay="2000"
              ></div>
              <button class="blueBtn">SEND</button>
            </div>
          </div>
        </div>
        <div className="titleWrapper">
          <div className="title">
            <h1 data-aos="slide-up" data-aos-delay="500">
              Contact Us
            </h1>
          </div>
          <div className="thickBlueLine">
            <div
              className="TBLblue"
              data-aos="flip-left"
              data-aos-delay="500"
            ></div>
            <div className="TBLgrey"></div>
          </div>
          <div className="description">
            <p data-aos="slide-down" data-aos-delay="500">
              We're ready to collaborate with you everyday. Reach out to us by
              visiting the office, call, or email. If you want to make your life
              easier, fill out the contact form and we will respond within 24h.
            </p>
          </div>
        </div>
        <div className="addressWrapper">
          <div className="address" data-aos="fade-up" data-aos-delay="800">
            <h2>ADDRESS</h2>
            <p>1702 Pacific Ave</p>
            <p>Los Angeles, CA 92870</p>
          </div>
          <div className="phone" data-aos="fade-up" data-aos-delay="900">
            <h2>PHONE</h2>
            <p>520 745 5000</p>
          </div>
          <div className="email" data-aos="fade-up" data-aos-delay="1000">
            <h2>EMAIL</h2>
            <p>info@lawpantera.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSix;
