/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../styles/pageFiveStyle.scss";
import logoBlue from "../img/logoBlue.png";
import socialin from "../img/socialin.png";
import socialtwitter from "../img/socialtwitter.png";
import socialm from "../img/socialm.png";

import arrowLeft from "../img/ArrowBtnLeft.png";
import arrowRight from "../img/ArrowBtnRight.png";

import news1 from "../img/news1.png";
import news2 from "../img/news2.png";
import news3 from "../img/news3.png";
import news4 from "../img/news4.png";

const PageThree = () => {
  return (
    <div style={style} class="wrapperPageFive">
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
      <div className="blueBG"></div>
      <div className="wrapperSec5">
        <div className="titleWrapper">
          <div className="title">
            <div>
              <h1>Recent News</h1>
              <div className="thickBlueLine">
                <div className="TBLblue"></div>
                <div className="TBLgrey"></div>
              </div>
            </div>
          </div>
          <div className="arrows">
            <img src={arrowLeft} alt="" />
            <img src={arrowRight} alt="" />
          </div>
        </div>
        <div className="newsWrapper">
          <div className="wrapper">
            <div className="news">
              <div>
                <img src={news1} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div class="hyperlink">
                    <div class="smallBlueLine"></div>
                    <button class="blueBtn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div>
                <img src={news2} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div class="hyperlink">
                    <div class="smallBlueLine"></div>
                    <button class="blueBtn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div>
                <img src={news3} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div class="hyperlink">
                    <div class="smallBlueLine"></div>
                    <button class="blueBtn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div>
                <img src={news4} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div class="hyperlink">
                    <div class="smallBlueLine"></div>
                    <button class="blueBtn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
