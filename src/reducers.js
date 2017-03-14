import {
  REQUEST_SUBREDDIT,
  RECEIVE_SUBREDDIT,
  ERROR_SUBREDDIT,
} from './actions';

function subreddits(state = {
  active: null,
}, action) {
  switch (action.type) {
    case REQUEST_SUBREDDIT:
      return Object.assign({}, state, {
        active: action.name,
      });

    default:
      return state;
  }
}

export default {
  subreddits, 
};
