import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai"; // Icon for follow notifications
import { FiInfo } from "react-icons/fi"; // Default icon for other notifications

function Notifications() {
  const { data } = useSelector((state) => state.currentProfile);
  const notifications = data?.notifications || [];

  if (notifications.length === 0) {
    return <p>No notifications</p>;
  }

  return (
    <div>
      {notifications.map((notification, idx) => {
        const Icon = notification.type === "follow" ? AiOutlineUser : FiInfo;
        return (
          <div key={idx} className="notification display-flex align-items-c">
            <Icon />
            <p>{notification.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;
