import './Header.scss';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { activeSubreddit } = this.props;

    return (
      <div id="header">
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
