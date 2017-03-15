import {
  REQUEST_SUBREDDIT,
  RECEIVE_SUBREDDIT,
  ERROR_SUBREDDIT,
} from './actions';
import {
  DEFAULT_SUBREDDIT,
  DEFAULT_VIEW,
} from './defaults';

function subreddit(state = {
  isFetching: false,
  lastFetch: Date.now(),
  name: DEFAULT_SUBREDDIT,
  view: DEFAULT_VIEW,
}, action) {
  switch (action.type) {
    case REQUEST_SUBREDDIT:
      return Object.assign({}, state, {
        isFetching: true,
        name: action.name,
        view: action.view,
      });

    case RECEIVE_SUBREDDIT:
      const { children, after, before } = action.data
      const isFetching = action.name === state.name && action.view === state.view;
      return Object.assign(
        {},
        state,
        action.data,
        {
          isFetching: !isFetching,
          lastFetch: Date.now(),
          name: action.name,
        },
      );

    default:
      return state;
  }
}

export default {
  subreddit,
};
