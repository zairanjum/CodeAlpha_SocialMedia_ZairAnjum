import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiFileGifLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";
import { FiImage } from "react-icons/fi";
import Avatar from "../avatar/Avatar";
import TextareaAutosize from "react-textarea-autosize";
import { newTweet } from "../../redux/actions/tweetActions";
import getFormData from "../../utils/getFormData";

const NewTweetForm = () => {
  const { username, avatar } = useSelector(
    (state) => state.currentProfile.data
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    dispatch(newTweet(formData));
    e.target.reset();
  };

  return (
    <div className="tweet-form display-flex align-items-fs">
      <div className="tweet-form__img display-flex justify-content-c align-items-c">
        <Avatar username={username} avatar={avatar} size="small" />
      </div>
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <TextareaAutosize
          name="body"
          placeholder="What's New?"
          minRows={3}
          maxRows={6}
        />
        <div className="display-flex justify-content-sb align-items-c">
          <ul className="display-flex">
            <li>
              <FiImage />
            </li>
            <li>
              <RiFileGifLine />
            </li>
            <li>
              <GrEmoji />
            </li>
          </ul>
          <button type="submit" className="tweet-form__btn">New Post</button>
        </div>
      </form>
    </div>
  );
};

export default NewTweetForm;
