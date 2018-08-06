import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
//for thumbUp and thumbDown
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FontAwesomeIcon icon="trash" /><FormattedMessage id="deletePost" /></a></p>
      <div className={styles.thumbs}>
        <span onClick={props.thumbUp}><FontAwesomeIcon icon="arrow-alt-circle-up" className={styles.thumbUp} /></span>
        <span>Votes: {props.post.votes}</span>
        <span onClick={props.thumbDown}><FontAwesomeIcon icon="arrow-alt-circle-down" className={styles.thumbDown} /></span>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  handleThumbUp: PropTypes.func.isRequired,
  handleThumbDown: PropTypes.func.isRequired,
};

export default PostListItem;
