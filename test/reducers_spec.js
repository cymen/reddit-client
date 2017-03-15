import { expect } from 'chai';
import timekeeper from 'timekeeper';
const frozenTime = Date.now();
timekeeper.freeze(frozenTime);
import { subreddit } from '../src/reducers';
import {
  REQUEST_SUBREDDIT,
  RECEIVE_SUBREDDIT,
  ERROR_SUBREDDIT,
} from '../src/actions';

describe('subreddit reducer', function() {
  it('should return the initial state', function() {
    const state = subreddit(undefined, {});

    expect(
      subreddit(undefined, {})
    ).to.eql({
      isFetching: false,
      lastFetch: frozenTime,
      name: 'news',
      view: 'hot',
    });
  });

  it('should handle REQUEST_SUBREDDIT', function() {
    expect(
      subreddit(undefined, {
        type: REQUEST_SUBREDDIT,
        name: 'xyz',
        view: '42',
      })
    ).to.eql({
      isFetching: true,
      lastFetch: frozenTime,
      name: 'xyz',
      view: '42',
    });
  });

  it('should handle RECEIVE_SUBREDDIT', function() {
    expect(
      subreddit(
        {
          name: 'annarbor',
          view: 'new'
        },
        {
          type: RECEIVE_SUBREDDIT,
          name: 'annarbor',
          view: 'new',
          data: {
            children: 'the children are here',
            after: 'xyz10',
            before: 'ooo3',
          },
        }
      )
    ).to.eql({
      isFetching: false,
      lastFetch: frozenTime,
      name: 'annarbor',
      view: 'new',
      children: 'the children are here',
      after: 'xyz10',
      before: 'ooo3',
    });
  });

  it('should handle ERROR_SUBREDDIT');
}); 
