import {
  REQUEST_SUBREDDIT,
  RECEIVE_SUBREDDIT,
  ERROR_SUBREDDIT,
} from './actions';

function subreddit(state = {
  name: null,
  view: 'hot',
}, action) {
  switch (action.type) {
    case REQUEST_SUBREDDIT:
      return Object.assign({}, state, {
        name: action.name,
        view: action.view,
      });

    case RECEIVE_SUBREDDIT:
      const { children, after, before } = action.data
      return Object.assign(
        {
          name: action.name,
        },
        state,
        action.data
      );

    default:
      return state;
  }
}

export default {
  subreddit,
};
