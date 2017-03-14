import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
	IndexRedirect,
	Route,
	Router,
	browserHistory,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
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
          <Route path=":subreddit" component={Subreddit} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
