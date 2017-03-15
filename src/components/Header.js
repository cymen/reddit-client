import './Header.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

const categories = [ 'popular', 'all' ];
const featured = [
  'AskReddit',
  'funny',
  'todayilearned',
  'gaming',
  'worldnews',
  'aww',
  'pics',
  'gifs',
  'videos',
  'news',
  'movies',
  'mildlyinteresting',
  'showerthoughts',
  'lifeprotips',
  'iama',
  'television',
  'jokes',
  'tifu',
  'WritingPrompts',
  'space',
];
const views = [
  'hot',
  'new',
  'rising',
  'controversial',
  'top',
]; 

class Header extends React.Component {
  render() {
    const {
      activeSubreddit,
      activeView,
    } = this.props;

    return (
      <div id="header">
        <div id="sr-header-area">
          <div className="sr-list">
            <ul className="flat-list sr-bar hover">
              {categories.map((category) =>
                <li key={category} className={classNames({selected: category === activeSubreddit})}>
                  <Link to={`/r/${category}`}>{category}</Link>
                </li>
              )}
            </ul>
            <span className="separator">&nbsp;|&nbsp;</span>
            <ul className="flat-list sr-bar hover">
              {featured.map((subreddit) =>
                <li key={subreddit} className={classNames({selected: subreddit === activeSubreddit})}>
                  <Link to={`/r/${subreddit}`}>{subreddit}</Link>
                </li>
              )}
            </ul>
          </div> 
        </div>
        <div id="header-bottom-left">
          <a href="https://reddit.com/" id="header-img" className="default-header">reddit.com</a>
          {activeSubreddit &&
            <span className="hover pagename redditname">{activeSubreddit}</span>
          }
          <ul className="tabmenu">
            {views.map((view) =>
              <li key={view} className={classNames({selected: view === activeView})}>
                <Link className="choice" to={`/r/${activeSubreddit}/${view}`}>{view}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeSubreddit: state.subreddit.name,
    activeView: state.subreddit.view,
  };
};

export default connect(mapStateToProps)(Header);
