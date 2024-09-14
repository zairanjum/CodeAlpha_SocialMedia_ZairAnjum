import React, { useEffect, useState } from "react";
import NewTweetForm from "../components/form/NewTweetForm";
import TweetCard from "../components/card/TweetCard/TweetCard";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getFollowingTweets } from "../redux/actions/tweetActions";
import Spinner from "../components/Spinner";

const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const tweetState = useSelector((state) => state.tweet);
  const { modifiedTweet, followingTweets, newTweet, newRetweet } = tweetState;

  useEffect(() => {
    dispatch(getFollowingTweets(page));
  }, [page, modifiedTweet, newTweet, newRetweet, dispatch]);

  return (
    <div className="home">
      <NewTweetForm />
      {followingTweets ? (
        followingTweets.length > 0 ? (
          <InfiniteScroll
            dataLength={followingTweets.length}
            next={() => setPage(page + 1)}
            hasMore={true}
            loader={<Spinner />}
            scrollableTarget="scrollable-container"
          >
            {followingTweets.map((tweet) => (
              <TweetCard key={tweet._id} tweet={tweet} />
            ))}
          </InfiniteScroll>
        ) : (
          <div className="display-flex flex-direction-c align-items-c">
            <div className="view-wrapper">
              <h1>OH!</h1>
              <p>You haven't Posted yet. Go Post something.</p>
            </div>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
