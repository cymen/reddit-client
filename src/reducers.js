import {
  REQUEST_SUBREDDIT,
  RECEIVE_SUBREDDIT,
  ERROR_SUBREDDIT,
} from './actions';

function subreddit(state = {
  isFetching: false,
  name: null,
  view: 'hot',
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
        {
          isFetching: !isFetching,
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
