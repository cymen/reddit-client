import store from './store';
import { fetchSubreddit } from './actions';
import { POLL_INTERVAL_IN_SECONDS } from './defaults';

function shouldFetch() {
  const state = store.getState();
  const {
    isFetching,
    lastFetch,
  } = state.subreddit;

  return !isFetching && (Date.now() - lastFetch) >= (POLL_INTERVAL_IN_SECONDS * 1000);
}

function loop() {
  if (shouldFetch()) {
    const state = store.getState();
    const {
      name,
      view,
    } = state.subreddit;
    store.dispatch(fetchSubreddit(name, view));
  }
}

setInterval(loop, 1000);
