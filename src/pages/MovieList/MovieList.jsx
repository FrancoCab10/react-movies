import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../../components/MovieCard';
import styles from './MovieList.module.scss';

const MovieList = ({ movies, filter, onFilterChange }) => {
  const history = useHistory();

  useEffect(() => {
    onFilterChange(filter);
  }, [onFilterChange, filter]);

  const handleFilterChange = (e) => onFilterChange(e.target.value);
  const handleMovieSelect = (id) => history.push(`/movies/${id}`);

  return (
    <Container fluid className={styles.MovieList}>
      <NavBar bg="primary" variant="dark"/>
    
      <Container>
        <Row>
          <Col xs={12} md={8}><h1 className="mb-5">Movie List</h1></Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="search">
              <Form.Label>Search Movies</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter a movie title..." 
                value={filter} 
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {!movies[0] && (
            <Col xs={12}>
              <Alert variant="info">No movies found</Alert>
            </Col>
          )}
          {movies && movies.map((movie) => (
            <Col key={movie.id} xs={12} md={6} lg={4} xl={3}>
              <MovieCard movie={movie} onSelect={handleMovieSelect}/>
            </Col>
          ))}
        </Row>
      </Container>

    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    plot: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
  })),
  filter: PropTypes.string,
  onFilterChange: PropTypes.func
};

MovieList.defaultProps = {
  movies: [],
  filter: '',
  onFilterChange: () => {},
};

export default MovieList;