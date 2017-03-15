import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';
import {
  REQUEST_SUBREDDIT,
  RECEIVE_SUBREDDIT,
  ERROR_SUBREDDIT,
  fetchSubreddit,
} from '../src/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates RECEIVE_SUBREDDIT when fetching subreddit finishes', () => {
    nock('https://api.reddit.com/')
      .get('/r/news/hot')
      .reply(200, {
        data: {
          children: [
            {
              kind: 't3',
              data: 'some data here...',
            },
          ],
        },
      });

    const expectedActions = [
      {
        type: REQUEST_SUBREDDIT,
        name: 'news',
        view: 'hot',
      },
      {
        type: RECEIVE_SUBREDDIT,
        name: 'news',
        view: 'hot',
        data: {
          children: [
            {
              kind: 't3',
              data: 'some data here...',
            },
          ],
        },
      },
    ];

    const store = mockStore({
      subreddit: {},
    });

    return store.dispatch(fetchSubreddit('news', 'hot'))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it('creates ERROR_SUBREDDIT when fetching subreddit errors', () => {
    nock('https://api.reddit.com/')
      .get('/r/news/hot')
      .replyWithError('some error');

    const expectedActions = [
      {
        type: REQUEST_SUBREDDIT,
        name: 'news',
        view: 'hot',
      },
      {
        type: ERROR_SUBREDDIT,
        name: 'news',
        view: 'hot',
        error: {
          code: undefined,
          errno: undefined,
          message: 'request to https://api.reddit.com/r/news/hot failed, reason: some error',
          name: 'FetchError',
          type: 'system',
        },
      },
    ];

    const store = mockStore({
      subreddit: {},
    });

    return store.dispatch(fetchSubreddit('news', 'hot'))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
