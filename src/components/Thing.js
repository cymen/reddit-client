import './Thing.scss';
import React from 'react';

export default class Thing extends React.Component {
  render() {
    return (
      <div className="thing">
        <p className="title"><a href="#" target="_blank">Title</a></p>
        <p className="tagline">submitted ...</p>
        <ul className="flat-list buttons">
          <li>
            <a href="#">42 comments</a>
          </li>
        </ul>
      </div>
    );
  }
}
