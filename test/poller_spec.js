import { expect } from 'chai';
import {
  shouldFetch,
  loop,
} from '../src/poller';

describe('shouldFetch', function() {
  it('returns false if isFetching is true', function() {
    const state = {
      subreddit: {
        isFetching: true,
      },
    };

    expect(shouldFetch(state)).to.equal(false);
  });

  it('returns false if lastFetch was less than 60 seconds ago', function() {
    const aboutTenSecondsAgo = Date.now() - 10 * 1000;
    const state = {
      subreddit: {
        isFetching: false,
        lastFetch: aboutTenSecondsAgo,
      },
    };

    expect(shouldFetch(state)).to.equal(false);
  });

  it('returns true when lastFetch was over 60 seconds ago', function() {
    const aboutSeventySecondsAgo = Date.now() - 70 * 1000;
    const state = {
      subreddit: {
        isFetching: false,
        lastFetch: aboutSeventySecondsAgo,
      },
    };

    expect(shouldFetch(state)).to.equal(true);
  });

  it('returns false even if lastFetch was over 60 seconds ago if isFetching is true', function() {
    const aboutSeventySecondsAgo = Date.now() - 70 * 1000;
    const state = {
      subreddit: {
        isFetching: true,
        lastFetch: aboutSeventySecondsAgo,
      },
    };

    expect(shouldFetch(state)).to.equal(false);
  });
});
