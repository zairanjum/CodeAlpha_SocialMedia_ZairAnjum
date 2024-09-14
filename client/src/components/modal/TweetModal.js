import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTweetEditorModal } from "../../redux/slicers/modalSlicer";
import * as tweetSlicerActions from "../../redux/actions/tweetActions";

const TweetModal = () => {
  const tweet = useSelector((state) => state.modal.tweetEditorModal);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(tweetSlicerActions.deleteTweet(tweet._id));
    handleClose();
  };

  const handleClose = () => {
    dispatch(toggleTweetEditorModal());
  };

  return tweet ? (
    <div className="tweet-delete-modal">
      <div className="tweet-delete-modal__wrapper">
        <div className="tweet-delete-modal__text">
          <h2>Delete your Post?</h2>
          <p>
            Do you really want to delete?
          </p>
        </div>
        <div className="tweet-delete-modal__btns display-flex flex-direction-c">
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
          <button className="cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default TweetModal;
