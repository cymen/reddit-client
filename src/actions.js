import fetch from 'isomorphic-fetch';
import { DEFAULT_VIEW } from './defaults';

export const REQUEST_SUBREDDIT = 'REQUEST_SUBREDDIT';
export const RECEIVE_SUBREDDIT = 'RECEIVE_SUBREDDIT';
export const ERROR_SUBREDDIT = 'ERROR_SUBREDDIT';

function requestSubreddit(name, view) {
  return {
    type: REQUEST_SUBREDDIT,
    name,
    view,
  };
}

function receiveSubreddit(name, view, response) {
  return {
    type: RECEIVE_SUBREDDIT,
    name,
    data: response.data,
    view,
  };
}

function errorSubreddit(name, view, error) {
  return {
    type: ERROR_SUBREDDIT,
    name,
    error,
    view,
  };
}

export function fetchSubreddit(name, view) {
  view = view || DEFAULT_VIEW;

  return (dispatch) => {
    dispatch(requestSubreddit(name, view));
    return fetch(`https://api.reddit.com/r/${name}/${view}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveSubreddit(name, view, json)))
      .catch((error) => dispatch(errorSubreddit(name, view, error)));
  };
}
