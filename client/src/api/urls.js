const URL = "http://localhost:5000";

export const SIGN_UP = `${URL}/profile/sign-up`;
export const SIGN_OUT = `${URL}/profile/sign-out`;
export const SIGN_IN = `${URL}/profile/sign-in`;
export const UPDATE_PROFILE = `${URL}/profile/edit`;
export const UPLOAD_AVATAR = `${URL}/profile/upload-avatar`;
export const FOLLOW_ID = `${URL}/profile/follow?id=`;
export const FOLLOW_NAME = `${URL}/profile/follow?username=`;
export const UNFOLLOW_ID = `${URL}/profile/unfollow?id=`;
export const UNFOLLOW_NAME = `${URL}/profile/unfollow?username=`;
export const GET_CURRENT_PROFILE = `${URL}/profile/current`;
export const GET_ALL_PROFILES = `${URL}/profile?page=`;
export const GET_PROFILE_USERNAME = `${URL}/profile?username=`;
export const GET_PROFILE_ID = `${URL}/profile?id=`;
export const ADD_BOOKMARK = `${URL}/profile/bookmark/add?id=`;
export const REMOVE_BOOKMARK = `${URL}/profile/bookmark/remove?id=`;
export const GET_BOOKMARK = `${URL}/profile/bookmarks`;
export const NEW_TWEET = `${URL}/tweet/new`;
export const RETWEET = `${URL}/tweet/retweet?id=`;
export const EDIT_TWEET = `${URL}/tweet/edit?id=`;
export const DELETE_TWEET = `${URL}/tweet/delete?id=`;
export const LIKE_TWEET = `${URL}/tweet/like?id=`;
export const UNLIKE_TWEET = `${URL}/tweet/unlike?id=`;
export const NEW_REPLY = `${URL}/tweet/reply/new?id=`;
export const DELETE_COMMENT = `${URL}/tweet/reply/delete?id=`;
export const GET_ALL_TWEETS = `${URL}/tweet?page=`;
export const GET_PROFILE_TWEETS = `${URL}/tweet/profile?username=`;
export const GET_TWEET_ID = `${URL}/tweet?id=`;
export const GET_FOLLOWING_TWEETS = `${URL}/tweet/following?page=`;
