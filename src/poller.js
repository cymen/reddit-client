import store from './store';
import { fetchSubreddit } from './actions';
import { POLL_INTERVAL_IN_SECONDS } from './defaults';

export function shouldFetch(state) {
  const {
    isFetching,
    lastFetch,
  } = state.subreddit;

  return !isFetching && (Date.now() - lastFetch) >= (POLL_INTERVAL_IN_SECONDS * 1000);
}

export function loop() {
  const state = store.getState();

  if (shouldFetch(state)) {
    const {
      name,
      view,
    } = state.subreddit;
    store.dispatch(fetchSubreddit(name, view));
  }
}

export function run() {
  setInterval(loop, 1000);
}
