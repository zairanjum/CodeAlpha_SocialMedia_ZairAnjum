
import { RiHome4Line } from "react-icons/ri"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { IoMdNotificationsOutline } from "react-icons/io"; 
import { BsBookmark } from "react-icons/bs"; 
import { CgProfile } from "react-icons/cg"; 

const sidebarLinks = [
  {
    text: "Home",
    path: "/home",
    icon: RiHome4Line,
    class: "home",
  },
  {
    text: "Explore",
    path: "/explore",
    icon: AiOutlineSearch,
    class: "explore",
  },
  {
    text: "Notification",
    path: "/notifications",
    icon: IoMdNotificationsOutline,
    class: "notification",
  },
  {
    text: "Bookmark",
    path: "/bookmarks",
    icon: BsBookmark,
    class: "bookmark",
  },
  {
    text: "Profile",
    path: "/profile/",
    icon: CgProfile,
    class: "profile",
  },
  {
    text: "Post",
    path: "/tweet",
    icon: null, 
    class: "tweet",
  },
];

export default sidebarLinks;
