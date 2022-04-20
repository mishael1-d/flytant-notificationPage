import React from "react";
import { Link } from "react-router-dom";
const NotificationBar = ({setShow}) => (
  <div className="notificationContainer">
    <div className="notification-menu">
      <div className="notification-items">
        <h3 className="heading">Notification</h3>
        <div className="divider" />
        <p className="notification-title">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful.
        </p>
        <p className="notification-date">17 apr, 18:00</p>
      </div>
      <div className="notification-items">
        <p className="notification-title">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful.
        </p>
        <p className="notification-date">17 apr, 18:00</p>
      </div>
      <div className="notification-items">
        <p className="notification-title">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful.
        </p>
        <p className="notification-date">17 apr, 18:00</p>
      </div>
      <div className="divider" />
      <Link to="/notifications" onClick={()=>setShow(false)}>View all</Link>
    </div>
  </div>
);

export default NotificationBar;
