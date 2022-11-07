/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../styles/pageSixStyle.scss";
import logoBlue from "../img/logoBlue.png";
import socialin from "../img/socialin.png";
import socialtwitter from "../img/socialtwitter.png";
import socialm from "../img/socialm.png";

import map from "../img/map.png";
import blueBox from "../img/briefcaseBG.png";

const PageSix = () => {
  return (
    <div style={style} class="wrapperPageSix">
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
        <div class="social">
          <img src={socialin} alt="social" />
          <img src={socialtwitter} alt="social" />
          <img src={socialm} alt="social" />
        </div>
      </div>
      <div className="mapWrapper">
        <img className="map" src={map} alt="map" />
        <div className="dot"></div>
      </div>
      <div className="wrapperSec6">
        <div className="messageWrapper">
          <img className="blueBox" src={blueBox} alt="blueBox" />
          <div className="message">
            <h2>Reach us through our contact form</h2>
            <form>
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
            <div class="hyperlink">
              <div class="smallBlueLine"></div>
              <button class="blueBtn">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="titleWrapper">
          <div className="title">
            <h1>Contact Us</h1>
          </div>
          <div className="thickBlueLine">
            <div className="TBLblue"></div>
            <div className="TBLgrey"></div>
          </div>
          <div className="description">
            <p>
              We're ready to collaborate with you everyday. Reach out to us by
              visiting the office, call, or email. If you want to make your life
              easier, fill out the contact form and we will respond within 24h.
            </p>
          </div>
        </div>
        <div className="addressWrapper">
          <div className="address">
            <h2>ADDRESS</h2>
            <p>1702 Pacific Ave</p>
            <p>Los Angeles, CA 92870</p>
          </div>
          <div className="phone">
            <h2>PHONE</h2>
            <p>520 745 5000</p>
          </div>
          <div className="email">
            <h2>EMAIL</h2>
            <p>info@lawpantera.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSix;
