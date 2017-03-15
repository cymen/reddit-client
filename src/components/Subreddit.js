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

  componentWillReceiveProps(nextProps) {
    const { setSubreddit } = nextProps;
    const { subreddit } = nextProps.params;

    if (subreddit !== this.props.params.subreddit) {
      setSubreddit(subreddit);
    }
  }

  renderThing = (thing) => {
    return (
      <Thing key={thing.id} thing={thing} />
    );
  }

  render() {
    const { children } = this.props;

    return (
      <div className="subreddit">
        {children && children.map(this.renderThing)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const children = (state.subreddit.children)
    ? state.subreddit.children.map((c) => c.data)
    : [];

  return {
    children,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSubreddit: (name) => dispatch(fetchSubreddit(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
