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
import configureStore from './configureStore';
import App from './components/App';
import Subreddit from './components/Subreddit';

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="r" />
        <Route path="r">
          <IndexRedirect to="news" />
          <Route path=":subreddit">
            <IndexRoute component={Subreddit} />
            <Route path=":view" component={Subreddit} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
