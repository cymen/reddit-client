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

class Header extends React.Component {
  render() {
    const { activeSubreddit } = this.props;

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
            <strong>/r/{activeSubreddit}</strong>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeSubreddit: state.subreddit.name,
  };
};

export default connect(mapStateToProps)(Header);
