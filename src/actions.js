export const REQUEST_SUBREDDIT = 'REQUEST_SUBREDDIT';
export const RECEIVE_SUBREDDIT = 'RECEIVE_SUBREDDIT';
export const ERROR_SUBREDDIT = 'ERROR_SUBREDDIT';

function requestSubreddit(name) {
  return {
    type: REQUEST_SUBREDDIT,
    name,
  };
}

function receiveSubreddit(data) {
  return {
    type: RECEIVE_SUBREDDIT,
    data
  };
}

function errorSubreddit(error) {
  return {
    type: ERROR_SUBREDDIT,
    error
  };
}

export function fetchSubreddit(name) {
  return (dispatch) => {
    dispatch(requestSubreddit(name));
    return fetch(`https://api.reddit.com/r/${name}/hot`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveSubreddit(json)))
      .catch((error) => dispatch(errorSubreddit(error)));
  };
}
