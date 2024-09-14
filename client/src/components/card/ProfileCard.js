import React from "react";
import FollowBtn from "../button/FollowBtn";
import { BsCalendar3 } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import EditBtn from "../button/EditBtn";

import getDate from "../../utils/getDate";
import Avatar from "../avatar/Avatar";

function ProfileCard({ profile, currentProfile }) {
  const { username, avatar, followers, following, createdAt } = profile;

  return (
    <div className="profile-card">
      {/* <div className="profile-card__banner">
        <img
          src="https://data.whicdn.com/images/335288936/original.jpg"
          alt="banner"
        />
      </div> */}
      <div className="profile-card__bio">
        <div className="display-flex align-items-c justify-content-sb">
          <div className="profile-card__bio--img display-flex justify-content-c align-items-c">
            <Avatar size="large" username={username} avatar={avatar} />
          </div>
          {currentProfile ? (
            <EditBtn />
          ) : (
            <FollowBtn username={username} followers={followers} />
          )}
        </div>
        <h3>{profile.fname}</h3>
        <small>@{profile.username}</small>
        <p>{profile.bio}</p>

        <ul className="display-flex">
          <li className="display-flex align-items-c">
            <MdLocationOn /> {profile.location}
          </li>
          <li className="display-flex align-items-c">
            <ImLink />
            <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a>
          </li>
          <li className="display-flex align-items-c">
            <BsCalendar3 /> Joined {getDate(createdAt)}
          </li>
        </ul>
        <div className="profile-card__bio--follow display-flex">
          <p>
            <span>{following.length}</span> Following
          </p>
          <p>
            <span>{followers.length}</span> Followers
          </p>
        </div>
      </div>
      <div className="profile-card__tweets display-flex justify-content-c">
        Posts
      </div>
    </div>
  );
}

export default ProfileCard;
