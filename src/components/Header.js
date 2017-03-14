import './Header.scss';

import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="header-bottom-left">
          <a href="https://reddit.com/" id="header-img" className="default-header">reddit.com</a>
        </div>
      </div>
    );
  }
}
