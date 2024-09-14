import React from "react";
import { BsStars } from "react-icons/bs"; 
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "Home";

  return (
    <header className="header display-flex align-items-c justify-content-sb">
      <h3>{path.charAt(0).toUpperCase() + path.slice(1)}</h3>
      <BsStars />
    </header>
  );
};

export default Header;
