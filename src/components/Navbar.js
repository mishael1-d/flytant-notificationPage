import React from "react";
import campaignIcon from "../assets/CreateCampaign.png";
import { Link } from "react-router-dom";
import sponsorship from "../assets/sponsorship.png";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile-pic.png";
import caretDown from "../assets/caret-down.png";
import notification from "../assets/notification.png";
import NotificationBar from "./NotificationBar";
function Navbar({ show, setShow }) {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Flytant" />
          </Link>
        </div>
        <div className="navBar_btns">
          <button type="default">
            <img src={sponsorship} alt="" />
            Create Campaign
          </button>
          <img
            src={notification}
            alt=""
            className="notificationBell"
            onClick={() => setShow(!show)}
          />
          {show && <NotificationBar setShow={setShow}/>}
          <img src={campaignIcon} alt="" className="campaignIcon" />
          <div className="profile">
            <img
              src={profileImage}
              alt="Profile Pics"
              className="profile_pic"
            />
            <img src={caretDown} alt="Profile Pics" className="caret_down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
