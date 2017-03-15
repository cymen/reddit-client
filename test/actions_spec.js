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

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', function() {
  afterEach(function() {
    nock.cleanAll();
  });

  it('creates RECEIVE_SUBREDDIT when fetching subreddit finishes', function() {
    nock('https://api.reddit.com/')
      .get('/r/news/hot')
      .reply(200, {
        data: {
          children: [
            {
              kind: 't3',
              data: 'some data here...',
            }
          ]
        }
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
              }
            ]
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
