/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../styles/pageTwoStyle.scss";
import logoBlue from "../img/logoBlue.png";
import socialin from "../img/socialin.png";
import socialtwitter from "../img/socialtwitter.png";
import socialm from "../img/socialm.png";
import avatar from "../img/avatar.png";
import teamworkVideo from "../video/teamwork.mp4";
import playImg from "../img/play.png";
import blueArrow from "../img/blueArrow.png";

const PageTwo = () => {
  return (
    <div style={style} class="wrapperPageTwo">
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
      <div class="contentWrapperSec2">
        <section>
          <div className="textWrapper">
            <div className="title">
              <h1>Get Your Rights</h1>
            </div>
            <div className="thickBlueLine">
              <div className="TBLblue"></div>
              <div className="TBLgrey"></div>
            </div>
            <div className="description">
              <p>
                Everyone deserves the right treatment. We're ready to take
                control of your case and achieve another triumph.
              </p>
            </div>
            <div className="hyperlink">
              <div className="smallBlueLine"></div>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
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
            <a href="#">
              <img src={playImg} alt="" />
              <p>PLAY VIDEO</p>
            </a>
          </div>
          <div class="newsletter">
            <p>GET DAILY UPDATES</p>
            <form>
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
