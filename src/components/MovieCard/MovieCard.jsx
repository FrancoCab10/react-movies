import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ReactComponent as Star } from '../icons/star.svg';
import styles from './MovieCard.module.scss';

const truncateText = (text) => text.length > 120 ? `${text.slice(0, 120)}...` : text;

const MovieCard = ({ movie, onSelect }) => (
  <Card className={`${styles.MovieCard} shadow`} onClick={() => onSelect(movie.id)}>
    <div className={styles['image-container']}>
      <Card.Img variant="top" src={movie.image || '/assets/missing_movie.svg'} />
    </div>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
        {truncateText(movie.plot)}
      </Card.Text>
      <hr/>
      <Row>
        <Col className={styles.rating}>{(+movie.rating).toFixed(1)} <Star /></Col>
        <Col className={styles.date}>{movie.year}</Col>
      </Row>
    </Card.Body>
  </Card>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    plot: PropTypes.string,
    rating: PropTypes.number,
    year: PropTypes.number,
  }).isRequired
};

export default MovieCard;