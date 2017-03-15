import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
	IndexRedirect,
  IndexRoute,
	Route,
	Router,
	browserHistory,
} from 'react-router';
import store from './store';
import App from './components/App';
import Subreddit from './components/Subreddit';
import { run } from './poller';
import { DEFAULT_SUBREDDIT } from './defaults';

run(); // start the background poller

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="r" />
        <Route path="r">
          <IndexRedirect to={DEFAULT_SUBREDDIT} />
          <Route path=":subreddit">
            <IndexRoute component={Subreddit} />
            <Route path=":view" component={Subreddit} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
