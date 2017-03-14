import React from 'react';
import Thing from './Thing';

export default class Subreddit extends React.Component {
  render() {
    const { subreddit } = this.props.params;

    return (
      <div className="subreddit">
        <p>The {subreddit} subreddit!</p>
        {Array(25).fill().map((_, i) => <Thing />)}
      </div>
    );
  }
}
