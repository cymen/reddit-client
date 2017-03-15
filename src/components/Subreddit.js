import React from 'react';
import { connect } from 'react-redux';
import { fetchSubreddit } from '../actions';
import Thing from './Thing';

class Subreddit extends React.Component {
  constructor(props) {
    super(props);

    const { setSubreddit } = this.props;
    const {
      subreddit,
      view,
    } = this.props.params;

    setSubreddit(subreddit, view);
  }

  componentWillReceiveProps(nextProps) {
    const { setSubreddit } = nextProps;
    const {
      subreddit,
      view,
    } = nextProps.params;

    if (subreddit !== this.props.params.subreddit || view !== this.props.params.view) {
      setSubreddit(subreddit, view);
    }
  }

  renderThing = thing => (
    <Thing key={thing.id} thing={thing} />
  );

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
    ? state.subreddit.children.map(c => c.data)
    : [];

  return {
    children,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSubreddit: (name, view) => dispatch(fetchSubreddit(name, view)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
