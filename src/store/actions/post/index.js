import { SET_NEWS_FEED } from "./types"
import * as postService from '../../../service/PostService';

export const setNewsFeed = newsFeed => {
  return {
    type: SET_NEWS_FEED,
    newsFeed
  }
}

export function loadNewsFeed() {
  return function (dispatch, getState) {
    postService.getNewsFeed().then(response => {
      //console.log(response.data);
      dispatch(setNewsFeed(response.data));
    });
  };
}
