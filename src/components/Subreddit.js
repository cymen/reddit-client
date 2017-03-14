import React from 'react';
import Thing from './Thing';
import { connect } from 'react-redux';
import { fetchSubreddit } from '../actions';

class Subreddit extends React.Component {
  constructor(props) {
    super(props);

    const { setSubreddit } = this.props;
    const { subreddit } = this.props.params;

    setSubreddit(subreddit);
  }

  render() {
    const { subreddit } = this.props.params;

    return (
      <div className="subreddit">
        <p>The {subreddit} subreddit!</p>
        {Array(25).fill().map((_, i) => <Thing key={i} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSubreddit: (name) => dispatch(fetchSubreddit(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
