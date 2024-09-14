import React from "react";
import { RiQuillPenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function MiniTweetBtn() {
  return (
    <Link to="/tweet">
      <button className="tweet-btn">
        <p>Post</p>
        <RiQuillPenLine />
      </button>
    </Link>
  );
}

export default MiniTweetBtn;
