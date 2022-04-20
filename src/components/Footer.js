import React from "react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import insta from "../assets/w-insta.png";
import fb from "../assets/w-fb.png";
import twitter from "../assets/w-twitter.png";
import mail from "../assets/w-mail.png";
import link from "../assets/w-link.png";
import ytb from "../assets/w-ytb.png";
import android from "../assets/android.png";
import ios from "../assets/ios.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="footer-items">
          <div className="left">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Flytant" />
              </Link>
            </div>
            <p>Connecting Brands & Influencers</p>
            <div className="sm-icons">
              <img src={insta} alt="" />
              <img src={fb} alt="" />
              <img src={twitter} alt="" />
              <img src={mail} alt="" />
              <img src={link} alt="" />
              <img src={ytb} alt="" />
            </div>
          </div>
          <div className="middle">
            <ul className="links link-left">
              <li>Home</li>
              <li>About</li>
              <li>Career</li>
              <li>Privacy</li>
            </ul>
            <ul className="links link-right">
              <li>Ads</li>
              <li>Blogs</li>
              <li>Terms</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="right">
            <h3>Get the app</h3>
            <img src={android} alt="" />
            <img src={ios} alt="" />
          </div>
        </div>
          <div className="divider"/>
          <p className="copyright">&copy;Copyright Flytant Pvt Ltd.</p>
      </div>
    </div>
  );
}

export default Footer;
