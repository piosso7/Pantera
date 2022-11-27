/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import style from "../styles/pageFiveStyle.scss";
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
import arrowLeft from "../img/ArrowBtnLeft.png";
import arrowRight from "../img/ArrowBtnRight.png";
import news1 from "../img/news1.png";
import news2 from "../img/news2.png";
import news3 from "../img/news3.png";
import news4 from "../img/news4.png";

const PageFive = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  const [isActive, setIsActive] = useState(false);

  const moveLeft = (event) => {
    setIsActive(true);
  };

  const moveRight = (event) => {
    setIsActive(false);
  };

  return (
    <div style={style} class="wrapperPageFive">
      <div class="menu" data-aos="fade-down" data-aos-delay="500">
        <img
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
      <div className="blueBG" data-aos="slide-up" data-aos-delay="1000"></div>
      <div className="wrapperSec5">
        <div className="titleWrapper">
          <div className="title">
            <div>
              <h1 data-aos="slide-up" data-aos-delay="1000">
                Recent News
              </h1>
            </div>
            <div className="thickBlueLine">
              <div
                className="TBLblue"
                data-aos="flip-left"
                data-aos-delay="800"
              ></div>
              <div className="TBLgrey"></div>
            </div>
          </div>
          <div className="arrows">
            <img
              onClick={moveRight}
              src={arrowLeft}
              alt=""
              data-aos="fade-left"
              data-aos-delay="1000"
            />
            <img
              onClick={moveLeft}
              src={arrowRight}
              alt=""
              data-aos="fade-right"
              data-aos-delay="1000"
            />
          </div>
        </div>
        <div className="newsWrapper">
          <div className={isActive ? "wrapper move" : "wrapper"}>
            <div className="news">
              <div data-aos="slide-right" data-aos-delay="800">
                <img src={news1} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div
                    class="hyperlink"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                  >
                    <div
                      class="smallBlueLine"
                      data-aos="slide-right"
                      data-aos-delay="2000"
                    ></div>
                    <button class="blueBtn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div data-aos="slide-right" data-aos-delay="900">
                <img src={news2} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div
                    class="hyperlink"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                  >
                    <div
                      class="smallBlueLine"
                      data-aos="slide-right"
                      data-aos-delay="2000"
                    ></div>
                    <button class="blueBtn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div data-aos="slide-right" data-aos-delay="1000">
                <img src={news3} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div
                    class="hyperlink"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                  >
                    <div
                      class="smallBlueLine"
                      data-aos="slide-right"
                      data-aos-delay="2000"
                    ></div>
                    <button class="blueBtn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="news">
              <div data-aos="slide-right" data-aos-delay="1100">
                <img src={news4} alt="news1" />
                <div className="text">
                  <h2>The Right Treatment</h2>
                  <p>
                    The recent pandemic made lives very unpredictable, while
                    still requiring...
                  </p>
                  <div
                    class="hyperlink"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                  >
                    <div
                      class="smallBlueLine"
                      data-aos="slide-right"
                      data-aos-delay="2000"
                    ></div>
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

export default PageFive;
