export const REQUEST_SUBREDDIT = 'REQUEST_SUBREDDIT';
export const RECEIVE_SUBREDDIT = 'RECEIVE_SUBREDDIT';
export const ERROR_SUBREDDIT = 'ERROR_SUBREDDIT';

function requestSubreddit(name) {
  return {
    type: REQUEST_SUBREDDIT,
    name,
  };
}

function receiveSubreddit(name, response) {
  return {
    type: RECEIVE_SUBREDDIT,
    name,
    data: response.data,
  };
}

function errorSubreddit(name, error) {
  return {
    type: ERROR_SUBREDDIT,
    name,
    error,
  };
}

export function fetchSubreddit(name) {
  return (dispatch) => {
    dispatch(requestSubreddit(name));
    return fetch(`https://api.reddit.com/r/${name}/hot`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveSubreddit(name, json)))
      .catch((error) => dispatch(errorSubreddit(name, error)));
  };
}
