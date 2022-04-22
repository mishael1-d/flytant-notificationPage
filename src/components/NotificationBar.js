import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NotificationBar({ setShow, show }) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShow(false));
  return (
    <div className="notificationContainer" ref={ref}>
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
        <Link to="/notifications" onClick={() => setShow(false)}>
          View all
        </Link>
      </div>
    </div>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default NotificationBar;
