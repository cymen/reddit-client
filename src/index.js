import React from 'react';
import { render } from 'react-dom';
import {
	IndexRedirect,
	Route,
	Router,
	browserHistory,
} from 'react-router';
import App from './components/App';
import Subreddit from './components/Subreddit';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="r" />
      <Route path="r">
        <IndexRedirect to="news" />
        <Route path=":subreddit" component={Subreddit} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
