/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../styles/pageFourStyle.scss";
import logoWhite from "../img/logoWhite.png";
import socialinwhite from "../img/socialinwhite.png";
import socialtwitterwhite from "../img/socialtwitterwhite.png";
import socialmwhite from "../img/socialmwhite.png";

import avatar from "../img/avatar3.png";

const PageFour = () => {
  return (
    <div style={style} class="wrapperPageFour">
      <div class="menu">
        <img src={logoWhite} alt="logo" class="logoMenu" />
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
        <div class="socialsec4">
          <img src={socialinwhite} alt="social" />
          <img src={socialtwitterwhite} alt="social" />
          <img src={socialmwhite} alt="social" />
        </div>
      </div>
      <div className="wrapperSec4">
        <div className="titleWrapper">
          <div className="title">
            <h1>Happy Endings</h1>
          </div>
          <div className="thickBlueLine">
            <div className="TBLgrey"></div>
            <div className="TBLblue"></div>
            <div className="TBLgrey"></div>
          </div>
        </div>
        <div className="mark">
          <p>,,</p>
        </div>
        <div className="description">
          <div className="descriptionTitle">
            <h2>Health Insurance Claim</h2>
          </div>
          <div className="descriptionText">
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
          <div className="attorney">
            <p>ATTORNEY</p>
            <div className="person">
              <img src={avatar} alt="avatar" />
              <p>Thomas Rosevelt</p>
            </div>
          </div>
          <div className="procentage">
            <p>WIN PROCENTAGE</p>
            <p className="procent">87%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
