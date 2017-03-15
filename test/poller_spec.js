import { expect } from 'chai';
import { spy } from 'sinon';

const pollerInjector = require('inject-loader!../src/poller'); // eslint-disable-line

const fakeDispatch = spy();
const fakeState = {
  name: 'news',
  view: 'hot',
  isFetching: false,
  lastFetch: null,
};
const poller = pollerInjector({
  './store': {
    dispatch: fakeDispatch,
    getState: () =>
      ({
        subreddit: fakeState,
      }),
  },
});
const {
  shouldFetch,
  loop,
} = poller;

describe('shouldFetch', () => {
  it('returns false if isFetching is true', () => {
    const state = {
      subreddit: {
        isFetching: true,
      },
    };

    expect(shouldFetch(state)).to.equal(false);
  });

  it('returns false if lastFetch was less than 60 seconds ago', () => {
    const aboutTenSecondsAgo = Date.now() - (10 * 1000);
    const state = {
      subreddit: {
        isFetching: false,
        lastFetch: aboutTenSecondsAgo,
      },
    };

    expect(shouldFetch(state)).to.equal(false);
  });

  it('returns true when lastFetch was over 60 seconds ago', () => {
    const aboutSeventySecondsAgo = Date.now() - (70 * 1000);
    const state = {
      subreddit: {
        isFetching: false,
        lastFetch: aboutSeventySecondsAgo,
      },
    };

    expect(shouldFetch(state)).to.equal(true);
  });

  it('returns false even if lastFetch was over 60 seconds ago if isFetching is true', () => {
    const aboutSeventySecondsAgo = Date.now() - (70 * 1000);
    const state = {
      subreddit: {
        isFetching: true,
        lastFetch: aboutSeventySecondsAgo,
      },
    };

    expect(shouldFetch(state)).to.equal(false);
  });
});

describe('loop', () => {
  it('calls dispatch when shouldFetch is true', () => {
    fakeState.lastFetch = 42;

    loop();

    expect(fakeDispatch.called).to.equal(true);
  });

  it('does not call dispatch when shouldFetch is false', () => {
    fakeState.lastFetch = Date.now();

    loop();

    expect(fakeDispatch.called).to.equal(true);
  });
});
