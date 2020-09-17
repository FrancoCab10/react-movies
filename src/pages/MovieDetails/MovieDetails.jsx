import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import NavBar from '../../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { ReactComponent as Star } from '../../components/icons/star.svg';
import { ReactComponent as Close } from '../../components/icons/close.svg';
import { ReactComponent as Add } from '../../components/icons/add.svg';
import styles from './MovieDetails.module.scss';
import RatingWidget from '../../components/RatingWidget/RatingWidget';
import MovieComment from '../../components/MovieComment';
import E404 from '../../pages/E404';

const MovieDetails = ({ session, movie, onMovieSelect, onRatingChange, onCommentAdd }) => {
  const [addComment, setAddComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { id } = useParams();

  useEffect(() => {
    onMovieSelect(id);
  }, [onMovieSelect, id]);

  const handleRatingChange = (rating) => {
    onRatingChange(id, rating);
  };

  const handleCommentAdd = () => {
    onCommentAdd(id, commentText);
    setCommentText('');
    setAddComment(false);
  };

  const handleCommentCancel = () => {
    setCommentText('');
    setAddComment(false);
  };

  if (movie === false) return (<E404 />);
  return (
    <Container fluid className={styles.MovieDetails}>
      <NavBar bg="primary" variant="dark" />

      {movie === null ? 
      (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="secondary" size="lg" />
        </div>
      ) :
      (
        <Container>
        <Row className="pt-3">
          <Col xs={12} className="d-md-none mb-4">
            <Row>
              <Col xs={10}>
                <h1 className="h3">{movie.title}</h1>
              </Col>
              <Col xs={2} className={styles['button-close']}>
                <Link to="/movies"><Close title="Close" /></Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <img src={movie.image || '/assets/missing_movie.svg'} alt="movie" className="img-responsive mb-5" width="100%"/>
          </Col>
          <Col xs={12} md={8}>
            <Row className="d-none d-md-flex mb-md-4">
              <Col xs={11}><h1>{movie.title}</h1></Col>
              <Col xs={1} className={styles['button-close']}>
                <Link to="/movies"><Close title="Close"/></Link>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={12}>{movie.plot}</Col>
            </Row>
            <Row className={styles['info-row']}>
              <Col xs={6} className={styles['info-title']}>Release Date:</Col>
              <Col xs={6} className={styles['info-text']}>
                {moment(movie.released_on).format('YYYY-MM-DD')}
              </Col>
            </Row>
            <Row className={styles['info-row']}>
              <Col xs={6} className={styles['info-title']}>Genres:</Col>
              <Col xs={6} className={styles['info-text']}>{movie.genre}</Col>
            </Row>
            <Row className={styles['info-row']}>
              <Col xs={6} className={styles['info-title']}>Director:</Col>
              <Col xs={6} className={styles['info-text']}>{movie.director}</Col>
            </Row>
            <Row className={styles['info-row']}>
              <Col xs={6} className={styles['info-title']}>Rated:</Col>
              <Col xs={6} className={styles['info-text']}>{movie.rated}</Col>
            </Row>
            <Row className={styles['info-row']}>
              <Col xs={6} className={styles['info-title']}>Average Rating:</Col>
              <Col xs={6} className={`${styles['info-text']} ${styles.rating}`}>
                {(+movie.rating).toFixed(1)} <Star />
              </Col>
            </Row>
            {session && (
              <Row className={styles['info-row']}>
                <Col xs={4} md={6} className={styles['info-title']}>Your rating:</Col>
                <Col xs={8} md={6}><RatingWidget rating={movie.userRating} onChange={handleRatingChange}/></Col>
              </Row>
            )}
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={9} sm={10} md={11}>
            <h3>Comments</h3>
          </Col>
          {session && (
            <Col xs={3} sm={2} md={1} className={styles['button-add-comment']}>
              <Add onClick={() => setAddComment(true)} title="Add a comment"/>
            </Col>
          )}
        </Row>
        <hr />
        {session && addComment && (
          <Row>        
            <Col xs={12}>
              <Form.Group controlId="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows="3" 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </Form.Group>
              <Button variant="secondary" className="mr-3" onClick={handleCommentAdd}>Add</Button>
              <Button variant="outline-primary" onClick={handleCommentCancel}>Cancel</Button>
              <hr />
            </Col>
          </Row>
        )}
        
        <Row>
          {!movie.comments[0] && (
            <Col xs={12}>
              <Alert variant="info">There are no coments yet</Alert>
            </Col>
          )}
          {movie.comments && movie.comments.map((comment) => (
            <Col xs={12} key={comment.id}>
              <MovieComment comment={comment} />
            </Col>
          ))}
        </Row>
      </Container>
    )}

    </Container>
  );
};

MovieDetails.propTypes = {
  session: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movie: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      plot: PropTypes.string,
      rating: PropTypes.number,
      userRating: PropTypes.number,
      date: PropTypes.string,
      comments: PropTypes.array
    }),
  ]),
  onRatingChange: PropTypes.func, 
  onCommentAdd: PropTypes.func
};

MovieDetails.defaultProps = {
  session: null,
  movie: null,
  onRatingChange: () => {},
  onCommentAdd: () => {}
};

export default MovieDetails;