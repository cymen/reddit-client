import './Thing.scss';
import React from 'react';
import classNames from 'classnames';
import isImage from 'is-image';
import moment from 'moment';

export default class Thing extends React.Component {
  renderThumbnail = () => {
    const {
      thumbnail,
      url,
    } = this.props.thing;

    if (thumbnail) {
      return (
        <a
          className={classNames("thumbnail", {
            default: !isImage(thumbnail),
          })}
          href={url}
        >
          {isImage(thumbnail) &&
            <img src={thumbnail} width="70" height="auto" />
          }
        </a>
      );
    }
  }

  renderDomain = () => {
    const { domain } = this.props.thing;

    return (
      <span className="domain">(<a href={`https://reddit.com/domain/${domain}`}>{domain}</a>)</span>
    );
  }

  render() {
    const {
      author,
      created_utc,
      num_comments,
      permalink,
      title,
      url,
    } = this.props.thing;

    return (
      <div className="thing">
        {this.renderThumbnail()}
        <div className="entry">
          <p className="title"><a href={url} target="_blank">{title}</a> {this.renderDomain()}</p>
          <p className="tagline">submitted {moment(created_utc * 1000).from()} by {author}</p>
          <ul className="flat-list buttons">
            <li>
              <a href={`https://www.reddit.com${permalink}`} target="_blank">{num_comments} comments</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
