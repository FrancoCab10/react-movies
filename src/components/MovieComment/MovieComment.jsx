import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Media from 'react-bootstrap/Media';
import styles from './MovieComment.module.scss';

const MovieComment = ({ comment }) => (
  <Media className={`${styles.MovieComment} shadow`}>
    <img
      width={48}
      height={48}
      className="mr-3"
      src={comment.user.avatar || '/assets/person.svg'}
      alt="avatar"
    />
    <Media.Body>
      <h5>{comment.user.name} {comment.user.lastName}</h5>
      <p>
        {comment.comment}
      </p>
      <span className={styles['comment-date']}>Posted {moment(comment.createdAt).format('YYYY-MM-DD HH:mm')}</span>
    </Media.Body>
  </Media>
);

MovieComment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number, 
      name: PropTypes.string, 
      lastName: PropTypes.string, 
      avatar: PropTypes.string
    }),
    comment: PropTypes.string,
    date: PropTypes.shape({
      year: PropTypes.number,
      month: PropTypes.number,
      day: PropTypes.number,
      hour: PropTypes.number,
      minutes: PropTypes.number
    })
  }).isRequired
};

export default MovieComment;