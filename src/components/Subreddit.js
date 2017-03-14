import React from 'react';

export default class Subreddit extends React.Component {
  render() {
    const { subreddit } = this.props.params;

    return (
      <div className="subreddit">
        <p>The {subreddit} subreddit!</p>
      </div>
    );
  }
}
