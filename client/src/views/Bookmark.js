import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TweetCard from "../components/card/TweetCard/TweetCard";
import { getBookmarks } from "../redux/actions/currentProfileActions";

const Bookmark = () => {
  const { bookmarks, data } = useSelector((state) => state.currentProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
  }, [data.bookmarks, dispatch]);

  return bookmarks ? (
    bookmarks.length > 0 ? (
      <div className="bookmark-list">
        {bookmarks.map((bookmark) => (
          <TweetCard key={bookmark._id} tweet={bookmark} />
        ))}
      </div>
    ) : (
      <div className="bookmark-empty">
        <div className="empty-state-wrapper">
          <h2>No Bookmarks Yet</h2>
          <p>Add Posts to your bookmarks and find them here.</p>
        </div>
      </div>
    )
  ) : null;
};

export default Bookmark;
