import { SET_NEWS_FEED } from "../../actions/post/types";

const initialState = {
    newsFeed: []
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_FEED:
      return Object.assign({}, state, { newsFeed: action.newsFeed });
    default:
      return state;
  }
}

export default post;
